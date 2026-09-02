import { open } from 'node:fs/promises'

/**
 * True when the file is JPEG, PNG, GIF, or WebP (Cloudflare Images rasters).
 * SVG placeholders saved as .jpg must not be uploaded.
 */
export async function isRasterImageFile(filePath) {
  const handle = await open(filePath, 'r')
  try {
    const buffer = Buffer.alloc(12)
    const { bytesRead } = await handle.read(buffer, 0, 12, 0)
    return isRasterImageBytes(buffer.subarray(0, bytesRead))
  } finally {
    await handle.close()
  }
}

export function isRasterImageBytes(bytes) {
  if (!bytes || bytes.length < 3) {
    return false
  }
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return true
  }
  if (
    bytes.length >= 4 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return true
  }
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
    return true
  }
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return true
  }
  return false
}
