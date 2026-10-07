# Quinta Valhalla Eventos — Web Oficial

Aplicación web completa, interactiva y responsive para **Quinta Valhalla Eventos**, desarrollada con **React, TypeScript, Tailwind CSS, Vite y React Router**, basada en el sistema de diseño de alta gama **Botanical Splendor**.

---

## Características Principales

1. **Diseño Visual de Lujo Orgánico (Botanical Splendor)**:
   - Paleta tonal refinada: Verde Bosque (`#1B3B2B`), Oro Cálido (`#C5A880`), Oliva Salvia (`#5E7153`) y Lienzo Marfil (`#FAF8F5`).
   - Tipografía editorial: **Playfair Display** (títulos y encabezados) y **Plus Jakarta Sans** (cuerpo e interfaces).
   - Uso de la identidad de marca oficial con el logotipo real de **Quinta Valhalla**.

2. **Páginas y Rutas Completas**:
   - `/`: **Inicio & Presentación General** (Hero cinematográfico, "Conocé nuestra quinta", destacados de espacios y eventos, galería previa, pasos de reserva, testimonios y FAQs).
   - `/espacios`: **Espacios & Instalaciones** (Ficha técnica y fotográfica de cada rincón: Salón Climatizado, Parque, Quincho, Pileta, etc.).
   - `/eventos`: **Tipos de Eventos & Celebraciones** (Bodas, 15 años, cumpleaños, reuniones familiares, corporativos, egresados).
   - `/galeria`: **Galería Fotográfica** (Filtros dinámicos por categorías, cuadrícula interactiva y visualizador Lightbox modal).
   - `/consultar`: **Consulta de Disponibilidad** (Formulario optimizado para generar consultas directas por WhatsApp con datos precargados).
   - `/opiniones`: **Opiniones & Experiencias** (Métricas reales de Google Reviews, y enlaces directos).
   - `/contacto`: **Ubicación & Contacto** (Mapa interactivo, cómo llegar, canales de WhatsApp directos, Instagram y formulario).

3. **Arquitectura Preparada para Backend**:
   - Capa de datos desacoplada en `src/data/`.
   - Modelos e interfaces fuertemente tipados en `src/types/index.ts`.
   - Servicios modulares en `src/services/` (`whatsapp.ts` para generación de links dinámicos).

---

## Requisitos Previos

- **Node.js**: Versión 18 o superior (recomendado v20+ o v24+).
- **npm**: Versión 9 o superior.

---

## Instalación y Puesta en Marcha

### 1. Instalar dependencias
Abrí una terminal en la carpeta del proyecto y ejecutá:

```bash
npm install
```

*(En Windows PowerShell, si la política de scripts está restringida, podés usar `npm.cmd install`)*

### 2. Ejecutar en modo de desarrollo
Iniciá el servidor de desarrollo de Vite:

```bash
npm run dev
```

La aplicación quedará disponible en:
```text
http://localhost:3000
```

### 3. Generar compilación para producción
Para crear el bundle optimizado y listo para hosting:

```bash
npm run build
```

Los archivos finales se generarán en la carpeta `dist/`.

### 4. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## Estructura del Proyecto

```text
├── public/
│   ├── favicon.png                  # Favicon institucional
│   └── logo-quinta-valhalla.png     # Logo oficial de Quinta Valhalla
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Barra de navegación con menú mobile drawer
│   │   │   ├── Footer.tsx           # Pie de página institucional
│   │   │   ├── WhatsAppFloatingButton.tsx # Botón flotante con pulso y tooltip
│   │   │   └── ScrollToTop.tsx      # Restauración de scroll en cambios de ruta
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SpacesOverview.tsx
│   │   │   ├── EventsOverview.tsx
│   │   │   ├── GalleryPreview.tsx
│   │   │   ├── BookingSteps.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx           # Botones primarios, secundarios y contornos
│   │       ├── Badge.tsx            # Píldoras y etiquetas botánicas
│   │       ├── SectionHeading.tsx   # Título editorial con divisor floral
│   │       ├── Lightbox.tsx         # Modal visor de fotos con zoom y teclado
│   │       └── FaqAccordion.tsx     # Preguntas frecuentes colapsables
│   ├── data/
│   │   ├── spaces.ts                # Datos técnicos y fotos de los 6 espacios
│   │   ├── events.ts                # Formatos de celebración
│   │   ├── gallery.ts               # Fotografías clasificadas con metadatos
│   │   ├── reviews.ts               # Testimonios y métricas de satisfacción
│   │   └── faqs.ts                  # Preguntas y respuestas frecuentes
│   ├── pages/
│   │   ├── HomePage.tsx             # Inicio
│   │   ├── SpacesPage.tsx           # Espacios
│   │   ├── EventsPage.tsx           # Eventos
│   │   ├── GalleryPage.tsx          # Galería
│   │   ├── BookingPage.tsx          # Cotizador interactivo en 4 pasos
│   │   ├── ReviewsPage.tsx          # Opiniones y formulario de reseña
│   │   ├── ContactPage.tsx          # Contacto, cómo llegar y mapa
│   │   └── NotFoundPage.tsx         # Error 404 personalizado
│   ├── services/
│   │   ├── whatsapp.ts              # Generador de mensajes inteligentes para WhatsApp
│   │   └── bookingService.ts        # Capa de servicio preparada para backend
│   ├── types/
│   │   └── index.ts                 # Definiciones e interfaces TypeScript
│   ├── App.tsx                      # Configuración de rutas y layout
│   ├── main.tsx                     # Punto de entrada de React 18
│   └── index.css                    # Directivas de Tailwind y estilos botánicos
├── .env.example                     # Variables de entorno modelo
├── index.html                       # HTML con tipografías de Google y metaetiquetas SEO
├── package.json
├── tailwind.config.js               # Tokens y colores del sistema Botanical Splendor
├── tsconfig.json
└── vite.config.ts
```

---

## Conexión con un Backend

La aplicación ya implementa la separación entre interfaz y servicios de datos:
- `src/services/bookingService.ts` incluye las firmas de método:
  - `submitBookingInquiry(data: BookingFormState)`
  - `submitContactMessage(data: ContactFormData)`
- Para conectar una API real, simplemente reemplazá las llamadas simuladas por `fetch` o `axios` apuntando a `import.meta.env.VITE_API_BASE_URL`.
- Las variables de entorno pueden configurarse copiando `.env.example` a `.env`.

---

© Quinta Valhalla Eventos. Todos los derechos reservados.