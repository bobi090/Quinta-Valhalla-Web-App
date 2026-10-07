import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EVENTS_DATA } from '../../data/events';
import { createEventWhatsAppUrl } from '../../services/whatsapp';
import { Fade } from 'react-awesome-reveal';
import { TreePine, Palette, Headset, MessageCircle, ArrowRight } from 'lucide-react';

export const EventsOverview: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low relative border-y border-outline-variant/30" id="eventos-preview">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade triggerOnce direction="up" duration={800}>
          <SectionHeading
            badge="Elegí cómo querés celebrar"
            badgeIcon="celebration"
            title="Tipos de Eventos"
            subtitle="Cumpleaños, 15 años, casamientos, reuniones familiares y fiestas de egresados. Un espacio versátil para distintas celebraciones."
          />
        </Fade>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <Fade triggerOnce cascade damping={0.2} direction="up" duration={800}>
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-secondary/25 flex items-start gap-3.5 shadow-2xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <TreePine size={22} strokeWidth={2} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans text-sm font-bold text-primary mb-1">Espacios Versátiles</h4>
                <p className="font-sans text-xs text-on-surface-variant">
                  Salón cubierto + parque + pileta + sectores al aire libre.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-secondary/25 flex items-start gap-3.5 shadow-2xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <Palette size={22} strokeWidth={2} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans text-sm font-bold text-primary mb-1">Libertad Creativa</h4>
                <p className="font-sans text-xs text-on-surface-variant">
                  Elección libre de catering, barra y ambientación.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-secondary/25 flex items-start gap-3.5 shadow-2xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <Headset size={22} strokeWidth={2} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans text-sm font-bold text-primary mb-1">Atención Cercana</h4>
                <p className="font-sans text-xs text-on-surface-variant">
                  Acompañamiento en la planificación de tu evento.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Featured Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Fade triggerOnce cascade damping={0.3} direction="up" duration={1000} className="contents">
            {EVENTS_DATA.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="rounded-3xl bg-surface-container-lowest border border-secondary/25 overflow-hidden botanical-glow botanical-glow-hover flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithSkeleton
                    src={event.image}
                    alt={event.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    skeletonClassName="rounded-none"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-sans text-xs font-semibold uppercase tracking-wider shadow-sm">
                      {event.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="font-serif italic text-sm text-secondary mb-4">
                      "{event.subtitle}"
                    </p>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={createEventWhatsAppUrl(event.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-colors"
                    >
                      <MessageCircle size={14} strokeWidth={2.5} />
                      <span>Consultar disponibilidad</span>
                    </a>
                    <Link
                      to="/eventos"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-4 py-3 text-xs font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      <span>Ver más formatos</span>
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};
