export const RESORT_INFO = {
  name: "LE-VOYAGE Resort",
  location: "Located Kitale-Kapenguria Road, next to Moi University, Bakhita Campus",
  tagline: "Home Away From Home",
  coreValues: "Home Away From Home",
  slogan: "Home Away From Home",
  description: "LE-VOYAGE Resort offers luxury accommodation, world-class conference facilities, exquisite dining, and serene outdoor leisure spaces in Kitale. Home Away From Home.",
  
  contact: {
    phone: "0141592359",
    phoneRaw: "0141592359",
    whatsapp: "0141592359",
    whatsappRaw: "254141592359",
    whatsappQrUrl: "https://wa.me/254141592359",
    email: "leavoyageresort2018@gmail.com",
    bookingEmail: "leavoyageresort2018@gmail.com",
    address: "Located Kitale-Kapenguria Road, next to Moi University, Bakhita Campus",
    postalAddress: "P.O BOX 3432-30200, KITALE",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.518174542385!2d35.0061!3d1.0197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1782260e0a57e335%3A0x6b10705a6108ad4c!2sKitale!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
  },

  socials: {
    facebook: "https://facebook.com/LeVoyageResortKitale",
    instagram: "https://instagram.com/LeVoyageResortKitale",
    twitter: "https://twitter.com/LeVoyageResort",
    tripadvisor: "https://tripadvisor.com",
  },

  hours: {
    reception: "24/7 Front Desk",
    dining: "06:00 AM – 10:30 PM",
    pool: "07:00 AM – 06:30 PM",
  }
};

export const getWhatsAppLink = (message?: string) => {
  if (message) {
    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/${RESORT_INFO.contact.whatsappRaw}?text=${encodedMsg}`;
  }
  return `https://wa.me/${RESORT_INFO.contact.whatsappRaw}`;
};

export const getEmailMailtoLink = (subject: string, body: string) => {
  return `mailto:${RESORT_INFO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
