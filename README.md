# N360 Page

Landing estatica lista para publicar.

## Archivos principales

- `index.html`: estructura y contenido
- `styles.css`: diseno responsive
- `script.js`: menu, animaciones y nav activo
- `site.webmanifest`: metadata basica para instalacion
- `robots.txt`: indexacion

## Previsualizar localmente

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

## Publicar

Se puede subir tal cual a cualquier hosting estatico:

- Netlify: arrastrar la carpeta `n360-page`
- Vercel: importar la carpeta como proyecto estatico
- GitHub Pages: subir el contenido del proyecto al repo y publicar desde la rama principal
- cPanel / hosting comun: copiar todos los archivos al directorio `public_html`

## Antes de publicar en dominio final

- Reemplazar o completar metadatos `og:` si queres compartir mejor en WhatsApp e Instagram
- El dominio configurado es `https://www.n360ces.com.ar`
- Verificar que el numero de WhatsApp, Instagram y direccion sigan correctos
