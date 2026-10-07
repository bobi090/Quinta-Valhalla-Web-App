import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { REVIEWS_METRICS } from '../../data/reviews';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Star, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative" id="experiencias-preview">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Fade triggerOnce direction="up" duration={800}>
          <SectionHeading
            badge="Lo que dicen nuestros clientes"
            badgeIcon="rate_review"
            title="Opiniones Reales"
            subtitle="Conocé las experiencias de quienes eligieron Quinta Valhalla para celebrar."
          />
        </Fade>

        {/* Google Reviews Card */}
        <div className="max-w-2xl mx-auto">
          <Zoom triggerOnce duration={800} delay={200}>
            <div className="p-8 md:p-10 rounded-3xl bg-surface-container-lowest shadow-xs border border-secondary/25 text-center transition-all duration-300 hover:shadow-lg">
              {/* Google Reviews Badge */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-container text-surface-bright flex items-center justify-center shrink-0 shadow-xs border border-secondary/25">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        strokeWidth={0}
                        fill="currentColor"
                        className="text-secondary"
                      />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-on-surface-variant mt-1">
                    {REVIEWS_METRICS.totalReviews} reseñas en {REVIEWS_METRICS.source}
                  </p>
                </div>
              </div>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md mx-auto">
                Leé las opiniones de quienes ya celebraron en Quinta Valhalla y compartí tu propia experiencia.
              </p>

              <a
                href={REVIEWS_METRICS.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-surface font-sans text-sm font-semibold hover:bg-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <ExternalLink size={14} strokeWidth={2.5} />
                <span>Ver reseñas en Google</span>
              </a>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};
