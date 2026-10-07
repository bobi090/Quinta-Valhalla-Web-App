export interface Space {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  banquetCapacity: number;
  cocktailCapacity: number;
  features: string[];
  mainImage: string;
  mainImageAlt: string;
  galleryImages: {
    url: string;
    alt: string;
    caption: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  quote: string;
  description: string;
  capacity: string;
  duration: string;
  image: string;
  imageAlt: string;
  features: string[];
  includedServices: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bodas' | 'fiestas15' | 'nocturnos' | 'detalles' | 'interiores' | 'parque';
  categoryLabel: string;
  kicker: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  aspectRatio?: '4/5' | '16/9' | 'square' | '4/3';
}

export interface Review {
  id: string;
  hostName: string;
  eventType: 'bodas' | 'quince' | 'cumpleanos' | 'familia' | 'egresados';
  eventTypeLabel: string;
  eventDate: string;
  rating: number;
  quote: string;
  fullReview: string;
  avatarUrl: string;
  avatarAlt: string;
  highlights: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'reserva' | 'instalaciones' | 'servicios' | 'logistica';
}

export interface BookingFormState {
  eventType: string;
  season: string;
  guestCount: string;
  timeSlot: string;
  tentativeDate: string;
  selectedServices: string[];
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  estimatedGuests: string;
  approxDate: string;
  message: string;
}
