export const RESORT_INFO = {
  name: "Le Voyage Resort",
  location: "Kitale, Trans-Nzoia County, Kenya",
  tagline: "Experience comfort, hospitality and serenity in the heart of Kitale.",
  coreValues: "Comfort • Hospitality • Serenity",
  description: "Le Voyage Resort offers luxury accommodation, world-class conference facilities, exquisite dining, and serene outdoor leisure spaces set amidst the scenic beauty of Kitale.",
  
  contact: {
    phone: "+254 712 052 104",
    phoneRaw: "+254712052104",
    whatsapp: "+254 712 052 104",
    whatsappRaw: "254712052104",
    whatsappQrUrl: "https://wa.me/qr/DJDEXL6QEBVQL1",
    email: "gackstoneb@gmail.com",
    bookingEmail: "gackstoneb@gmail.com",
    address: "Off Kapenguria Road, Kitale, Kenya",
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
  return RESORT_INFO.contact.whatsappQrUrl;
};

export const getEmailMailtoLink = (subject: string, body: string) => {
  return `mailto:${RESORT_INFO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
