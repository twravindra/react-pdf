import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

function copyDir(from: string, to: string) {
  // Ensure target directory exists
  fs.mkdirSync(to, { recursive: true });

  const files = fs.readdirSync(from);
  files.forEach((file) => {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  });
}

const require = createRequire(import.meta.url);
const standardFontsDir = path.join(
  path.dirname(require.resolve('pdfjs-dist/package.json')),
  'standard_fonts',
);
const targetDir = path.join('dist', 'assets', 'standard_fonts');

copyDir(standardFontsDir, targetDir);
