import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatingButton } from './components/layout/WhatsAppFloatingButton';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Helper for lazy loading named exports
const lazyNamed = (importFn: () => Promise<any>, exportName: string) =>
  lazy(() => importFn().then((mod) => ({ default: mod[exportName] })));

// Lazy-loaded pages for code splitting
const HomePage = lazyNamed(() => import('./pages/HomePage'), 'HomePage');
const SpacesPage = lazyNamed(() => import('./pages/SpacesPage'), 'SpacesPage');
const EventsPage = lazyNamed(() => import('./pages/EventsPage'), 'EventsPage');
const GalleryPage = lazyNamed(() => import('./pages/GalleryPage'), 'GalleryPage');
const ReviewsPage = lazyNamed(() => import('./pages/ReviewsPage'), 'ReviewsPage');
const BookingPage = lazyNamed(() => import('./pages/BookingPage'), 'BookingPage');
const ContactPage = lazyNamed(() => import('./pages/ContactPage'), 'ContactPage');
const NotFoundPage = lazyNamed(() => import('./pages/NotFoundPage'), 'NotFoundPage');

// Loading fallback for all lazy routes
const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center">
    <div className="w-10 h-10 border-3 border-brand-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/espacios" element={<SpacesPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/consultar" element={<BookingPage />} />
          <Route path="/opiniones" element={<ReviewsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
