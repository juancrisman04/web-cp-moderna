import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
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

// vercel.json cachea css/js un dia mientras el html se revalida siempre, asi que
// tras un deploy que toque ambos el visitante recurrente combinaba html nuevo con
// js viejo. Cada asset local lleva ahora ?v=<hash de contenido>: el html nuevo
// apunta a una URL nueva y lo que no cambio conserva su cache.
const hashes = new Map();

function versionDe(archivo) {
  if (!hashes.has(archivo)) {
    const ruta = join(outputDir, archivo);
    const hash = existsSync(ruta)
      ? createHash('sha1').update(readFileSync(ruta)).digest('hex').slice(0, 8)
      : '';
    hashes.set(archivo, hash);
  }
  return hashes.get(archivo);
}

for (const file of files) {
  if (!file.endsWith('.html')) continue;
  const ruta = join(outputDir, file);
  if (!existsSync(ruta)) continue;

  const html = readFileSync(ruta, 'utf8').replace(
    /(href|src)="([A-Za-z0-9._-]+.(?:css|js))"/g,
    (completo, atributo, activo) => {
      const version = versionDe(activo);
      return version ? `${atributo}="${activo}?v=${version}"` : completo;
    }
  );

  writeFileSync(ruta, html);
}
