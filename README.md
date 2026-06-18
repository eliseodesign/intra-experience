# INTRA — Experiencia Digital

**"La profundidad en la experiencia."**

Formulario de introspección progresivo diseñado para INTRA Multimedia Agency. Cuatro capítulos, diecinueve preguntas, una experiencia completamente alineada con la identidad visual y verbal de la agencia.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 14.2 | Framework (App Router) |
| TypeScript | 5.5 | Tipado estático |
| Tailwind CSS | 3.4 | Estilos utilitarios |
| Framer Motion | 11.3 | Animaciones y transiciones |
| Lucide React | 0.400 | Iconografía |
| React Hook Form | 7.52 | Gestión del formulario |
| Zod | 3.23 | Validación de datos |

---

## Estructura del Proyecto

```
intra-experience/
├── app/
│   ├── page.tsx                  ← Landing page
│   ├── experience/
│   │   └── page.tsx              ← Página del formulario
│   ├── layout.tsx                ← Root layout + metadata
│   └── globals.css               ← Estilos globales + CSS vars
├── components/
│   ├── ui/
│   │   ├── Button.tsx            ← Botón con animaciones
│   │   ├── TextareaInput.tsx     ← Textarea con float label + char count
│   │   ├── RadioCard.tsx         ← Tarjeta de selección animada
│   │   ├── ColorSelector.tsx     ← Selector de color visual
│   │   └── WordInput.tsx         ← Input de palabra única
│   ├── layout/
│   │   ├── ProgressBar.tsx       ← Barra de progreso + capítulos
│   │   └── Header.tsx            ← Cabecera con logo y capítulo
│   └── brand/
│       ├── IntraLogo.tsx         ← Logotipo tipográfico de INTRA
│       └── GlowEffect.tsx        ← Efecto de luz ambiental animado
├── features/
│   └── form/
│       ├── FormOrchestrator.tsx  ← Lógica central del formulario
│       ├── ChapterView.tsx       ← Pantalla de transición entre capítulos
│       ├── QuestionView.tsx      ← Renderizado de preguntas por tipo
│       └── SuccessView.tsx       ← Pantalla de finalización
├── lib/
│   ├── questions.ts              ← Data tipada de capítulos y preguntas
│   ├── theme.ts                  ← Tokens de diseño INTRA
│   └── validation.ts             ← Schemas de validación Zod
├── hooks/
│   ├── useFormProgress.ts        ← Estado del formulario + localStorage
│   └── useChapterTheme.ts        ← CSS vars dinámicas por capítulo
└── public/
    └── fonts/
```

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/intra-experience.git
cd intra-experience

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo con hot reload
npm run build    # Build de producción
npm run start    # Servidor de producción (requiere build previo)
npm run lint     # Análisis estático del código
```

---

## Deploy en Vercel

### Opción 1 — CLI de Vercel

```bash
npm install -g vercel
vercel login
vercel
```

### Opción 2 — GitHub + Vercel Dashboard

1. Subir el proyecto a GitHub
2. Ir a [vercel.com](https://vercel.com) → New Project
3. Importar el repositorio
4. Vercel detecta automáticamente Next.js
5. Click en **Deploy**

No se requieren variables de entorno adicionales.

---

## Identidad Visual

| Token | Valor |
|---|---|
| Fondo principal | `#07080d` |
| Fondo cards | `#0d0f1a` |
| Naranja (acento) | `#e34b03` |
| Violeta profundo | `#533ca7` |
| Azul royal | `#3443a7` |
| Periwinkle | `#6f7bbf` |
| Salvia claro | `#c7d9d6` |
| Tipografía | Space Grotesk (300–700) |

---

## Capítulos del Formulario

| # | Capítulo | Preguntas | Acento |
|---|---|---|---|
| 01 | Infancia | 5 | Naranja `#e34b03` |
| 02 | Adolescencia | 5 | Violeta `#533ca7` |
| 03 | Adultez Joven | 4 | Azul `#3443a7` |
| 04 | Final | 5 | Periwinkle `#6f7bbf` |

---

## Features

- **Experiencia progresiva** — una pregunta a la vez, sin scroll interminable
- **Transiciones por capítulo** — pantalla de introducción con identidad propia
- **Animaciones Framer Motion** — entradas, salidas y microinteracciones
- **Color Picker interactivo** — para la pregunta del color de soledad (cap. 02)
- **Autosave en localStorage** — el usuario puede cerrar y retomar
- **Responsive Mobile First** — optimizado para todos los dispositivos
- **Accesibilidad** — ARIA labels, navegación por teclado, focus visible
- **Dark theme absoluto** — alineado con la filosofía visual de INTRA
- **CSS variables dinámicas** — el acento cromático cambia con cada capítulo

---

## Contacto

INTRASTUDIO@GMAIL.COM

---

*Diseñado y desarrollado al nivel de identidad de INTRA Multimedia Agency.*
*"No creemos en ideas rápidas. Creemos en procesos profundos."*
