export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'The Work' },
  { href: '/about', label: 'About Us' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/contact', label: 'Contact' },
] as const

export const TEAM = [
  {
    name: 'Ilan Tolchinsky',
    role: 'Director Creativo',
    photo: '/team/ilan-tolchinsky.jpg',
    accent: '#e34b03',
  },
  {
    name: 'Agustín Quiroga',
    role: 'Líder de Animación',
    photo: '/team/agustin-quiroga.jpg',
    accent: '#533ca7',
  },
  {
    name: 'Estefanía Hinostroza',
    role: 'Fotógrafa',
    photo: '/team/estefania-hinostroza.jpg',
    accent: '#3443a7',
  },
  {
    name: 'Eliseo Borda',
    role: 'Motion Designer',
    photo: '/team/eliseo-borda.jpg',
    accent: '#6f7bbf',
  },
  {
    name: 'Mia Carlazara',
    role: 'Content Manager',
    photo: '/team/mia-carlazara.jpg',
    accent: '#c7d9d6',
  },
  {
    name: 'Gerónimo Garimaldi',
    role: 'Modelador 3D',
    photo: '/team/geronimo-garimaldi.jpg',
    accent: '#e34b03',
  },
] as const

export const SERVICES = [
  {
    number: '01',
    title: 'Animación',
    description:
      'Piezas animadas a medida, de motion gráfico a narrativa 2D/3D. Trabajamos en paralelo guion, arte y animación para entregar a tiempo sin bajar el nivel de detalle.',
    accent: '#e34b03',
  },
  {
    number: '02',
    title: 'Diseño 3D',
    description:
      'Modelado, texturizado y render de objetos y entornos. Un mockup foto-realista te muestra el producto final antes de fabricarlo, y te ahorra costos de prueba y error.',
    accent: '#533ca7',
  },
  {
    number: '03',
    title: 'Producción Audiovisual',
    description:
      'Dirección, fotografía y edición en un solo equipo, de guion a color final. Sin coordinar cinco proveedores distintos ni perder tiempo en idas y vueltas.',
    accent: '#3443a7',
  },
  {
    number: '04',
    title: 'Branding & Identidad',
    description:
      'Sistemas de marca completos —logotipo, paleta, tipografía— entregados con manual de uso, para que cualquier equipo los aplique sin depender de nosotros.',
    accent: '#6f7bbf',
  },
  {
    number: '05',
    title: 'Experiencias Digitales',
    description:
      'Webs y productos interactivos a medida, sin plantillas genéricas. Diseñados para retener la atención y convertir visitas en clientes, no solo para verse bien.',
    accent: '#c7d9d6',
  },
] as const

export const FEATURED_WORK = {
  slug: 'experiencia-intra',
  title: 'INTRA — La Experiencia',
  category: 'Experiencia Digital Interactiva',
  description:
    'Un viaje de introspección en cuatro capítulos. El usuario atraviesa niñez, adolescencia y adultez junto a una voz en off que, al final, resulta ser su propio futuro. Diseñado, escrito y desarrollado íntegramente por el equipo de INTRA.',
  image: '/work/moodboard.jpg',
  href: '/experience',
  tags: ['UX Narrativo', 'Desarrollo Web', 'Dirección de Arte'],
} as const

