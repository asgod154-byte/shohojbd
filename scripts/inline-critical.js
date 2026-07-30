import { generate } from 'critical';
import { readdir } from 'fs/promises';
import path from 'path';

const DIST = path.resolve('dist');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(res)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(res);
    }
  }
  return files;
}

(async () => {
  try {
    const htmlFiles = await walk(DIST);
    for (const file of htmlFiles) {
      const rel = path.relative(DIST, file);
      console.log('Inlining critical CSS for', rel);
      await generate({
        base: DIST,
        src: rel,
        inline: true,
        width: 1300,
        height: 900
      });
    }
    console.log('Critical CSS inlining complete');
  } catch (err) {
    console.error('Critical inlining failed:', err);
    process.exitCode = 1;
  }
})();
