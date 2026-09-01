# Deploy

El sitio vive en dos lugares:

- **Hostinger — `cleanpel.com.ar`**: produccion. Ejecuta PHP, por lo que aloja
  el endpoint del formulario (`enviar-consulta.php`) y la base MySQL.
- **Vercel — `web-cp-moderna.vercel.app`**: preview del rediseno. Es estatico:
  no ejecuta PHP. El formulario de contacto de esas paginas envia la consulta
  al endpoint de `cleanpel.com.ar` via CORS.

## Vercel

Automatico: cada push a `main` dispara un deploy de produccion.

```bash
npm run build
```

Genera `dist/` sin archivos PHP a proposito, para no publicar el codigo fuente
del endpoint en un host que no puede ejecutarlo.

## Hostinger

```bash
INCLUDE_PHP=1 npm run build
```

Genera el mismo `dist/` pero incluyendo `enviar-consulta.php`. Subir el
contenido de `dist/` por FTP o el administrador de archivos.

Ademas, una sola vez en el servidor:

1. Copiar `db-config.example.php` como `db-config.php` y completar los datos
   reales de la base. Ese archivo nunca va al repo (esta en `.gitignore`).
2. Crear la tabla de consultas:

```sql
CREATE TABLE IF NOT EXISTS consultas_web (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    apellido VARCHAR(120) DEFAULT NULL,
    empresa VARCHAR(160) DEFAULT NULL,
    email VARCHAR(180) NOT NULL,
    telefono VARCHAR(60) DEFAULT NULL,
    necesidad VARCHAR(180) DEFAULT NULL,
    mensaje TEXT NOT NULL,
    origen VARCHAR(80) DEFAULT 'web',
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_creado_en (creado_en)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

Hasta que `enviar-consulta.php` este publicado en `cleanpel.com.ar`, el
formulario responde con un error: hoy esa URL devuelve 404.

## Origenes permitidos

`enviar-consulta.php` acepta pedidos cross-origin solo desde `cleanpel.com.ar`,
`www.cleanpel.com.ar`, `web-cp-moderna.vercel.app` y los previews
`web-cp-moderna-*.vercel.app`. Si cambia el dominio de Vercel hay que
actualizar `$allowedOrigins` en ese archivo y `PHP_HOSTS` en `contactanos.js`.
