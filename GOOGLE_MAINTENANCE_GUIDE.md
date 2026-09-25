# Google Maintenance Guide - Quick Reference
## Ongoing Maintenance for arroyoskyeview.com

**Last Updated**: January 2025

---

## 📋 Weekly Tasks

### 1. Monitor Google Search Console
- **Location**: [search.google.com/search-console](https://search.google.com/search-console)
- **Check**:
  - Coverage report (indexing issues)
  - Enhancements (schema errors)
  - Performance (search analytics)
  - Core Web Vitals

### 2. Review Schema Errors
- **Tool**: [Rich Results Test](https://search.google.com/test/rich-results)
- **Test Pages**: Random sample of 3-5 pages weekly
- **Fix**: Any new schema errors immediately

---

## 📋 Monthly Tasks

### 1. Update Sitemap
- **File**: `app/sitemap.ts`
- **Update**: `lastModified` dates for active pages
- **Check**: All new pages are included

### 2. Review NAP Consistency
- **Verify**: Business address matches Google Business Profile
- **Current**: 8912 Vanhoy Crk St, Las Vegas, NV 89166
- **Phone**: (702) 903-4687
- **Check**: All schema markup uses correct NAP

### 3. Content Freshness
- **Update**: Blog posts with current dates
- **Review**: FAQ sections for accuracy
- **Refresh**: Community page content if needed

### 4. Internal Linking Audit
- **Check**: "People Also Search For" component
- **Verify**: Cross-community links are working
- **Update**: Related content links

---

## 📋 Quarterly Tasks

### 1. Comprehensive SEO Audit
- **Review**: All metadata (titles, descriptions)
- **Check**: Canonical URLs
- **Verify**: OpenGraph tags
- **Test**: Mobile-friendliness

### 2. Schema Markup Review
- **Validate**: All schema types using Rich Results Test
- **Update**: Any deprecated schema properties
- **Check**: New schema opportunities

### 3. Performance Optimization
- **Test**: Core Web Vitals
- **Optimize**: Images (compress, convert formats)
- **Review**: Script loading strategies
- **Check**: Page speed scores

### 4. Google Business Profile Sync
- **Verify**: NAP matches exactly
- **Update**: Business hours if changed
- **Review**: Services offered
- **Check**: Photos and posts

---

## 🚨 Immediate Action Items

### When Adding New Pages

1. **Add to Sitemap**
   ```typescript
   // In app/sitemap.ts
   {
     url: `${baseUrl}/new-page`,
     lastModified: new Date(),
     changeFrequency: 'weekly',
     priority: 0.9,
   }
   ```

2. **Add Schema Markup**
   - Use `PageSchemas` component
   - Select appropriate `pageType`
   - Include FAQ if relevant

3. **Add Metadata**
   - Unique title (50-60 chars)
   - Unique description (150-160 chars)
   - Canonical URL
   - OpenGraph tags

4. **Request Indexing**
   - Use Google Search Console URL Inspection
   - Request indexing for new page

### When Schema Errors Appear

1. **Identify Error**
   - Check Google Search Console Enhancements
   - Use Rich Results Test

2. **Fix Schema**
   - Update `app/components/page-schemas.tsx`
   - Test fix with Rich Results Test

3. **Request Re-validation**
   - In Search Console, click "Request Validation"
   - Wait 24-48 hours

---

## 📊 Key Metrics to Monitor

### Google Search Console
- **Coverage**: Pages indexed vs. discovered
- **Enhancements**: Schema errors count
- **Performance**: 
  - Impressions
  - Clicks
  - Average position
  - CTR

### Google Analytics
- **Traffic**: Organic search traffic
- **Conversions**: Goal completions
- **Behavior**: Page views, bounce rate
- **Acquisition**: Traffic sources

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔧 Quick Fixes

### Schema Error: "Invalid object type"
- **Fix**: Check `areaServed` is an array, not object
- **File**: `app/components/page-schemas.tsx`

### NAP Mismatch
- **Fix**: Update postal code in all schema files
- **Files**: 
  - `app/components/page-schemas.tsx`
  - `app/components/review-schema.tsx`
  - `app/components/structured-data.tsx`

### Page Not Indexed
- **Fix**: 
  1. Verify in sitemap
  2. Check robots.txt allows it
  3. Request indexing in Search Console
  4. Add internal links to page

### Slow Page Speed
- **Fix**:
  1. Optimize images (WebP format)
  2. Defer non-critical scripts
  3. Enable compression
  4. Use Next.js Image component

---

## 📞 Important Links

- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Google Business Profile**: https://www.google.com/business/

---

## ✅ Current Configuration

### Google Analytics
- **ID**: G-6HBW87EGMR
- **Status**: Active
- **Location**: `app/layout.tsx`

### Google Verification
- **Code**: G-6HBW87EGMR
- **Method**: Meta tag
- **Location**: `app/layout.tsx`

### Sitemap
- **URL**: https://www.arroyoskyeview.com/sitemap.xml
- **Pages**: 28 pages
- **Location**: `app/sitemap.ts`

### Robots.txt
- **URL**: https://www.arroyoskyeview.com/robots.txt
- **Location**: `app/robots.ts`

---

## 🎯 Success Indicators

### Week 1-2
- ✅ All pages indexed
- ✅ No schema errors
- ✅ Sitemap submitted

### Month 1-3
- 📈 25-40% increase in organic traffic
- 📈 Improved search rankings
- 📈 Better local visibility

### Month 3-6
- 📈 50-75% increase in organic traffic
- 📈 Strong topic authority
- 📈 More conversions

---

**Remember**: Consistency is key. Regular monitoring and quick fixes prevent small issues from becoming big problems.

