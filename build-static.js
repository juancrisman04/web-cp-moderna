import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = 'dist';

const files = [
  'common.js',
  'contactanos.css',
  'contactanos.html',
  'contactanos.js',
  'db-config.example.php',
  'enviar-consulta.php',
  'index.css',
  'index.html',
  'index.js',
  'productos.css',
  'productos.html',
  'productos.js',
  'servicios.css',
  'servicios.html',
  'servicios.js',
  'upgrade.css'
];

const directories = [
  'img',
  'img2',
  'img3',
  'img4',
  'img5',
  'imgCleanPel',
  'imgdetalles',
  'logos'
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  if (existsSync(file)) {
    cpSync(file, join(outputDir, file));
  }
}

for (const directory of directories) {
  if (existsSync(directory)) {
    cpSync(directory, join(outputDir, directory), { recursive: true });
  }
}
