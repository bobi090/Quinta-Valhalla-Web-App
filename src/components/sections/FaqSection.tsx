import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { FaqAccordion } from '../ui/FaqAccordion';
import { FAQS_DATA } from '../../data/faqs';

export const FaqSection: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low border-t border-outline-variant/30 relative" id="faqs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Dudas Frecuentes"
          badgeIcon="quiz"
          title="Preguntas Habituales"
          subtitle="Respondemos con transparencia las dudas más comunes sobre la contratación, el predio y la organización de eventos en Quinta Valhalla."
        />

        <FaqAccordion items={FAQS_DATA} />


      </div>
    </section>
  );
};
