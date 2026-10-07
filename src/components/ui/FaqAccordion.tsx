import React, { useState } from 'react';
import { FaqItem } from '../../types';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="rounded-2xl border border-secondary/25 bg-surface-container-lowest overflow-hidden shadow-2xs transition-all duration-300"
          >
            <button
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans text-base sm:text-lg font-semibold text-primary hover:text-secondary transition-colors focus:outline-none focus:bg-surface-container-low"
            >
              <span className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary-fixed/40 text-secondary text-xs flex items-center justify-center shrink-0">
                  <HelpCircle size={14} strokeWidth={2.5} />
                </span>
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                size={20}
                strokeWidth={2.5}
                className={`text-secondary shrink-0 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-on-surface-variant font-sans text-sm sm:text-base leading-relaxed border-t border-outline-variant/15">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
