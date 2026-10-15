# EPHIS Latam – Sitio web

Sitio estático (HTML, CSS y JavaScript, sin build ni dependencias).

## Páginas
- `index.html` – Home: certificación, plan de estudios, directores, inversión, FAQ.
- `coaching-total.html` – Programa Coaching Total Bootcamp.
- `coaching-metacreativo.html` – Metodología de Coaching Metacreativo.

## Ver en local
```bash
python3 -m http.server 8000
```
Luego abrir http://localhost:8000

## Publicar en GitHub Pages
1. Subir este contenido a un repositorio (la raíz debe tener `index.html`).
2. En el repo: **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Elegir la rama `main` y la carpeta `/ (root)`.
