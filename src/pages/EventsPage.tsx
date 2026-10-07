import React from 'react';
import { EVENTS_DATA } from '../data/events';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImageWithSkeleton } from '../components/ui/ImageWithSkeleton';
import { createEventWhatsAppUrl } from '../services/whatsapp';
import { TreePine, Palette, Headset, Sparkles, Check, Users, Clock, MessageCircle } from 'lucide-react';

export const EventsPage: React.FC = () => {
  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Editorial Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-surface-bright border-b border-surface-variant/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <SectionHeading
            badge="Celebraciones en la Naturaleza"
            badgeIcon="park"
            title="Eventos a Tu Medida"
            subtitle="Casamientos, 15 años, cumpleaños, reuniones familiares y fiestas de egresados. Un espacio versátil que se adapta a cada celebración."
          />

          {/* Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3 shadow-xs">
              <TreePine size={22} strokeWidth={2} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans text-sm font-bold text-primary mb-1">Espacios versátiles</h4>
                <p className="font-sans text-xs text-on-surface-variant">Salón cubierto + parque + pileta + sectores al aire libre</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3 shadow-xs">
              <Palette size={22} strokeWidth={2} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans text-sm font-bold text-primary mb-1">Libertad creativa</h4>
                <p className="font-sans text-xs text-on-surface-variant">Elección libre de ambientación & catering</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-3 shadow-xs">
              <Headset size={22} strokeWidth={2} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <h4 className="font-sans text-sm font-bold text-primary mb-1">Atención cercana</h4>
                <p className="font-sans text-xs text-on-surface-variant">Acompañamiento en cada etapa de la planificación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Breakdown */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          {EVENTS_DATA.map((event, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={event.id}
                id={event.id}
                className="bg-surface-container-lowest rounded-3xl border border-secondary/25 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
              >
                {/* Photo Column */}
                <div className={`lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                  <ImageWithSkeleton
                    src={event.image}
                    alt={event.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    skeletonClassName="rounded-none"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-3.5 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider font-semibold shadow-sm">
                    {event.badge}
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 p-8 md:p-12 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <Sparkles size={16} strokeWidth={2} className="text-secondary" />
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                        Formato de Evento
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-semibold text-primary mb-2">
                      {event.title}
                    </h3>

                    <p className="font-serif italic text-base text-secondary mb-4">
                      "{event.subtitle}"
                    </p>

                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                        Espacios y servicios:
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-xs font-sans text-on-surface-variant">
                        {event.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={14} strokeWidth={2.5} className="text-secondary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Info badges */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-outline-variant/20 mb-6 text-xs text-on-surface-variant font-sans">
                      <div className="flex items-center gap-2">
                        <Users size={16} strokeWidth={2} className="text-secondary" />
                        <span>{event.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} strokeWidth={2} className="text-secondary" />
                        <span>{event.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <a
                      href={createEventWhatsAppUrl(event.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-sm"
                    >
                      <MessageCircle size={14} strokeWidth={2.5} />
                      <span>Consultar Disponibilidad</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};
