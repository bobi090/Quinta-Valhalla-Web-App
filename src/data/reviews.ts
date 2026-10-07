import { Review } from '../types';

// No se publican testimonios hasta tener reseñas reales verificadas.
// El sitio enlaza directamente a las reseñas de Google.
export const REVIEWS_DATA: Review[] = [];

export const REVIEWS_METRICS = {
  score: '4.7',
  totalReviews: '206',
  source: 'Google Reviews',
  googleReviewsUrl: 'https://maps.app.goo.gl/JpzxwfEedaeG4jv99'
};
