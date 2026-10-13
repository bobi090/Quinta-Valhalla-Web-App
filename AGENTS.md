# AGENTS.md — Quinta Valhalla Web App

## Commands
- `npm install` — install deps
- `npm run dev` — dev server at `http://localhost:3000` (Vite, auto-opens)
- `npm run build` — production build (`tsc && vite build` → `dist/`)
- `npm run preview` — preview production build

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx` (React Router + Lenis smooth scroll)
- **Routes** (in `App.tsx`): `/`, `/espacios`, `/eventos`, `/galeria`, `/consultar`, `/opiniones`, `/contacto`, `*` (404)
- **Pages**: `src/pages/*.tsx` — one per route
- **Components**:
  - `src/components/layout/` — Navbar, Footer, WhatsAppFloatingButton, ScrollToTop
  - `src/components/sections/` — reusable page sections (Hero, SpacesOverview, etc.)
  - `src/components/ui/` — design system primitives (Button, Badge, Lightbox, etc.)
- **Data**: `src/data/*.ts` — static content (spaces, events, gallery, reviews, faqs)
- **Types**: `src/types/index.ts` — all interfaces (Space, EventType, GalleryItem, Review, FaqItem, BookingFormState, ContactFormData)
- **Services**: `src/services/` — `whatsapp.ts` (URL generators), `bookingService.ts` (localStorage mock API)
- **Alias**: `@` → `src/` (vite.config.ts + tsconfig.json)

## Key Config
- **Vite**: port 3000, React plugin, `@` alias
- **Tailwind**: `darkMode: "class"`, custom Botanical Splendor tokens (colors, fonts, shadows, radius)
  - Brand colors: `brand-forest` `#1B3B2B`, `brand-gold` `#C5A880`, `brand-sage` `#5E7153`, `brand-cream` `#FAF8F5`
  - Fonts: Playfair Display (serif/headings), Plus Jakarta Sans (sans/body)
- **TypeScript**: strict, `noUnusedLocals`, `noUnusedParameters`, `isolatedModules`, `noEmit`
- **shadcn/ui**: `components.json` configured, utils at `@/lib/utils.ts` (`cn` helper)

## Gotchas
- **Lenis** initialized in `App.tsx` useEffect — destroys on unmount
- **WhatsApp phone numbers** hardcoded in `src/services/whatsapp.ts` (AR format: `54911...`)
- **Mock backend** uses `localStorage` (`quinta_valhalla_bookings`, `quinta_valhalla_contacts`) — replace with real API in `bookingService.ts`
- **ReactBits registry** in package.json requires `REACTBITS_LICENSE_KEY` env var
- **No lint/test scripts** configured — only `dev`, `build`, `preview`
- **No `.env` file present** — copy `.env.example` if needed (references `VITE_API_BASE_URL`)
- **Public assets**: `public/logo-quinta-valhalla.png`, `public/favicon.png` (also copied to `dist/`)