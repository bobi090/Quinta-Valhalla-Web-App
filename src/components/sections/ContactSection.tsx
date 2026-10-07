import React, { useState } from 'react';
import { createConsultaWhatsAppUrl } from '../../services/whatsapp';
import Aurora from '../animations/Aurora';
import { AnimatedDivider } from '../ui/AnimatedDivider';
import { Select } from '../ui/Select';
import { Fade } from 'react-awesome-reveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Cumpleaños',
    estimatedDate: '',
    guestCount: '50 a 100',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const url = createConsultaWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contacto-seccion">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#032517', '#5E7153', '#C5A880']}
          amplitude={1.2}
          blend={0.6}
          speed={0.4}
        />
      </div>
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 z-0 bg-primary/60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <Fade triggerOnce direction="up" duration={800}>
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight leading-tight">
              Consultá por tu evento
            </h2>
            <AnimatedDivider colorClass="bg-white/40" iconColorClass="text-white/70" />
            <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
              Completá el formulario para que podamos asesorarte y confirmar disponibilidad.
            </p>
          </div>
        </Fade>

        <div className="max-w-2xl mx-auto p-8 sm:p-10 md:p-12 rounded-3xl bg-surface-container-lowest border border-secondary/25 shadow-sm">


          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej: 11 5555-8888"
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="eventType" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                  Tipo de Evento
                </label>
                <Select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onValueChange={(val) => setFormData({ ...formData, eventType: val })}
                  options={[
                    { value: 'Casamiento', label: 'Casamiento' },
                    { value: '15 Años', label: '15 Años' },
                    { value: '18 Años', label: '18 Años' },
                    { value: 'Cumpleaños', label: 'Cumpleaños' },
                    { value: 'Egresados', label: 'Fiesta de Egresados' },
                    { value: 'Otro', label: 'Otro' },
                  ]}
                  placeholder="Seleccioná el tipo"
                />
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                  Invitados Estimados
                </label>
                <Select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onValueChange={(val) => setFormData({ ...formData, guestCount: val })}
                  options={[
                    { value: 'Hasta 50', label: 'Hasta 50' },
                    { value: '50 a 70', label: '50 a 70' },
                    { value: '70 a 100', label: '70 a 100' },
                    { value: 'Más de 100', label: 'Más de 100' },
                  ]}
                  placeholder="Cantidad estimada"
                />
              </div>
            </div>

            <div>
              <label htmlFor="estimatedDate" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                Fecha
              </label>
              <input
                type="text"
                id="estimatedDate"
                name="estimatedDate"
                value={formData.estimatedDate}
                onChange={handleChange}
                placeholder="Ej: Noviembre 2026 o fecha específica"
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                Consultas adicionales
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="¿Algo que quieras contarnos sobre tu evento?"
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50 resize-y"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-primary text-surface font-sans text-base font-semibold hover:opacity-80 transition-opacity duration-200"
              >
                {/* WhatsApp logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>Enviar mensaje por WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
