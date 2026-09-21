import { RESORT_INFO, getEmailMailtoLink, getWhatsAppLink } from '@/config/resortInfo';

export interface RoomRecord {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price_per_night: number;
  capacity: number;
  bed_type: string;
  room_size: string;
  amenities: string[];
  main_image: string;
  gallery_images: string[];
  featured: number;
  active: number;
}

export interface PromotionRecord {
  id: number;
  title: string;
  slug: string;
  description: string;
  price_text: string;
  image: string;
  valid_from?: string;
  valid_to?: string;
  active: number;
  terms?: string;
}

export interface GalleryRecord {
  id: number;
  title: string;
  category: string;
  image_url: string;
  alt_text?: string;
}

export const staticRooms: RoomRecord[] = [
  {
    id: 1,
    name: 'Single Cottage',
    slug: 'single-cottage',
    short_description: 'Cozy single cottage surrounded by nature.',
    description: 'Perfect for solo travelers seeking privacy and tranquility in a standalone cottage setup.',
    price_per_night: 3500,
    capacity: 1,
    bed_type: '1 Single Bed',
    room_size: '20 sq.m',
    amenities: ['Wi-Fi', 'Hot Shower', 'Flat-screen TV', 'Daily Housekeeping'],
    main_image: '/images/Single.png',
    gallery_images: ['/images/Single.png', '/images/Single (2).png'],
    featured: 1,
    active: 1
  },
  {
    id: 2,
    name: 'Standard Cottage',
    slug: 'standard-cottage',
    short_description: 'Comfortable standard cottage for couples or solo travelers.',
    description: 'A beautiful standard cottage offering extra space and comfort with serene garden views.',
    price_per_night: 4500,
    capacity: 2,
    bed_type: '1 Double Bed',
    room_size: '25 sq.m',
    amenities: ['Wi-Fi', 'Hot Shower', 'Flat-screen TV', 'Daily Housekeeping'],
    main_image: '/images/Standard 4,500.jpeg',
    gallery_images: ['/images/Standard 4,500.jpeg', '/images/Standard.jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 3,
    name: 'Twin-Bed Cottage',
    slug: 'twin-bed-cottage',
    short_description: 'Spacious cottage with two separate beds.',
    description: 'Ideal for friends or colleagues sharing a room while enjoying the private cottage experience.',
    price_per_night: 6000,
    capacity: 2,
    bed_type: '2 Twin Beds',
    room_size: '30 sq.m',
    amenities: ['Wi-Fi', 'Hot Shower', 'Flat-screen TV', 'Desk & Chair'],
    main_image: '/images/Twin Bed.jpeg',
    gallery_images: ['/images/Twin Bed.jpeg', '/images/Twin Bed (2).jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 4,
    name: 'Family Cottage',
    slug: 'family-cottage',
    short_description: 'Spacious family cottage for groups and families.',
    description: 'A large cottage designed for families, offering ample space and comfort for everyone.',
    price_per_night: 9000,
    capacity: 4,
    bed_type: '1 Double + 2 Twin Beds',
    room_size: '50 sq.m',
    amenities: ['Wi-Fi', 'Hot Shower', 'Living Area', 'Flat-screen TV'],
    main_image: '/images/Family.jpeg',
    gallery_images: ['/images/Family.jpeg', '/images/Family (2).jpeg', '/images/Family (3).jpeg', '/images/Family (4).jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 5,
    name: 'Single Étage',
    slug: 'single-etage',
    short_description: 'Comfortable single room in the étage section.',
    description: 'A cozy and affordable single room located in our multi-story building.',
    price_per_night: 2500,
    capacity: 1,
    bed_type: '1 Single Bed',
    room_size: '15 sq.m',
    amenities: ['Wi-Fi', 'Hot Shower', 'Flat-screen TV'],
    main_image: '/images/Single (2).png',
    gallery_images: ['/images/Single (2).png', '/images/Single.png'],
    featured: 0,
    active: 1
  },
  {
    id: 6,
    name: 'Standard Étage',
    slug: 'standard-etage',
    short_description: 'Standard double room in the étage section.',
    description: 'Comfortable accommodation in the main building, suitable for couples.',
    price_per_night: 3500,
    capacity: 2,
    bed_type: '1 Double Bed',
    room_size: '20 sq.m',
    amenities: ['Wi-Fi', 'Hot Shower', 'Flat-screen TV'],
    main_image: '/images/Standard 3,500.jpeg',
    gallery_images: [
      '/images/Standard 3,500.jpeg',
      '/images/Standard 3,500 (2).jpeg',
      '/images/Standard 3,500 (3).jpeg',
      '/images/Standard 3,500 (4).jpeg',
      '/images/Standard 3,500 (5).jpeg',
      '/images/Standard 3,500 (6).jpeg'
    ],
    featured: 0,
    active: 1
  },
  {
    id: 7,
    name: 'Deluxe Étage',
    slug: 'deluxe-etage',
    short_description: 'Spacious deluxe room with premium amenities.',
    description: 'Elevated comfort and space in our deluxe étage rooms, offering superior relaxation.',
    price_per_night: 5000,
    capacity: 2,
    bed_type: '1 Queen Bed',
    room_size: '30 sq.m',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Balcony'],
    main_image: '/images/accomodation-1.jpeg',
    gallery_images: ['/images/accomodation-1.jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 8,
    name: 'BnB Étage',
    slug: 'bnb-etage',
    short_description: 'Premium Bed and Breakfast suite.',
    description: 'Our top-tier étage accommodation featuring expanded space and premium breakfast inclusions.',
    price_per_night: 10000,
    capacity: 2,
    bed_type: '1 King Bed',
    room_size: '40 sq.m',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Smart TV', 'Premium Breakfast'],
    main_image: '/images/accomodation-2.jpeg',
    gallery_images: ['/images/accomodation-2.jpeg'],
    featured: 1,
    active: 1
  }
];

export const staticPromotions: PromotionRecord[] = [
  {
    id: 1,
    title: 'Weekend Escape Package',
    slug: 'weekend-escape-package',
    description: 'Treat yourself and your loved one to a relaxing 2-night weekend stay including full-board dining, complimentary pool access, and welcome drinks.',
    price_text: 'KES 22,000 / couple',
    image: '/images/swimming-pool-4.jpeg',
    valid_from: '2026-01-01',
    valid_to: '2026-12-31',
    terms: 'Valid Friday through Sunday. Advance booking required.',
    active: 1
  },
  {
    id: 2,
    title: 'Full-Day Corporate Conference Package',
    slug: 'corporate-conference-package',
    description: 'Comprehensive corporate seminar bundle including hall hire, high-speed Wi-Fi, projector/PA system, 10am & 4pm tea breaks, and buffet lunch.',
    price_text: 'KES 2,800 / delegate',
    image: '/images/conference-2.jpeg',
    valid_from: '2026-01-01',
    valid_to: '2026-12-31',
    terms: 'Minimum 15 delegates. Custom menu options available upon request.',
    active: 1
  },
  {
    id: 3,
    title: 'Garden Wedding & Reception Special',
    slug: 'garden-wedding-special',
    description: 'Celebrate your special day on our expansive manicured lawns with complimentary honeymoon suite stay for the bride and groom.',
    price_text: 'Custom Quote Available',
    image: '/images/gardens-3.jpeg',
    valid_from: '2026-01-01',
    valid_to: '2026-12-31',
    terms: 'Subject to garden availability. Pre-booking consultation required.',
    active: 1
  }
];

export const staticGallery: GalleryRecord[] = [
  { id: 1, title: 'Outdoor Swimming Pool Deck', category: 'Swimming Pool', image_url: '/images/swimming-pool-1.jpeg', alt_text: 'LE-VOYAGE swimming pool' },
  { id: 2, title: 'Poolside Loungers & Sun Deck', category: 'Swimming Pool', image_url: '/images/swimming-pool-2.jpeg', alt_text: 'LE-VOYAGE swimming pool deck' },
  { id: 3, title: 'Poolside Relaxation Area', category: 'Swimming Pool', image_url: '/images/swimming-pool-3.jpeg', alt_text: 'LE-VOYAGE swimming pool area' },
  { id: 4, title: 'Swimming Pool Oasis', category: 'Swimming Pool', image_url: '/images/swimming-pool-4.jpeg', alt_text: 'LE-VOYAGE swimming pool view' },
  { id: 5, title: 'Main Restaurant Dining Hall', category: 'Dining', image_url: '/images/Dinning.jpeg', alt_text: 'LE-VOYAGE main restaurant dining hall' },
  { id: 6, title: 'Veranda Cocktail Bar & Lounge', category: 'Dining', image_url: '/images/Bar & Lounge.jpeg', alt_text: 'LE-VOYAGE veranda cocktail bar and lounge' },
  { id: 7, title: 'Indoor Cocktail Bar & Lounge', category: 'Dining', image_url: '/images/Bar & Lounge (2).jpeg', alt_text: 'LE-VOYAGE indoor cocktail bar and lounge seating' },
  { id: 8, title: 'Restaurant Dining Area', category: 'Dining', image_url: '/images/dinning-1.jpeg', alt_text: 'LE-VOYAGE dining area' },
  { id: 9, title: 'Resort Dining & Culinary Experience', category: 'Dining', image_url: '/images/dinning-2.jpeg', alt_text: 'LE-VOYAGE dining room' },
  { id: 10, title: 'Signature Cocktail & Drinks Menu', category: 'Dining', image_url: '/images/Bar & Lounge (3).jpeg', alt_text: 'LE-VOYAGE signature drinks and cocktail menu' },
  { id: 11, title: 'Bar Spirits & Liquor Selection', category: 'Dining', image_url: '/images/Bar & Lounge (4).jpeg', alt_text: 'LE-VOYAGE bar spirits and whisky menu' },
  { id: 12, title: 'Beers, Wines & Soft Drinks Menu', category: 'Dining', image_url: '/images/Bar & Lounge (5).jpeg', alt_text: 'LE-VOYAGE beers wines and beverages menu' },
  { id: 13, title: 'Breakfast, Beverages & Snacks Menu', category: 'Dining', image_url: '/images/Dinning (2).jpeg', alt_text: 'LE-VOYAGE breakfast and snacks menu' },
  { id: 14, title: 'Chef Special Platters & Main Menu', category: 'Dining', image_url: '/images/Dining (3).jpeg', alt_text: 'LE-VOYAGE main course and grilled platters menu' },
  { id: 15, title: 'Single Cottage Bedroom', category: 'Accommodation', image_url: '/images/Single.png', alt_text: 'LE-VOYAGE single cottage accommodation' },
  { id: 16, title: 'Standard Cottage 4,500 Exterior & Room', category: 'Accommodation', image_url: '/images/Standard 4,500.jpeg', alt_text: 'LE-VOYAGE standard cottage room' },
  { id: 17, title: 'Twin-Bed Cottage Suite', category: 'Accommodation', image_url: '/images/Twin Bed.jpeg', alt_text: 'LE-VOYAGE twin-bed cottage accommodation' },
  { id: 18, title: 'Family Cottage Suite', category: 'Accommodation', image_url: '/images/Family.jpeg', alt_text: 'LE-VOYAGE family cottage accommodation' },
  { id: 19, title: 'Standard Étage 3,500 Room', category: 'Rooms', image_url: '/images/Standard 3,500.jpeg', alt_text: 'LE-VOYAGE standard étage room' },
  { id: 20, title: 'Deluxe Executive Accommodation', category: 'Rooms', image_url: '/images/accomodation-1.jpeg', alt_text: 'LE-VOYAGE deluxe room interior' },
  { id: 21, title: 'Grand Conference Hall Venue', category: 'Conference', image_url: '/images/conference-1.jpeg', alt_text: 'LE-VOYAGE conference venue' },
  { id: 22, title: 'Executive Seminar Hall', category: 'Conference', image_url: '/images/conference-2.jpeg', alt_text: 'LE-VOYAGE conference hall' },
  { id: 23, title: 'Expansive Lawns & Kids Play Area', category: 'Gardens', image_url: '/images/Gardens.jpeg', alt_text: 'LE-VOYAGE expansive manicured lawns and kids playground' },
  { id: 24, title: 'Recreational Lawns & Bouncing Castle', category: 'Gardens', image_url: '/images/Gardens (2).jpeg', alt_text: 'LE-VOYAGE recreational lawns with bouncing castle' },
  { id: 25, title: 'Outdoor Team Building & Event Lawns', category: 'Gardens', image_url: '/images/Gardens (3).jpeg', alt_text: 'LE-VOYAGE outdoor team building and event lawns' },
  { id: 26, title: 'Tropical Resort Gardens', category: 'Gardens', image_url: '/images/gardens-1.jpeg', alt_text: 'LE-VOYAGE gardens' },
  { id: 27, title: 'Manicured Lawn & Grounds', category: 'Gardens', image_url: '/images/gardens-2.jpeg', alt_text: 'LE-VOYAGE grounds' },
  { id: 28, title: 'Garden Walkways & Trees', category: 'Gardens', image_url: '/images/gardens-3.jpeg', alt_text: 'LE-VOYAGE garden landscape' },
  { id: 29, title: 'Outdoor Event Lawns', category: 'Gardens', image_url: '/images/gardens-4.jpeg', alt_text: 'LE-VOYAGE outdoor grounds' },
  { id: 30, title: 'Resort Flora & Environment', category: 'Gardens', image_url: '/images/gardens-5.jpeg', alt_text: 'LE-VOYAGE garden flora' },
  { id: 31, title: 'Westim Salon & Spa Poolside Building', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA (3).jpeg', alt_text: 'LE-VOYAGE Westim Salon and Spa exterior' },
  { id: 32, title: 'Modern Salon & Barber Stations', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA.jpeg', alt_text: 'LE-VOYAGE salon and barber styling stations' },
  { id: 33, title: 'Salon Beauty & Manicure Stations', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA (2).jpeg', alt_text: 'LE-VOYAGE salon styling and beauty station' },
  { id: 34, title: 'Salon Styling & Grooming Lounge', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA (4).jpeg', alt_text: 'LE-VOYAGE salon and grooming lounge' },
  { id: 35, title: 'Private Outdoor Garden Shades & Gazebos', category: 'Facilities', image_url: '/images/Shades.jpeg', alt_text: 'LE-VOYAGE private garden shades and gazebos' },
  { id: 36, title: 'Scenic Rooftop Terrace & Lounge', category: 'Facilities', image_url: '/images/Rooftop.jpeg', alt_text: 'LE-VOYAGE scenic rooftop terrace and lounge' },
  { id: 37, title: 'Rooftop Panoramic Lounge View', category: 'Facilities', image_url: '/images/Rooftop (2).jpeg', alt_text: 'LE-VOYAGE rooftop panoramic lounge view' },
  { id: 38, title: 'Rooftop Sundowner Deck', category: 'Facilities', image_url: '/images/Rooftop (3).jpeg', alt_text: 'LE-VOYAGE rooftop sundowner deck' },
  { id: 39, title: 'Grand Reception Lobby & Hallway', category: 'Resort', image_url: '/images/Reception.jpeg', alt_text: 'LE-VOYAGE grand reception hallway and lounge' },
  { id: 40, title: '24/7 Front Desk Reception Counter', category: 'Resort', image_url: '/images/Reception (2).jpeg', alt_text: 'LE-VOYAGE 24/7 front desk reception counter' },
  { id: 41, title: 'Main Entrance Gate & Executive Building', category: 'Resort', image_url: '/images/Resort (2).jpeg', alt_text: 'LE-VOYAGE main entrance gate and executive building' },
  { id: 42, title: 'Directional Facility Signage in Gardens', category: 'Resort', image_url: '/images/Resort.jpeg', alt_text: 'LE-VOYAGE directional facility signage' },
  { id: 43, title: 'Kitale Kapenguria Road Highway Signboard', category: 'Resort', image_url: '/images/Resort (3).jpeg', alt_text: 'LE-VOYAGE Kapenguria road directional signboard' }
];

export async function getRooms(): Promise<RoomRecord[]> {
  return staticRooms;
}

export async function getPromotions(): Promise<PromotionRecord[]> {
  return staticPromotions;
}

export async function getGallery(category?: string | null): Promise<GalleryRecord[]> {
  if (category && category !== 'All') {
    return staticGallery.filter(g => g.category === category);
  }
  return staticGallery;
}

export async function createBooking(bookingData: {
  reference_no: string;
  guest_name: string;
  email: string;
  phone: string;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
  rooms_count: number;
  room_type: string;
  special_requests?: string;
}) {
  const emailSubject = `LE-VOYAGE Resort Booking Enquiry - Ref: ${bookingData.reference_no}`;
  const emailBody = `Booking Reference: ${bookingData.reference_no}\nGuest Name: ${bookingData.guest_name}\nEmail: ${bookingData.email}\nPhone: ${bookingData.phone}\nRoom Type: ${bookingData.room_type}\nCheck-in: ${bookingData.check_in}\nCheck-out: ${bookingData.check_out}\nGuests: ${bookingData.adults} Adult(s), ${bookingData.children} Child(ren)\nRooms: ${bookingData.rooms_count}\nSpecial Requests: ${bookingData.special_requests || 'None'}`;
  
  const whatsappMsg = `Hello LE-VOYAGE Resort,\n\nI would like to make a booking enquiry.\n\nGuest Name: ${bookingData.guest_name}\nPhone: ${bookingData.phone}\nEmail: ${bookingData.email}\n\nCheck-in: ${bookingData.check_in}\nCheck-out: ${bookingData.check_out}\n\nAdults: ${bookingData.adults}\nChildren: ${bookingData.children}\nRooms: ${bookingData.rooms_count}\nPreferred Room: ${bookingData.room_type}\n\nSpecial Requests:\n${bookingData.special_requests || 'None'}\n\nPlease confirm availability and provide the next steps.\n\nThank you.`;

  return {
    ...bookingData,
    id: Date.now(),
    status: 'pending',
    mailto_url: getEmailMailtoLink(emailSubject, emailBody),
    whatsapp_url: getWhatsAppLink(whatsappMsg)
  };
}

export async function createEnquiry(enquiryData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  type?: string;
}) {
  const emailSubject = `LE-VOYAGE Resort General Enquiry: ${enquiryData.subject || 'Guest Message'}`;
  const emailBody = `Name: ${enquiryData.name}\nEmail: ${enquiryData.email}\nPhone: ${enquiryData.phone || 'N/A'}\nSubject: ${enquiryData.subject || 'General Enquiry'}\nMessage:\n${enquiryData.message}`;
  
  const whatsappMsg = `Hello LE-VOYAGE Resort,\n\nI have a general enquiry.\n\nName: ${enquiryData.name}\nPhone: ${enquiryData.phone || 'N/A'}\nEmail: ${enquiryData.email}\n\nSubject:\n${enquiryData.subject || 'General Enquiry'}\n\nMessage:\n${enquiryData.message}\n\nThank you.`;

  return {
    ...enquiryData,
    id: Date.now(),
    status: 'new',
    mailto_url: getEmailMailtoLink(emailSubject, emailBody),
    whatsapp_url: getWhatsAppLink(whatsappMsg)
  };
}

export async function createConferenceEnquiry(conferenceData: {
  organization?: string;
  contact_name: string;
  phone: string;
  email: string;
  event_type: string;
  event_date: string;
  attendees: number;
  required_services?: string;
  message?: string;
}) {
  const emailSubject = `LE-VOYAGE Resort Conference Quote Request - ${conferenceData.event_type}`;
  const emailBody = `Contact Name: ${conferenceData.contact_name}\nOrganization: ${conferenceData.organization || 'N/A'}\nEmail: ${conferenceData.email}\nPhone: ${conferenceData.phone}\nEvent Type: ${conferenceData.event_type}\nEvent Date: ${conferenceData.event_date}\nAttendees: ${conferenceData.attendees}\nRequirements: ${conferenceData.message || 'None'}`;
  
  const whatsappMsg = `Hello LE-VOYAGE Resort,\n\nI would like to enquire about your conference/event facilities.\n\nName: ${conferenceData.contact_name}\nOrganization: ${conferenceData.organization || 'N/A'}\nPhone: ${conferenceData.phone}\nEmail: ${conferenceData.email}\n\nEvent Type: ${conferenceData.event_type}\nEvent Date: ${conferenceData.event_date}\nExpected Guests: ${conferenceData.attendees}\n\nRequirements:\n${conferenceData.message || 'None'}\n\nPlease provide availability and pricing information.\n\nThank you.`;

  return {
    ...conferenceData,
    id: Date.now(),
    status: 'new',
    mailto_url: getEmailMailtoLink(emailSubject, emailBody),
    whatsapp_url: getWhatsAppLink(whatsappMsg)
  };
}
