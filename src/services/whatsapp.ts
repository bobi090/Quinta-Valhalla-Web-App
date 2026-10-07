

export const WHATSAPP_PHONE = '5491154646733';   // Número 1: +54 9 11 5464-6733
export const WHATSAPP_PHONE_2 = '5491145637026'; // Número 2: +54 9 11 4563-7026
export const INSTAGRAM_HANDLE = 'quintavalhallaen20dejunio';
export const INSTAGRAM_URL = 'https://instagram.com/quintavalhallaen20dejunio';
export const TIKTOK_HANDLE = 'quintavalhallaen2';
export const TIKTOK_URL = 'https://www.tiktok.com/@quintavalhallaen2';
export const VENUE_LOCATION = 'Cnel. Manuel Rico 650, 20 de Junio';
export const VENUE_ADDRESS_FULL = 'Cnel. Manuel Rico 650, B1786AWN, 20 de Junio, Prov. de Buenos Aires';
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/JpzxwfEedaeG4jv99';
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/JpzxwfEedaeG4jv99';

export function createGeneralWhatsAppUrl(phone: string = WHATSAPP_PHONE): string {
  const text = encodeURIComponent(
    '¡Hola Quinta Valhalla! Me gustaría consultar por disponibilidad y opciones de eventos para mi próxima celebración.'
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export function createGeneralWhatsAppUrl2(): string {
  return createGeneralWhatsAppUrl(WHATSAPP_PHONE_2);
}

export function createSpaceWhatsAppUrl(spaceName: string): string {
  const text = encodeURIComponent(
    `¡Hola Quinta Valhalla! Estuve viendo el sitio web y me interesa consultar por el espacio "${spaceName}". ¿Podrían brindarme más información y disponibilidad?`
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export function createEventWhatsAppUrl(eventTitle: string): string {
  const text = encodeURIComponent(
    `¡Hola Quinta Valhalla! Quisiera consultar disponibilidad para organizar: *${eventTitle}*. ¿Podríamos coordinar una visita?`
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export function createVisitWhatsAppUrl(): string {
  const text = encodeURIComponent(
    '¡Hola Quinta Valhalla! Me gustaría coordinar una visita para conocer el predio y los espacios. ¿Qué días tienen disponibilidad?'
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export function createConsultaWhatsAppUrl(data: {
  name: string;
  phone: string;
  eventType: string;
  estimatedDate: string;
  guestCount: string;
  notes?: string;
}): string {
  const message =
    `¡Hola Quinta Valhalla! Quiero consultar disponibilidad para mi evento:

*Nombre:* ${data.name || 'No especificado'}
*Tipo de Evento:* ${data.eventType || 'A definir'}
*Fecha estimada:* ${data.estimatedDate || 'A coordinar'}
*Cantidad estimada de invitados:* ${data.guestCount || 'A definir'}
${data.notes?.trim() ? `*Detalles extra / Consultas:* ${data.notes.trim()}\n` : ''}
¿Podríamos coordinar una visita? ¡Gracias!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
