export const projects = [
  {
    kind: 'Proyecto individual · Desarrollo y Arquitecturas Web · UAI 2026',
    title: 'Futbolle',
    description:
      'Juego de adivinanza de futbolistas que consume una API REST para autocompletado y selección aleatoria de jugadores.',
    highlights: [
      'Comparación de atributos con feedback visual',
      'Puntuación configurable por dificultad e historial de partidas en LocalStorage',
      'Modo claro y oscuro, e interfaz responsive',
      'Efectos de sonido con Web Audio API',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Web Audio API', 'LocalStorage'],
    demo: 'https://laruupollastrini.github.io/Futbolle-Proyecto/',
    repo: 'https://github.com/LaruuPollastrini/Futbolle-Proyecto',
    visual: 'grid',
  },
  {
    kind: 'Aplicación web · Frontend',
    title: 'BarApp',
    description:
      'Interfaz del módulo de seguridad de una app de gestión para bares.',
    highlights: [
      'Administración de módulos, formularios, acciones, grupos y usuarios (CRUD)',
      'Control de acceso por roles',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/LaruuPollastrini/BarApp',
    visual: 'interface',
  },
  {
    kind: 'API REST · Backend',
    title: 'BarApp Server',
    description:
      'API REST del módulo de seguridad de BarApp, con arquitectura modular.',
    highlights: [
      'Backend que consume la interfaz de BarApp',
      'Persistencia en una base de datos MySQL',
    ],
    technologies: ['NestJS', 'TypeScript', 'Node.js', 'MySQL'],
    repo: 'https://github.com/LaruuPollastrini/BarAppServer',
    visual: 'architecture',
  },
];