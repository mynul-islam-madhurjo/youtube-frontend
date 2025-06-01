/**
 * Placeholder image generators
 * Creates base64 encoded SVG placeholders for missing images
 */

/**
 * Generate avatar placeholder as base64 data URL
 * @param {string} initials - User initials (optional)
 * @param {number} size - Image size in pixels
 * @returns {string} Base64 data URL
 */
export function generateAvatarPlaceholder(initials = '?', size = 40) {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="#e5e7eb" rx="${size/8}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size/2.5}" 
            fill="#6b7280" text-anchor="middle" dy="0.35em" font-weight="600">
        ${initials.charAt(0).toUpperCase()}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Generate video thumbnail placeholder as base64 data URL
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} Base64 data URL
 */
export function generateVideoPlaceholder(width = 320, height = 180) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f3f4f6"/>
      <rect x="${width/2 - 40}" y="${height/2 - 20}" width="80" height="40" rx="8" fill="#9ca3af"/>
      <polygon points="${width/2 - 10},${height/2 - 10} ${width/2 - 10},${height/2 + 10} ${width/2 + 10},${height/2}" 
               fill="#ffffff"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
} 