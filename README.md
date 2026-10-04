# Portfolio de Lara Pollastrini

Portfolio personal de desarrolladora web full stack. Presenta mi perfil, mis habilidades, mis proyectos y mis datos de contacto.

**Sitio publicado:** lara-pollastrini-portfolio.vercel.app

## Stack

- [Astro](https://astro.build/): sitio estático con HTML semántico
- [Tailwind CSS](https://tailwindcss.com/): estilos y diseño responsive
- JavaScript

## Secciones

- **Hero:** nombre, rol, frase de presentación, botones de acción y foto
- **Sobre mí:** bio y habilidades agrupadas por categoría (Frontend, Backend y Herramientas)
- **Proyectos:** Futbolle, BarApp (frontend) y BarApp Server (backend)
- **Contacto:** email, GitHub y LinkedIn
- **Navegación:** navbar fija con menú desplegable en mobile

## Cómo correrlo localmente

Requisitos: [Node.js](https://nodejs.org/) (versión LTS reciente) y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/LaruuPollastrini/LaraPollastrini-portfolio.git
cd LaraPollastrini-portfolio

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Después abrí [http://localhost:4321](http://localhost:4321) en el navegador.

### Otros comandos

| Comando           | Qué hace                                      |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Genera el sitio final en la carpeta `dist/`   |
| `npm run preview` | Previsualiza localmente el build de producción |

## Estructura del proyecto

```text
src/
  components/   Header, Hero, About, Projects, Contact y Footer
  data/         skills.js y projects.js (contenido del sitio)
  layouts/      Layout.astro (estructura HTML base)
  pages/        index.astro (página principal)
  styles/       global.css (Tailwind y paleta de colores)
public/         avatar.webp
```

## Decisiones de diseño

- Paleta de tonos tierra y beige, con contraste legible.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`) y un solo `h1`.
- Accesibilidad: `alt` en las imágenes, foco visible al navegar con teclado y enlace para saltar al contenido.
- Diseño responsive, verificado en 360 px, 768 px y 1280 px sin scroll horizontal.

## Contacto

- Email: Pollastrini.laru@gmail.com
- GitHub: [LaruuPollastrini](https://github.com/LaruuPollastrini)
- LinkedIn: [Lara Pollastrini](https://www.linkedin.com/in/lara-pollastrini-0a0956207/)