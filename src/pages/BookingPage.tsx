import React, { useState } from 'react';
import { 
  Heart, 
  PartyPopper, 
  Cake, 
  Users, 
  GraduationCap, 
  Sparkles, 
  MessageCircle, 
  Receipt,
  type LucideIcon
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { createConsultaWhatsAppUrl } from '../services/whatsapp';

export const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Cumpleaños',
    estimatedDate: '',
    guestCount: '50 a 100',
    notes: ''
  });

  const eventTypes: { label: string; icon: LucideIcon }[] = [
    { label: 'Casamiento', icon: Heart },
    { label: '15 Años', icon: PartyPopper },
    { label: 'Cumpleaños', icon: Cake },
    { label: 'Reunión Familiar', icon: Users },
    { label: 'Egresados', icon: GraduationCap },
    { label: 'Otro', icon: Sparkles },
  ];

  const guestOptions = [
    'Hasta 50',
    '50 a 90',
    '90 a 120',
    'Más de 120',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const url = createConsultaWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Hero Header */}
      <section className="py-12 md:py-16 bg-surface-container-low border-b border-outline-variant/30 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            badge="Consultar Disponibilidad"
            badgeIcon="calendar_add_on"
            title="Planificá tu Evento"
            subtitle="Completá tus datos y te contactaremos por WhatsApp con la disponibilidad y opciones para tu celebración."
          />
        </div>
      </section>

      {/* Main Form */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl border border-secondary/25 p-6 md:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans"
                  />
                </div>
              </div>

              {/* Event Type Selection */}
              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-3">
                  Tipo de Evento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {eventTypes.map((et) => {
                      const Icon = et.icon;
                      return (
                        <button
                          key={et.label}
                          type="button"
                          onClick={() => setFormData({ ...formData, eventType: et.label })}
                          className={`p-3 rounded-2xl font-sans text-xs font-semibold text-center transition-all flex flex-col items-center gap-2 border ${formData.eventType === et.label
                            ? 'border-2 border-primary bg-primary/5 text-primary shadow-xs'
                            : 'border-outline-variant/40 bg-surface text-on-surface-variant hover:border-primary hover:text-primary'
                            }`}
                        >
                          <Icon size={20} strokeWidth={1.8} />
                          <span>{et.label}</span>
                        </button>
                      );
                    })}
                  </div>
              </div>

              {/* Guest Count & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-3">
                    Invitados Estimados
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {guestOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, guestCount: opt })}
                        className={`p-2.5 rounded-xl font-sans text-xs font-semibold text-center transition-all border ${formData.guestCount === opt
                          ? 'border-2 border-primary bg-primary/5 text-primary shadow-xs'
                          : 'border-outline-variant/40 bg-surface text-on-surface-variant hover:border-primary'
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="estimatedDate" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Fecha Estimada
                  </label>
                  <input
                    type="text"
                    id="estimatedDate"
                    name="estimatedDate"
                    value={formData.estimatedDate}
                    onChange={handleChange}
                    placeholder="Ej: Noviembre 2026"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Comentarios (opcional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="¿Alguna idea o consulta que quieras agregar?"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary text-surface font-sans text-sm font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                <MessageCircle size={18} />
                <span>Enviar consulta por WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-outline">
                Al presionar "Enviar" se abrirá WhatsApp con tus datos pre-cargados para que confirmes el envío.
              </p>
            </form>
          </div>

          {/* Right: Live Summary */}
          <aside className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-3xl bg-surface-container-low border border-secondary/30 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/25 mb-4">
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary">Tu Consulta</h4>
                </div>
                <Receipt size={24} className="text-secondary" />
              </div>

              <div className="space-y-3.5 text-xs font-sans">
                <div className="flex justify-between py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">Nombre:</span>
                  <span className="font-bold text-primary">{formData.name || '—'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">WhatsApp:</span>
                  <span className="font-bold text-primary">{formData.phone || '—'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">Evento:</span>
                  <span className="font-bold text-primary">{formData.eventType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-outline-variant/15">
                  <span className="text-on-surface-variant font-medium">Invitados:</span>
                  <span className="font-bold text-primary">{formData.guestCount}</span>
                </div>
                {formData.estimatedDate && (
                  <div className="flex justify-between py-1 border-b border-outline-variant/15">
                    <span className="text-on-surface-variant font-medium">Fecha:</span>
                    <span className="font-bold text-primary">{formData.estimatedDate}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/25">
                <p className="text-[11px] text-center text-outline">
                  Atención directa con coordinadores de Quinta Valhalla
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
