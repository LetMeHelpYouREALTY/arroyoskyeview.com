#!/usr/bin/env node
/**
 * Migrates marketing pages to MarketingPageShell (v2).
 * Handles div.min-h-screen wrapper and unwraps inner <main>.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const APP = join(process.cwd(), "app");
const SKIP_DIRS = new Set(["api", "components"]);
const ALREADY_DONE = new Set([
  "page.tsx",
  "arroyo-at-skyeview/available-homes/page.tsx",
  "arroyo-at-skyeview/floor-plans/page.tsx",
  "arroyo-at-skyeview/overview/page.tsx",
  "arroyo-at-skyeview/area/page.tsx",
  "arroyo-at-skyeview/homesite-map/page.tsx",
  "legal/page.tsx",
]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      walk(p, files);
    } else if (name === "page.tsx") {
      files.push(p);
    }
  }
  return files;
}

function depthOfMain(content, mainStart) {
  const mainTagEnd = content.indexOf(">", mainStart) + 1;
  let depth = 1;
  let i = mainTagEnd;
  while (i < content.length) {
    const nextOpen = content.indexOf("<main", i);
    const nextClose = content.indexOf("</main>", i);
    if (nextClose === -1) return -1;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      const tagSlice = content.slice(nextOpen, content.indexOf(">", nextOpen) + 1);
      if (!tagSlice.endsWith("/>")) {
        depth++;
        i = content.indexOf(">", nextOpen) + 1;
        continue;
      }
    }
    depth--;
    if (depth === 0) return nextClose;
    i = nextClose + 7;
  }
  return -1;
}

function extractBalancedTag(content, tagName, startIdx) {
  const openPattern = new RegExp(`<${tagName}(\\s|>|/)`, "g");
  openPattern.lastIndex = startIdx;
  const openMatch = openPattern.exec(content);
  if (!openMatch) return null;

  const tagStart = openMatch.index;
  if (content.slice(tagStart).match(new RegExp(`^<${tagName}[^>]*/>`))) {
    const selfClose = content.indexOf("/>", tagStart) + 2;
    return { start: tagStart, end: selfClose, inner: "" };
  }

  const openEnd = content.indexOf(">", tagStart) + 1;
  let depth = 1;
  let i = openEnd;
  const closeTag = `</${tagName}>`;

  while (i < content.length && depth > 0) {
    const nextOpen = content.indexOf(`<${tagName}`, i);
    const nextClose = content.indexOf(closeTag, i);
    if (nextClose === -1) return null;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      const snippet = content.slice(nextOpen, nextOpen + tagName.length + 20);
      if (!snippet.includes("/>")) {
        depth++;
        i = nextOpen + tagName.length + 1;
        continue;
      }
    }
    depth--;
    if (depth === 0) {
      return {
        start: tagStart,
        end: nextClose + closeTag.length,
        inner: content.slice(openEnd, nextClose),
      };
    }
    i = nextClose + closeTag.length;
  }
  return null;
}

function migrate(content, relPath) {
  if (ALREADY_DONE.has(relPath)) return null;
  if (!content.includes("<Header />") || !content.includes("<Footer />")) {
    return null;
  }
  if (
    content.includes("<MarketingPageShell") &&
    !content.includes("<div className=\"min-h-screen bg-background\">")
  ) {
    return null;
  }

  let out = content;

  // Normalize import
  out = out.replace(
    /import \{ MarketingPageShell \} from ["']@\/app\/components\/marketing-page-shell["'];\n/g,
    ""
  );
  out = out.replace(
    /import \{ MarketingPageShell \} from ['"]\.\.\/components\/marketing-page-shell['"];\n/g,
    ""
  );
  out = out.replace(
    /import \{ MarketingPageShell \} from ['"]\.\.\/\.\.\/components\/marketing-page-shell['"];\n/g,
    ""
  );

  const depth = relPath.split("/").length - 1;
  const shellImport = `import MarketingPageShell from "${"../".repeat(depth)}components/marketing-page-shell"\n`;

  if (!out.includes("marketing-page-shell")) {
    const metaEnd = out.indexOf("export const metadata");
    const funcStart = out.indexOf("export default function");
    const insertAt = metaEnd !== -1 ? metaEnd : funcStart;
    out = out.slice(0, insertAt) + shellImport + out.slice(insertAt);
  } else if (out.includes('@/app/components/marketing-page-shell')) {
    out = out.replace(
      /import MarketingPageShell from ['"]@\/app\/components\/marketing-page-shell['"];\n/g,
      shellImport
    );
  }

  // Remove chrome imports
  out = out.replace(
    /import (?:\{ )?PurpleSaleBanner(?: \})? from ['"][^'"]+purple-sale-banner['"];\n/g,
    ""
  );
  out = out.replace(
    /import (?:\{ )?Header(?: \})? from ['"][^'"]+header['"];\n/g,
    ""
  );
  out = out.replace(
    /import (?:\{ )?Footer(?: \})? from ['"][^'"]+footer['"];\n/g,
    ""
  );

  const wrapperMatch = out.match(
    /return \(\s*\n\s*<div className="min-h-screen bg-background">\s*\n/
  );
  if (!wrapperMatch) return null;

  const wrapperStart = out.indexOf(wrapperMatch[0]);
  const innerStart = wrapperStart + wrapperMatch[0].length;

  const headerIdx = out.indexOf("<Header />", innerStart);
  if (headerIdx === -1) return null;

  const preHeader = out.slice(innerStart, headerIdx);
  const schemaBlock = preHeader
    .replace(/<PurpleSaleBanner\s*\/?>\s*\n?/g, "")
    .trim();

  if (!schemaBlock.includes("PageSchemas")) return null;

  const mainOpenIdx = out.indexOf("<main", headerIdx);
  if (mainOpenIdx === -1) return null;

  const mainCloseIdx = depthOfMain(out, mainOpenIdx);
  if (mainCloseIdx === -1) return null;

  const mainTagEnd = out.indexOf(">", mainOpenIdx) + 1;
  const mainInner = out.slice(mainTagEnd, mainCloseIdx).trim();

  const afterMain = out.slice(mainCloseIdx + 7);
  const footerMatch = afterMain.match(/^\s*<Footer[^/]*\/>\s*\n?/);
  let trailingSchemas = "";
  if (footerMatch) {
    trailingSchemas = afterMain.slice(footerMatch[0].length).trim();
    trailingSchemas = trailingSchemas.replace(/<\/div>\s*\n\s*\)\s*\n\}/, "").trim();
  }

  const showContactCta =
    !relPath.includes("contact-us/page.tsx") &&
    !mainInner.includes("<DrJanContactCard");

  const legalPage =
    relPath.includes("privacy-policy") ||
    relPath.includes("terms-of-use") ||
    relPath.includes("accessibility") ||
    relPath.includes("legal/");

  let schemaProp;
  if (trailingSchemas) {
    schemaProp = `schema={
        <>
          ${schemaBlock}
          ${trailingSchemas}
        </>
      }`;
  } else if (schemaBlock.includes("\n")) {
    schemaProp = `schema={
        ${schemaBlock}
      }`;
  } else {
    schemaProp = `schema={${schemaBlock}}`;
  }

  const shellOpen = `return (
    <MarketingPageShell
      ${schemaProp}
      showContactCta={${showContactCta}}${legalPage ? "\n      showBanner={false}" : ""}
    >
      ${mainInner}
    </MarketingPageShell>
  )
}`;

  const funcClose = out.lastIndexOf("\n}");
  const beforeReturn = out.slice(0, wrapperStart);
  out = beforeReturn + shellOpen;

  return out;
}

const files = walk(APP);
let count = 0;
for (const file of files) {
  const rel = relative(APP, file);
  const content = readFileSync(file, "utf8");
  const migrated = migrate(content, rel);
  if (migrated && migrated !== content) {
    writeFileSync(file, migrated);
    console.log("Migrated:", rel);
    count++;
  }
}
console.log(`Done. Migrated ${count} files.`);
