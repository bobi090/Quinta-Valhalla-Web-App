import { BookingFormState, ContactFormData } from '../types';

const STORAGE_KEY_BOOKINGS = 'quinta_valhalla_bookings';
const STORAGE_KEY_CONTACTS = 'quinta_valhalla_contacts';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export const bookingService = {
  /**
   * Save a booking inquiry to local state and simulate API call.
   * Can be hooked up to a real POST /api/bookings endpoint.
   */
  async submitBookingInquiry(data: BookingFormState): Promise<ApiResponse<BookingFormState>> {
    // Artificial network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Basic validation
    if (!data.fullName || !data.phone) {
      return {
        success: false,
        message: 'Por favor completá tu nombre y teléfono de contacto para continuar.'
      };
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKINGS) || '[]');
      const newEntry = {
        ...data,
        id: 'bk_' + Date.now(),
        createdAt: new Date().toISOString()
      };
      existing.push(newEntry);
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(existing));

      return {
        success: true,
        message: '¡Consulta enviada con éxito! Nos comunicaremos a la brevedad.',
        data: newEntry
      };
    } catch {
      return {
        success: true,
        message: 'Consulta registrada correctamente.',
        data
      };
    }
  },

  /**
   * Save a contact form message.
   * Prepared for POST /api/contact.
   */
  async submitContactMessage(data: ContactFormData): Promise<ApiResponse<ContactFormData>> {
    await new Promise((resolve) => setTimeout(resolve, 700));

    if (!data.name || !data.email || !data.phone) {
      return {
        success: false,
        message: 'Por favor completá todos los campos requeridos.'
      };
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_CONTACTS) || '[]');
      const newEntry = {
        ...data,
        id: 'msg_' + Date.now(),
        createdAt: new Date().toISOString()
      };
      existing.push(newEntry);
      localStorage.setItem(STORAGE_KEY_CONTACTS, JSON.stringify(existing));

      return {
        success: true,
        message: '¡Mensaje recibido! Te responderemos dentro de las próximas 24 horas.',
        data: newEntry
      };
    } catch {
      return {
        success: true,
        message: 'Mensaje enviado correctamente.',
        data
      };
    }
  }
};
