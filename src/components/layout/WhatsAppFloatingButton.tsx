import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createGeneralWhatsAppUrl, createGeneralWhatsAppUrl2 } from '../../services/whatsapp';
import { X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside aria-label="Atención por WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Popup con los dos números */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-2 bg-surface-container-lowest border border-secondary/30 rounded-2xl shadow-xl px-4 py-3 mb-1 w-max max-w-[220px]"
            style={{ transformOrigin: 'bottom right' }}
          >
            <p className="text-xs font-sans font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
              Escribinos al instante
            </p>
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="text-xs font-sans font-semibold text-emerald-800">+54 9 11 5464-6733</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              href={createGeneralWhatsAppUrl2()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="text-xs font-sans font-semibold text-emerald-800">+54 9 11 4563-7026</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar opciones de WhatsApp' : 'Ver números de WhatsApp'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 cursor-pointer"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* WhatsApp Icon */}
          <motion.div
            initial={false}
            animate={{
              opacity: open ? 0 : 1,
              scale: open ? 0.75 : 1,
              rotate: open ? -45 : 0
            }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.div>

          {/* Close Icon */}
          <motion.div
            initial={false}
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0.75,
              rotate: open ? 0 : 45
            }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <X size={24} strokeWidth={2.2} />
          </motion.div>
        </div>
      </motion.button>
    </aside>
  );
};
