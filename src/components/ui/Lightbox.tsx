import React, { useEffect } from 'react';
import { GalleryItem } from '../../types';
import { createSpaceWhatsAppUrl } from '../../services/whatsapp';
import { X, ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

interface LightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
    >
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar vista ampliada"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-surface-container-lowest/80 text-primary hover:bg-secondary hover:text-white transition-colors flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
      >
        <X size={24} strokeWidth={2.5} />
      </button>

      {/* Navigation Arrows */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Fotografía anterior"
          className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-surface-container-lowest/80 text-primary hover:bg-secondary hover:text-white transition-colors flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <ChevronLeft size={24} strokeWidth={2.5} />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Siguiente fotografía"
          className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-surface-container-lowest/80 text-primary hover:bg-secondary hover:text-white transition-colors flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      )}

      {/* Main Content Modal Card */}
      <div
        className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-surface rounded-2xl overflow-hidden shadow-2xl border border-secondary/30 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="md:w-3/5 bg-black/90 flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-[85vh]">
          <ImageWithSkeleton
            src={item.imageUrl}
            alt={item.imageAlt}
            className="w-full h-full object-contain max-h-[50vh] md:max-h-[85vh]"
          />
        </div>

        {/* Caption & Metadata Side */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-surface-container-lowest overflow-y-auto">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant text-xs font-sans font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={12} strokeWidth={2.5} />
              <span>{item.categoryLabel}</span>
            </div>
            <span className="font-sans text-xs text-secondary tracking-widest uppercase block mb-1 font-semibold">
              {item.kicker}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-primary font-semibold leading-snug mb-3">
              {item.title}
            </h3>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          <div className="pt-6 border-t border-outline-variant/30 flex flex-col gap-3">
            <a
              href={createSpaceWhatsAppUrl(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-surface-bright font-sans text-xs font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-sm"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              <span>Consultar por este rincón</span>
            </a>
            <p className="text-[11px] text-center text-outline">
              Quinta Valhalla · 20 de Junio, Zona Oeste
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
