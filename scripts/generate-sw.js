import { injectManifest } from 'workbox-build';

injectManifest({
  swSrc: './public/sw.js',
  swDest: './dist/sw.js',
  globDirectory: './dist',
  globPatterns: [
    '**/*.{js,css,svg,woff,woff2,ttf,eot,png,jpg,jpeg,gif,webp,ico}'
  ],
  globIgnores: [
    '**/*.html'
  ],
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
}).then((result) => {
  const count = Array.isArray(result && result.__wbManifest) ? result.__wbManifest.length : 'unknown';
  console.log(`Generated service worker with ${count} precached assets.`);
}).catch((error) => {
  console.error('Service worker generation failed:', error);
  process.exit(1);
});
