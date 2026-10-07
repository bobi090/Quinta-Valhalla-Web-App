import React from 'react';
import {
  createGeneralWhatsAppUrl,
  createGeneralWhatsAppUrl2,
  INSTAGRAM_URL,
  TIKTOK_URL
} from '../../services/whatsapp';
import GradientWaves from '../ui/GradientWaves';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full border-t border-white/10 text-brand-cream overflow-hidden bg-primary">
      {/* Background Gradient Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <GradientWaves
          horizonColor="#1B3B2B"
          waveColor="#C5A880"
          crestColor="#FAF8F5"
          speed={0.4}
          amplitude={3.5}
          waveScale={1.2}
          zoom={1.5}
        />
      </div>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-primary/40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14">
        {/* Top Tier: Logo & Brand + Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
          <div className="flex items-center">
            <img
              src="/logo-quinta-valhalla.png"
              alt="Quinta Valhalla Logo"
              className="h-24 md:h-28 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-primary transition-all duration-300 shadow-lg"
              aria-label="Perfil de Instagram"
              title="Instagram @quintavalhallaen20dejunio"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-primary transition-all duration-300 shadow-lg"
              aria-label="Perfil de TikTok"
              title="TikTok @quintavalhallaen2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
            </a>
          </div>
        </div>

        {/* Middle Tier: Sobre Nosotros & WhatsApp Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 border-b border-white/10">
          {/* Col 1: About */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-gold">Sobre Nosotros</h4>
            <p className="font-sans text-sm text-brand-cream/80 leading-relaxed max-w-xl">
              Nacimos hace mas de 10 años con el objetivo de brindar un espacio distinto a los salones cerrados. Atendido por sus dueños, el lugar ha retomado un rumbo que jamas imaginamos que llegariamos. Queremos agradecer por el cariño y el respeto que nos brindan dia a dia. Los esperamos para seguir creando momentos inolvidables.
            </p>
          </div>

          {/* Col 2: WhatsApp Contacts */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-gold">Contactos de WhatsApp</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contacto 1 */}
              <a
                href={createGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/10 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-primary transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div className="flex items-center min-w-0">
                  <span className="font-sans text-sm md:text-base text-brand-cream font-semibold tracking-wide">+54 9 11 5464-6733</span>
                </div>
              </a>

              {/* Contacto 2 */}
              <a
                href={createGeneralWhatsAppUrl2()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/10 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-primary transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div className="flex items-center min-w-0">
                  <span className="font-sans text-sm md:text-base text-brand-cream font-semibold tracking-wide">+54 9 11 4563-7026</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <p>© {new Date().getFullYear()} Quinta Valhalla. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
