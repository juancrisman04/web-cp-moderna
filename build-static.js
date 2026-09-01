import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = 'dist';

const files = [
  'common.js',
  'contactanos.css',
  'contactanos.html',
  'contactanos.js',
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

// Vercel sirve el sitio como estatico y no ejecuta PHP: incluir el endpoint
// en el build solo publicaria su codigo fuente. Se copia unicamente para el
// paquete de Hostinger, con INCLUDE_PHP=1 npm run build.
const phpFiles = [
  'enviar-consulta.php'
];

const includePhp = process.env.INCLUDE_PHP === '1';

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

for (const file of [...files, ...(includePhp ? phpFiles : [])]) {
  if (existsSync(file)) {
    cpSync(file, join(outputDir, file));
  }
}

for (const directory of directories) {
  if (existsSync(directory)) {
    cpSync(directory, join(outputDir, directory), { recursive: true });
  }
}
