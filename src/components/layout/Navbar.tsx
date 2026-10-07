import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  TreePine,
  PartyPopper,
  Images,
  Star,
  MessageCircle,
} from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/espacios', label: 'Espacios', icon: TreePine },
  { to: '/eventos', label: 'Eventos', icon: PartyPopper },
  { to: '/galeria', label: 'Galería', icon: Images },
  { to: '/opiniones', label: 'Opiniones', icon: Star },
  { to: '/contacto', label: 'Contacto', icon: MessageCircle },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out ${
          scrolled || mobileMenuOpen
            ? 'bg-surface/95 backdrop-blur-md shadow-xs border-b border-outline-variant/30 py-2.5'
            : 'bg-surface/85 backdrop-blur-sm border-b border-outline-variant/20 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/logo-quinta-valhalla.png"
              alt="Quinta Valhalla Logo"
              className="h-14 md:h-20 w-auto object-contain brightness-0 transition-opacity duration-200 hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 font-sans text-[15px] font-medium transition-colors duration-300 rounded-full ${
                    isActive ? 'text-primary' : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute inset-0 bg-secondary/10 rounded-full -z-10 border border-secondary/20"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger / Close Button with SVG Path Morphing Animation (no color change on hover) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden relative w-10 h-10 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary flex items-center justify-center shrink-0 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 overflow-visible"
            >
              {/* Top line morphs into diagonal of X */}
              <motion.path
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { d: "M 4 6 L 20 6" },
                  open: { d: "M 6 6 L 18 18" }
                }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              />
              {/* Middle line smoothly fades and shrinks */}
              <motion.path
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { d: "M 4 12 L 20 12", opacity: 1 },
                  open: { d: "M 12 12 L 12 12", opacity: 0 }
                }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              />
              {/* Bottom line morphs into other diagonal of X */}
              <motion.path
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  closed: { d: "M 4 18 L 20 18" },
                  open: { d: "M 6 18 L 18 6" }
                }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu — Light, clean & non-heavy */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-t border-outline-variant/15 bg-surface/98 backdrop-blur-xl shadow-lg overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-80px)] overflow-y-auto">
                <nav className="flex flex-col gap-0.5" aria-label="Navegación móvil">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.to;
                    const IconComponent = link.icon;
                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.025, duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`relative px-3.5 py-2.5 rounded-xl font-sans text-sm font-medium transition-colors duration-200 flex items-center gap-3 group ${
                            isActive
                              ? 'text-primary font-semibold'
                              : 'text-on-surface-variant hover:text-primary hover:bg-black/[0.02]'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="mobile-nav-active-pill"
                              className="absolute inset-0 bg-primary/[0.05] rounded-xl -z-10"
                              initial={false}
                              transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                            />
                          )}
                          <IconComponent
                            size={18}
                            strokeWidth={isActive ? 2.2 : 1.8}
                            className={`transition-colors duration-200 ${
                              isActive ? 'text-primary' : 'text-on-surface-variant/70 group-hover:text-primary'
                            }`}
                          />
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary/40 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
