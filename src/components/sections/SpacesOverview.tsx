import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { SPACES_DATA } from '../../data/spaces';
import { Fade } from 'react-awesome-reveal';
import { ArrowRight } from 'lucide-react';

export const SpacesOverview: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden" id="conoce-quinta">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade triggerOnce direction="up" duration={800}>
          <SectionHeading
            badge="Conocé el espacio"
            badgeIcon="nature_people"
            title="El espacio"
            subtitle="Quinta Valhalla es una quinta para eventos ubicada en 20 de Junio, Zona Oeste, que combina espacios verdes, pileta y áreas al aire libre con un salón cubierto."
          />
        </Fade>

        {/* Metric Highlight Bar */}
        <Fade triggerOnce direction="up" delay={200} duration={800}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 p-6 rounded-2xl bg-surface-container-low border border-secondary/25 text-center max-w-4xl mx-auto shadow-xs">
            <div className="p-3 border-r border-outline-variant/30 last:border-r-0">
              <p className="font-serif text-2xl md:text-3xl text-primary font-semibold">Salón</p>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-medium mt-1">
                Cubierto y Climatizado
              </p>
            </div>
            <div className="p-3 md:border-r border-outline-variant/30">
              <p className="font-serif text-2xl md:text-3xl text-primary font-semibold">Parque</p>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-medium mt-1">
                Espacios Verdes
              </p>
            </div>
            <div className="p-3 border-r border-outline-variant/30">
              <p className="font-serif text-2xl md:text-3xl text-primary font-semibold">Pileta</p>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-medium mt-1">
                Con Deck y Solárium
              </p>
            </div>
            <div className="p-3">
              <p className="font-serif text-2xl md:text-3xl text-primary font-semibold">Quincho</p>
              <p className="font-sans text-xs uppercase tracking-wider text-secondary font-medium mt-1">
                Parrilla Equipada
              </p>
            </div>
          </div>
        </Fade>

        {/* Bento Grid Showcase of Top 3 Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Fade triggerOnce cascade damping={0.2} direction="up" duration={1000} className="contents">
            {SPACES_DATA.slice(0, 3).map((space) => (
              <article
                key={space.id}
                className="rounded-2xl bg-surface-container-lowest border border-secondary/25 overflow-hidden botanical-glow botanical-glow-hover flex flex-col justify-between group h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithSkeleton
                    src={space.mainImage}
                    alt={space.mainImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    skeletonClassName="rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface/90 text-primary font-sans text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-xs border border-secondary/20">
                      {space.tagline}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-serif text-2xl font-semibold text-surface-bright">
                      {space.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="font-sans text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-6">
                    {space.description}
                  </p>

                  <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-end">
                    <Link
                      to={`/espacios#${space.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      <span>Ver detalle</span>
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </Fade>
        </div>

        {/* View All Spaces CTA */}
        <Fade triggerOnce delay={300} direction="up" className="mt-14 text-center">
          <Link
            to="/espacios"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-surface font-sans text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <span>Explorar todos los espacios</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </Fade>
      </div>
    </section>
  );
};
