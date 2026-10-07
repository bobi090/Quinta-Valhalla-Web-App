import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { createVisitWhatsAppUrl } from '../../services/whatsapp';
import { Fade } from 'react-awesome-reveal';
import { MessageCircle, TreePine, BadgeCheck, PartyPopper, CalendarPlus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const BookingSteps: React.FC = () => {
  const steps: { step: string; icon: LucideIcon; title: string; description: string; badge: string }[] = [
    {
      step: '01',
      icon: MessageCircle,
      title: 'Consultá',
      description: 'Escribinos por WhatsApp con tu fecha tentativa, tipo de evento y cantidad estimada de invitados.',
      badge: 'Paso 1'
    },
    {
      step: '02',
      icon: TreePine,
      title: 'Visitá el predio',
      description: 'Coordinamos una visita para que conozcas el salón, el parque, la pileta y todos los espacios.',
      badge: 'Paso 2'
    },
    {
      step: '03',
      icon: BadgeCheck,
      title: 'Reservá tu fecha',
      description: 'Formalizá la reserva y asegurá tu fecha para empezar a planificar tu evento.',
      badge: 'Paso 3'
    },
    {
      step: '04',
      icon: PartyPopper,
      title: 'Celebrá',
      description: 'Te acompañamos en la organización para que disfrutes de una celebración a tu medida.',
      badge: 'Paso 4'
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low border-t border-outline-variant/30 relative" id="como-reservar">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade triggerOnce direction="up" duration={800}>
          <SectionHeading
            badge="¿Cómo es el proceso?"
            badgeIcon="timeline"
            title="Consultá, visitá, reservá y celebrá"
            subtitle="Un proceso simple y directo para organizar tu evento en Quinta Valhalla."
          />
        </Fade>

        {/* 4-Step Horizontal / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <Fade triggerOnce cascade damping={0.2} direction="up" duration={800} className="contents">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-2xl bg-surface-container-lowest border border-secondary/25 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-primary-container text-surface-bright flex items-center justify-center font-serif text-xl font-bold shadow-xs">
                      {item.step}
                    </span>
                    <item.icon size={22} strokeWidth={2} className="text-secondary group-hover:scale-110 transition-transform" />
                  </div>

                  <span className="text-xs font-sans text-secondary uppercase font-semibold tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Fade>
        </div>

        {/* Action ribbon */}
        <Fade triggerOnce direction="up" delay={400} duration={800}>
          <div className="mt-14 p-8 rounded-3xl bg-primary text-surface-bright flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-serif text-2xl font-medium text-surface-bright">
                ¿Querés conocer la quinta?
              </h4>
              <p className="font-sans text-sm text-surface-variant max-w-xl">
                Coordiná una visita por WhatsApp para recorrer el salón, el parque y todos los espacios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={createVisitWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-sans text-xs font-semibold uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <CalendarPlus size={18} strokeWidth={2.5} className="shrink-0" />
                <span>Coordinar Visita</span>
              </a>
              <Link
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-surface/30 text-surface hover:bg-surface/10 font-sans text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
              >
                <span>Consultar disponibilidad</span>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
