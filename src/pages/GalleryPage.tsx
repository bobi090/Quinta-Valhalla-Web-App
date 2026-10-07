import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Lightbox } from '../components/ui/Lightbox';
import { GalleryItem } from '../types';
import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bodas', label: 'Bodas al Aire Libre' },
    { id: 'fiestas15', label: 'Fiestas de 15' },
    { id: 'nocturnos', label: 'Eventos Nocturnos & Fogones' },
    { id: 'detalles', label: 'Detalles & Deco' },
    { id: 'interiores', label: 'Interiores & Salón' },
    { id: 'parque', label: 'Parque & Atardeceres' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedPhoto(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setSelectedPhoto(filteredItems[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setSelectedPhoto(filteredItems[prevIdx]);
  };

  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Hero de Galería */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background border-b border-outline-variant/30 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            badge="Galería"
            badgeIcon="spa"
            title="Conocé los Espacios"
            subtitle="Recorré los rincones y la atmósfera de Quinta Valhalla a través de imágenes de eventos, espacios y ambientaciones."
          />
        </div>
      </section>

      {/* Barra de Filtros Interactiva Sticky */}
      <nav aria-label="Filtros de galería" className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start lg:justify-center gap-2 md:gap-3 min-w-max pb-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-surface-bright shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Grid de Fotografías */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => openLightbox(item, idx)}
              className="gallery-card group relative overflow-hidden rounded-2xl bg-surface-container border border-secondary/20 shadow-xs transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer aspect-[4/5]"
            >
              <ImageWithSkeleton
                src={item.imageUrl}
                alt={item.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Category Pill Top */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans tracking-wider uppercase bg-surface-bright/90 text-primary backdrop-blur-sm shadow-xs border border-secondary/20 font-semibold">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Zoom Action Button */}
              <button
                type="button"
                aria-label="Ampliar fotografía"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface/90 text-primary flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary hover:text-white shadow-md"
              >
                <ZoomIn size={18} />
              </button>

              {/* Hover Caption Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-surface-container-lowest">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-surface-container-lowest/80 line-clamp-2 transform translate-y-2 opacity-90 group-hover:translate-y-0 transition-transform duration-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedPhoto}
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
};