export const WORK_ITEMS = [
  {
    slug: 'branding',
    kind: 'gallery' as const,
    title: 'Branding',
    category: 'Branding & Identidad',
    description:
      'Sistema de marca para AURA × ALLEN, un estudio de iluminación: naming, logotipo, papelería, packaging y aplicaciones en local y flota, con una identidad cálida y minimalista.',
    images: [
      { src: '/work/branding/aura-overview.jpg', label: 'AURA × ALLEN — Sistema de marca', width: 1537, height: 862 },
      { src: '/work/branding/aura-cards.jpg', label: 'Papelería — Tarjetas', width: 2000, height: 1125 },
      { src: '/work/branding/aura-tote.jpg', label: 'Merchandising — Tote bag', width: 525, height: 763 },
      { src: '/work/branding/aura-box-shelf.jpg', label: 'Packaging', width: 2000, height: 1124 },
      { src: '/work/branding/aura-truck.jpg', label: 'Flota de distribución', width: 1329, height: 642 },
      { src: '/work/branding/aura-signage.jpg', label: 'Señalética exterior', width: 802, height: 393 },
    ],
    tags: ['Naming', 'Identidad Visual', 'Packaging'],
  },
  {
    slug: 'campana-publicitaria',
    kind: 'video' as const,
    title: 'Campaña Publicitaria',
    category: 'Campaña Publicitaria',
    description:
      'Video caso para Hocicos Contentos, una organización sin fines de lucro dedicada al rescate, recuperación y adopción de perros.',
    video: '/work/hocicos-contentos.mp4',
    poster: '/work/hocicos-contentos.jpg',
    width: 1920,
    height: 1080,
    tags: ['Video Caso', 'Impacto Social'],
  },
  {
    slug: 'modelado-3d',
    kind: 'video-grid' as const,
    title: 'Modelado 3D',
    category: 'Modelado 3D',
    description:
      'Modelado, texturizado y render de objetos y personajes en turntables a 360°: de piezas de producto sobre pedestal a esculturas digitales en ZBrush.',
    items: [
      { video: '/work/cafetera.mp4', poster: '/work/cafetera.jpg', label: 'Cafetera', width: 1280, height: 720 },
      { video: '/work/tren.mp4', poster: '/work/tren.jpg', label: 'Locomotora', width: 1280, height: 720 },
      { video: '/work/3d/taladro.mp4', poster: '/work/3d/taladro.jpg', label: 'Herramienta eléctrica', width: 1920, height: 1080 },
      { video: '/work/3d/zbrush-figura.mp4', poster: '/work/3d/zbrush-figura.jpg', label: 'Escultura digital — ZBrush', width: 1920, height: 1080 },
      { video: '/work/3d/zbrush-xenomorfo.mp4', poster: '/work/3d/zbrush-xenomorfo.jpg', label: 'Criatura — ZBrush', width: 1920, height: 1080 },
    ],
    tags: ['Modelado 3D', 'Render 360', 'ZBrush'],
  },
  {
    slug: 'motion',
    kind: 'video-grid' as const,
    title: 'Motion',
    category: 'Motion',
    description:
      'Motion graphics en 3D y 2D: estudios de personaje y cámara con efectos gráficos, y piezas de tipografía animada para campañas.',
    items: [
      { video: '/work/jinx.mp4', poster: '/work/jinx.jpg', label: 'Estudio de personaje — 3D', width: 1280, height: 720 },
      { video: '/work/spiderverse.mp4', poster: '/work/spiderverse.jpg', label: 'Persecución urbana — 3D', width: 1280, height: 720 },
      { video: '/work/motion/robotito.mp4', poster: '/work/motion/robotito.jpg', label: 'Estudio de personaje — 3D', width: 1920, height: 1080 },
      { video: '/work/lollapalooza.mp4', poster: '/work/lollapalooza.jpg', label: 'Lollapalooza Argentina — 2D', width: 406, height: 720 },
      { video: '/work/motion/typo-reel.mp4', poster: '/work/motion/typo-reel.jpg', label: 'Reel tipográfico — 2D', width: 1080, height: 1920 },
    ],
    tags: ['Motion Graphics', '3D', '2D'],
  },
  {
    slug: 'diseno-grafico',
    kind: 'gallery' as const,
    title: 'Diseño Gráfico',
    category: 'Posters & Mockups',
    description:
      'Ilustración y diseño de afiches con sus respectivos mockups de presentación: de afiches de cine reinterpretados a flyers de evento e ilustración editorial.',
    images: [
      { src: '/work/graphic/blade-runner-illustration.jpg', label: 'Blade Runner 2049 — Ilustración', width: 1413, height: 2000 },
      { src: '/work/graphic/blade-runner-mockup-full.jpg', label: 'Blade Runner 2049 — Mockup', width: 2000, height: 1500 },
      { src: '/work/graphic/hobbit-illustration.jpg', label: 'The Hobbit — Ilustración', width: 1413, height: 2000 },
      { src: '/work/graphic/hobbit-mockup-full.jpg', label: 'The Hobbit — Mockup', width: 1368, height: 2000 },
      { src: '/work/graphic/semana-santa-illustration.jpg', label: 'Semana Santa — Ilustración', width: 1080, height: 1920 },
      { src: '/work/graphic/semana-santa-mockup-full.jpg', label: 'Semana Santa — Mockup', width: 2000, height: 1333 },
      { src: '/work/graphic/spidergwen-illustration.jpg', label: 'Spider-Man & Spider-Gwen — Ilustración', width: 1413, height: 2000 },
      { src: '/work/graphic/spidergwen-mockup-full.jpg', label: 'Spider-Man & Spider-Gwen — Mockup', width: 2000, height: 1380 },
    ],
    tags: ['Diseño de Afiches', 'Mockups'],
  },
  {
    slug: 'diseno-web',
    kind: 'gallery' as const,
    title: 'Diseño Web',
    category: 'UI / Diseño Digital',
    description:
      'Diseño y desarrollo de sitios web a medida, de landing pages a plataformas multi-sección, con dirección de arte propia en cada proyecto.',
    images: [
      { src: '/work/web/ai-design-hero.jpg', label: 'AI.DESIGN — Landing Page', url: 'https://intra-ai-design.netlify.app', width: 3200, height: 2000 },
      { src: '/work/web/ai-design-capabilities.jpg', label: 'AI.DESIGN — Capacidades de la IA', url: 'https://intra-ai-design.netlify.app', width: 3200, height: 2000 },
      { src: '/work/web/premium-edu-hero.jpg', label: 'PREMIUM.EDU — Home', url: 'https://intra-premium-edu.netlify.app', width: 3200, height: 2000 },
      { src: '/work/web/premium-edu-catalog.jpg', label: 'PREMIUM.EDU — Catálogo', url: 'https://intra-premium-edu.netlify.app', width: 3200, height: 2000 },
      { src: '/work/web/glowsun-hero.jpg', label: 'GLOW SUN — Home', url: 'https://glowsun2.mitiendanube.com', width: 3200, height: 2000 },
      { src: '/work/web/glowsun-products.jpg', label: 'GLOW SUN — Productos', url: 'https://glowsun2.mitiendanube.com', width: 3200, height: 2000 },
    ],
    tags: ['UI Design', 'Desarrollo Web'],
  },
] as const

export const MANIFESTO_LINES = [
  'No creemos en ideas rápidas.',
  'Creemos en procesos profundos,',
  'en mirar una historia hasta descubrir qué la hace única.',
  'Ante la incertidumbre de un mundo en constante movimiento,',
  'construimos con el poder de una mente que sobrepiensa.',
  'Somos INTRA.',
  'La profundidad en la experiencia.',
] as const

export const CONTACT = {
  email: 'INTRASTUDIO@GMAIL.COM',
  instagram: '@intra.agency',
} as const
