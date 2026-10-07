import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Lightbox } from '../ui/Lightbox';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { GALLERY_DATA } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { Fade, Zoom } from 'react-awesome-reveal';
import { ZoomIn, ArrowRight } from 'lucide-react';

export const GalleryPreview: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const previewItems = GALLERY_DATA.slice(0, 6);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedPhoto(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % previewItems.length;
    setCurrentIndex(nextIdx);
    setSelectedPhoto(previewItems[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + previewItems.length) % previewItems.length;
    setCurrentIndex(prevIdx);
    setSelectedPhoto(previewItems[prevIdx]);
  };

  return (
    <section className="py-24 bg-surface relative" id="galeria-preview">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade triggerOnce direction="up" duration={800}>
          <SectionHeading
            badge="Atmósferas & Celebraciones"
            badgeIcon="photo_library"
            title="Galería de Momentos"
            subtitle="Cada rincón de Quinta Valhalla ha sido concebido para envolver las emociones más genuinas. Descubrí destellos de celebraciones donde la naturaleza, los árboles añejos y la luz dorada dan vida a recuerdos imperecederos."
          />
        </Fade>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Zoom triggerOnce cascade damping={0.1} duration={800} className="contents">
            {previewItems.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => openModal(item, idx)}
                className="gallery-card group relative overflow-hidden rounded-2xl bg-surface-container border border-secondary/20 shadow-xs transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer aspect-[4/5] h-full"
              >
                <ImageWithSkeleton
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  skeletonClassName="rounded-2xl"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Category Pill Top */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans tracking-wider uppercase bg-surface-bright/90 text-primary backdrop-blur-sm shadow-xs border border-secondary/20 font-semibold transform transition-transform duration-300 group-hover:-translate-y-1">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Zoom action button */}
                <button
                  type="button"
                  aria-label={`Ampliar imagen: ${item.title}`}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface/90 text-primary flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white"
                >
                  <ZoomIn size={16} strokeWidth={2.5} />
                </button>

                {/* Hover Caption Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-surface-container-lowest">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-surface-container-lowest/80 line-clamp-2 transform translate-y-2 opacity-90 group-hover:translate-y-0 transition-transform duration-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </Zoom>
        </div>

        {/* Explore Full Gallery Button */}
        <Fade triggerOnce delay={300} direction="up" className="mt-14 text-center">
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-surface-bright font-sans text-sm font-semibold hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <span>Ver galería completa con filtros temáticos</span>
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Fade>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedPhoto}
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
