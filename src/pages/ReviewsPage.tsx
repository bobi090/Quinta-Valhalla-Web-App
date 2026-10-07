import React from 'react';
import { Star, ExternalLink, SquarePen } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { REVIEWS_METRICS } from '../data/reviews';

export const ReviewsPage: React.FC = () => {
  return (
    <main className="flex-grow pt-24 pb-20">
      {/* Hero Reviews */}
      <section className="relative py-16 md:py-24 bg-surface-bright border-b border-outline-variant/30 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            badge="Opiniones Reales"
            badgeIcon="grade"
            title="Lo que dicen nuestros clientes"
            subtitle="Conocé las experiencias de quienes eligieron Quinta Valhalla para sus celebraciones."
          />

          {/* Google Reviews Card */}
          <div className="max-w-lg mx-auto p-8 md:p-10 rounded-3xl bg-surface-container-lowest shadow-xs border border-secondary/25">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container text-surface-bright flex items-center justify-center shrink-0 shadow-xs border border-secondary/25">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="font-sans text-sm text-on-surface-variant mt-1">
                  {REVIEWS_METRICS.totalReviews} reseñas en {REVIEWS_METRICS.source}
                </p>
              </div>
            </div>

            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-8">
              Todas las reseñas están publicadas en Google y provienen de clientes reales que celebraron en Quinta Valhalla.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={REVIEWS_METRICS.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                <ExternalLink size={16} />
                <span>Leer reseñas en Google</span>
              </a>
              <a
                href={REVIEWS_METRICS.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-secondary text-primary hover:bg-secondary/10 font-sans text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <SquarePen size={16} />
                <span>Dejar una reseña</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
