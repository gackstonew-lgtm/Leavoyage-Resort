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
    name: 'Deluxe Executive Suite',
    slug: 'deluxe-executive-suite',
    short_description: 'Spacious suite with king-size bed, private balcony, and lush garden views.',
    description: 'The Deluxe Executive Suite combines contemporary luxury with serene natural surrounding views. Features a plush king bed, marble bathroom with rain shower, dedicated workspace, and a private balcony overlooking our manicured gardens.',
    price_per_night: 12500,
    capacity: 2,
    bed_type: '1 King Bed',
    room_size: '45 sq.m',
    amenities: ['High-Speed Wi-Fi', 'Balcony', 'Air Conditioning', 'Flat-screen Smart TV', 'Mini Bar', 'Tea/Coffee Maker', 'Work Desk', 'En-suite Bathroom'],
    main_image: '/images/Rooms.jpeg',
    gallery_images: ['/images/Rooms.jpeg', '/images/Rooms (2).jpeg', '/images/accomodation-1.jpeg', '/images/accomodation-2.jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 2,
    name: 'Superior Double Room',
    slug: 'superior-double-room',
    short_description: 'Elegant double room tailored for corporate guests and couples seeking premium relaxation.',
    description: 'Our Superior Double Rooms offer high comfort and sleek design. Includes a plush queen bed, quiet climate control, high-speed fiber internet, and sleek modern decor.',
    price_per_night: 9500,
    capacity: 2,
    bed_type: '1 Queen Bed',
    room_size: '35 sq.m',
    amenities: ['High-Speed Wi-Fi', 'Air Conditioning', '32" Smart TV', 'Work Station', 'Electronic Safe', 'Complimentary Breakfast'],
    main_image: '/images/Rooms (2).jpeg',
    gallery_images: ['/images/Rooms (2).jpeg', '/images/accomodation-2.jpeg', '/images/accomodation-3.jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 3,
    name: 'Family Luxury Cottage',
    slug: 'family-luxury-cottage',
    short_description: 'Self-contained two-bedroom cottage surrounded by Kitale’s greenery.',
    description: 'Ideal for families or groups traveling together. Features two private bedrooms, a comfortable lounge area, private veranda, and direct lawn access.',
    price_per_night: 18000,
    capacity: 4,
    bed_type: '1 King + 2 Twin Beds',
    room_size: '70 sq.m',
    amenities: ['2 Private Bedrooms', 'Living Lounge', 'Private Patio', 'Wi-Fi', '2 Smart TVs', 'Kitchenette', 'Pool Access'],
    main_image: '/images/accomodation-3.jpeg',
    gallery_images: ['/images/accomodation-3.jpeg', '/images/Rooms.jpeg', '/images/accomodation-4.jpeg'],
    featured: 1,
    active: 1
  },
  {
    id: 4,
    name: 'Standard Twin Room',
    slug: 'standard-twin-room',
    short_description: 'Clean, comfortable room with twin beds, perfect for conference delegates and solo travelers.',
    description: 'Designed for convenience and efficiency, featuring two single beds, individual reading lights, ergonomic work desks, and full Wi-Fi coverage.',
    price_per_night: 7500,
    capacity: 2,
    bed_type: '2 Twin Single Beds',
    room_size: '30 sq.m',
    amenities: ['High-Speed Wi-Fi', 'Desk & Chair', 'Hot Shower', 'Flat-screen TV', 'Daily Housekeeping'],
    main_image: '/images/accomodation-4.jpeg',
    gallery_images: ['/images/accomodation-4.jpeg', '/images/accomodation-1.jpeg'],
    featured: 0,
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
  { id: 1, title: 'Outdoor Swimming Pool Deck', category: 'Swimming Pool', image_url: '/images/swimming-pool-1.jpeg', alt_text: 'Le Voyage Resort swimming pool' },
  { id: 2, title: 'Poolside Loungers & Sun Deck', category: 'Swimming Pool', image_url: '/images/swimming-pool-2.jpeg', alt_text: 'Le Voyage Resort swimming pool deck' },
  { id: 3, title: 'Poolside Relaxation Area', category: 'Swimming Pool', image_url: '/images/swimming-pool-3.jpeg', alt_text: 'Le Voyage Resort swimming pool area' },
  { id: 4, title: 'Swimming Pool Oasis', category: 'Swimming Pool', image_url: '/images/swimming-pool-4.jpeg', alt_text: 'Le Voyage Resort swimming pool view' },
  { id: 5, title: 'Main Restaurant Dining Hall', category: 'Dining', image_url: '/images/Dinning.jpeg', alt_text: 'Le Voyage Resort main restaurant dining hall' },
  { id: 6, title: 'Veranda Cocktail Bar & Lounge', category: 'Dining', image_url: '/images/Bar & Lounge.jpeg', alt_text: 'Le Voyage Resort veranda cocktail bar and lounge' },
  { id: 7, title: 'Indoor Cocktail Bar & Lounge', category: 'Dining', image_url: '/images/Bar & Lounge (2).jpeg', alt_text: 'Le Voyage Resort indoor cocktail bar and lounge seating' },
  { id: 8, title: 'Le Voyage Restaurant Dining Area', category: 'Dining', image_url: '/images/dinning-1.jpeg', alt_text: 'Le Voyage Resort dining area' },
  { id: 9, title: 'Resort Dining & Culinary Experience', category: 'Dining', image_url: '/images/dinning-2.jpeg', alt_text: 'Le Voyage Resort dining room' },
  { id: 10, title: 'Signature Cocktail & Drinks Menu', category: 'Dining', image_url: '/images/Bar & Lounge (3).jpeg', alt_text: 'Le Voyage Resort signature drinks and cocktail menu' },
  { id: 11, title: 'Bar Spirits & Liquor Selection', category: 'Dining', image_url: '/images/Bar & Lounge (4).jpeg', alt_text: 'Le Voyage Resort bar spirits and whisky menu' },
  { id: 12, title: 'Beers, Wines & Soft Drinks Menu', category: 'Dining', image_url: '/images/Bar & Lounge (5).jpeg', alt_text: 'Le Voyage Resort beers wines and beverages menu' },
  { id: 13, title: 'Breakfast, Beverages & Snacks Menu', category: 'Dining', image_url: '/images/Dinning (2).jpeg', alt_text: 'Le Voyage Resort breakfast and snacks menu' },
  { id: 14, title: 'Chef Special Platters & Main Menu', category: 'Dining', image_url: '/images/Dining (3).jpeg', alt_text: 'Le Voyage Resort main course and grilled platters menu' },
  { id: 15, title: 'Cottage Walkways & Landscaped Gardens', category: 'Accommodation', image_url: '/images/Rooms.jpeg', alt_text: 'Le Voyage Resort cottage walkways and lush gardens' },
  { id: 16, title: 'Stone Cottage Rooms 06 & 07 Exterior', category: 'Accommodation', image_url: '/images/Rooms (2).jpeg', alt_text: 'Le Voyage Resort stone cottage rooms exterior' },
  { id: 17, title: 'Deluxe Executive Accommodation', category: 'Accommodation', image_url: '/images/accomodation-1.jpeg', alt_text: 'Le Voyage Resort accommodation' },
  { id: 18, title: 'Superior Guest Accommodation', category: 'Accommodation', image_url: '/images/accomodation-2.jpeg', alt_text: 'Le Voyage Resort cottages' },
  { id: 19, title: 'Executive Suite Guest Room', category: 'Rooms', image_url: '/images/accomodation-3.jpeg', alt_text: 'Le Voyage Resort guest room' },
  { id: 20, title: 'Standard Twin Guest Room', category: 'Rooms', image_url: '/images/accomodation-4.jpeg', alt_text: 'Le Voyage Resort guest room interior' },
  { id: 21, title: 'Grand Conference Hall Venue', category: 'Conference', image_url: '/images/conference-1.jpeg', alt_text: 'Le Voyage Resort conference venue' },
  { id: 22, title: 'Executive Seminar Hall', category: 'Conference', image_url: '/images/conference-2.jpeg', alt_text: 'Le Voyage Resort conference hall' },
  { id: 23, title: 'Expansive Lawns & Kids Play Area', category: 'Gardens', image_url: '/images/Gardens.jpeg', alt_text: 'Le Voyage Resort expansive manicured lawns and kids playground' },
  { id: 24, title: 'Recreational Lawns & Bouncing Castle', category: 'Gardens', image_url: '/images/Gardens (2).jpeg', alt_text: 'Le Voyage Resort recreational lawns with bouncing castle' },
  { id: 25, title: 'Outdoor Team Building & Event Lawns', category: 'Gardens', image_url: '/images/Gardens (3).jpeg', alt_text: 'Le Voyage Resort outdoor team building and event lawns' },
  { id: 26, title: 'Tropical Resort Gardens', category: 'Gardens', image_url: '/images/gardens-1.jpeg', alt_text: 'Le Voyage Resort gardens' },
  { id: 27, title: 'Manicured Lawn & Grounds', category: 'Gardens', image_url: '/images/gardens-2.jpeg', alt_text: 'Le Voyage Resort grounds' },
  { id: 28, title: 'Garden Walkways & Trees', category: 'Gardens', image_url: '/images/gardens-3.jpeg', alt_text: 'Le Voyage Resort garden landscape' },
  { id: 29, title: 'Outdoor Event Lawns', category: 'Gardens', image_url: '/images/gardens-4.jpeg', alt_text: 'Le Voyage Resort outdoor grounds' },
  { id: 30, title: 'Resort Flora & Environment', category: 'Gardens', image_url: '/images/gardens-5.jpeg', alt_text: 'Le Voyage Resort garden flora' },
  { id: 31, title: 'Westim Salon & Spa Poolside Building', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA (3).jpeg', alt_text: 'Le Voyage Resort Westim Salon and Spa exterior' },
  { id: 32, title: 'Modern Salon & Barber Stations', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA.jpeg', alt_text: 'Le Voyage Resort salon and barber styling stations' },
  { id: 33, title: 'Salon Beauty & Manicure Stations', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA (2).jpeg', alt_text: 'Le Voyage Resort salon styling and beauty station' },
  { id: 34, title: 'Salon Styling & Grooming Lounge', category: 'Facilities', image_url: '/images/Salon, Kinyozi & SPA (4).jpeg', alt_text: 'Le Voyage Resort salon and grooming lounge' },
  { id: 35, title: 'Private Outdoor Garden Shades & Gazebos', category: 'Facilities', image_url: '/images/Shades.jpeg', alt_text: 'Le Voyage Resort private garden shades and gazebos' },
  { id: 36, title: 'Grand Reception Lobby & Hallway', category: 'Resort', image_url: '/images/Reception.jpeg', alt_text: 'Le Voyage Resort grand reception hallway and lounge' },
  { id: 37, title: '24/7 Front Desk Reception Counter', category: 'Resort', image_url: '/images/Reception (2).jpeg', alt_text: 'Le Voyage Resort 24/7 front desk reception counter' },
  { id: 38, title: 'Main Entrance Gate & Executive Building', category: 'Resort', image_url: '/images/Resort (2).jpeg', alt_text: 'Le Voyage Resort main entrance gate and executive building' },
  { id: 39, title: 'Directional Facility Signage in Gardens', category: 'Resort', image_url: '/images/Resort.jpeg', alt_text: 'Le Voyage Resort directional facility signage' },
  { id: 40, title: 'Kitale Kapenguria Road Highway Signboard', category: 'Resort', image_url: '/images/Resort (3).jpeg', alt_text: 'Le Voyage Resort Kapenguria road directional signboard' }
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
  const emailSubject = `Le Voyage Resort Booking Enquiry - Ref: ${bookingData.reference_no}`;
  const emailBody = `Booking Reference: ${bookingData.reference_no}\nGuest Name: ${bookingData.guest_name}\nEmail: ${bookingData.email}\nPhone: ${bookingData.phone}\nRoom Type: ${bookingData.room_type}\nCheck-in: ${bookingData.check_in}\nCheck-out: ${bookingData.check_out}\nGuests: ${bookingData.adults} Adult(s), ${bookingData.children} Child(ren)\nRooms: ${bookingData.rooms_count}\nSpecial Requests: ${bookingData.special_requests || 'None'}`;
  
  const whatsappMsg = `Hello Le Voyage Resort,\n\nI would like to make a booking enquiry.\n\nGuest Name: ${bookingData.guest_name}\nPhone: ${bookingData.phone}\nEmail: ${bookingData.email}\n\nCheck-in: ${bookingData.check_in}\nCheck-out: ${bookingData.check_out}\n\nAdults: ${bookingData.adults}\nChildren: ${bookingData.children}\nRooms: ${bookingData.rooms_count}\nPreferred Room: ${bookingData.room_type}\n\nSpecial Requests:\n${bookingData.special_requests || 'None'}\n\nPlease confirm availability and provide the next steps.\n\nThank you.`;

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
  const emailSubject = `Le Voyage Resort General Enquiry: ${enquiryData.subject || 'Guest Message'}`;
  const emailBody = `Name: ${enquiryData.name}\nEmail: ${enquiryData.email}\nPhone: ${enquiryData.phone || 'N/A'}\nSubject: ${enquiryData.subject || 'General Enquiry'}\nMessage:\n${enquiryData.message}`;
  
  const whatsappMsg = `Hello Le Voyage Resort,\n\nI have a general enquiry.\n\nName: ${enquiryData.name}\nPhone: ${enquiryData.phone || 'N/A'}\nEmail: ${enquiryData.email}\n\nSubject:\n${enquiryData.subject || 'General Enquiry'}\n\nMessage:\n${enquiryData.message}\n\nThank you.`;

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
  const emailSubject = `Le Voyage Resort Conference Quote Request - ${conferenceData.event_type}`;
  const emailBody = `Contact Name: ${conferenceData.contact_name}\nOrganization: ${conferenceData.organization || 'N/A'}\nEmail: ${conferenceData.email}\nPhone: ${conferenceData.phone}\nEvent Type: ${conferenceData.event_type}\nEvent Date: ${conferenceData.event_date}\nAttendees: ${conferenceData.attendees}\nRequirements: ${conferenceData.message || 'None'}`;
  
  const whatsappMsg = `Hello Le Voyage Resort,\n\nI would like to enquire about your conference/event facilities.\n\nName: ${conferenceData.contact_name}\nOrganization: ${conferenceData.organization || 'N/A'}\nPhone: ${conferenceData.phone}\nEmail: ${conferenceData.email}\n\nEvent Type: ${conferenceData.event_type}\nEvent Date: ${conferenceData.event_date}\nExpected Guests: ${conferenceData.attendees}\n\nRequirements:\n${conferenceData.message || 'None'}\n\nPlease provide availability and pricing information.\n\nThank you.`;

  return {
    ...conferenceData,
    id: Date.now(),
    status: 'new',
    mailto_url: getEmailMailtoLink(emailSubject, emailBody),
    whatsapp_url: getWhatsAppLink(whatsappMsg)
  };
}
