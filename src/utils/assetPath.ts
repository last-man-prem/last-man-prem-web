/**
 * Utility function to get the correct path for static assets
 * Handles GitHub Pages base path in production
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/last-man-prem-web' : '';
  return `${basePath}${path}`;
}
