import React from 'react';
import { Car, MapPin, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactSection } from '../components/sections/ContactSection';
import { FaqSection } from '../components/sections/FaqSection';
import { VENUE_LOCATION, GOOGLE_MAPS_URL } from '../services/whatsapp';

export const ContactPage: React.FC = () => {
  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Contact Section */}
      <ContactSection />

      {/* How to Get There & Location Map Section */}
      <section className="py-16 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            badge="Ubicación"
            badgeIcon="explore"
            title="Cómo llegar a Quinta Valhalla"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Directions Guide */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-secondary/25 shadow-xs space-y-5">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-primary font-serif text-lg font-semibold">
                    <Car size={22} className="text-secondary" />
                    <span>Dónde nos ubicamos</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Nos encontramos a pocas cuadras de 20 de Junio, por la bajada de la nueva autopista Presidente Perón, con acceso rapido desde distintos puntos de Zona Oeste.
                  </p>
                </div>

                <hr className="border-outline-variant/30" />

                <div>
                  <div className="flex items-center gap-3 mb-2 text-primary font-serif text-lg font-semibold">
                    <MapPin size={22} className="text-secondary" />
                    <span>Dirección</span>
                  </div>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-semibold">
                    {VENUE_LOCATION}
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-sans font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <span>Abrir en Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Visual Frame */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-secondary/30 shadow-md relative min-h-[380px] bg-surface-container">
              <iframe
                title="Mapa de Ubicación Quinta Valhalla"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8!2d-58.5886!3d-34.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc17f09b78a25%3A0x8c4f3d6e2a1b0c5d!2sQuinta%20Valhalla!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs on Contact Page */}
      <FaqSection />
    </main>
  );
};
