const fs = require('fs');
const path = require('path');

function updateDbTs() {
  const file = 'src/lib/db.ts';
  let content = fs.readFileSync(file, 'utf8');
  
  const newRooms = `export const staticRooms: RoomRecord[] = [
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
    main_image: '/images/Rooms.jpeg',
    gallery_images: ['/images/Rooms.jpeg', '/images/accomodation-1.jpeg'],
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
    main_image: '/images/Rooms (2).jpeg',
    gallery_images: ['/images/Rooms (2).jpeg', '/images/accomodation-2.jpeg'],
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
    main_image: '/images/accomodation-4.jpeg',
    gallery_images: ['/images/accomodation-4.jpeg', '/images/accomodation-1.jpeg'],
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
    main_image: '/images/accomodation-3.jpeg',
    gallery_images: ['/images/accomodation-3.jpeg', '/images/Rooms.jpeg'],
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
    main_image: '/images/Rooms.jpeg',
    gallery_images: ['/images/Rooms.jpeg'],
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
    main_image: '/images/Rooms (2).jpeg',
    gallery_images: ['/images/Rooms (2).jpeg'],
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
];`;

  content = content.replace(/export const staticRooms: RoomRecord\[\] = \[[\s\S]*?\}\n\];/, newRooms);
  fs.writeFileSync(file, content);
  console.log('Updated db.ts');
}

function updatePricingData() {
  const file = 'src/data/pricingData.ts';
  let content = fs.readFileSync(file, 'utf8');

  const newAcc = `  // --- ACCOMMODATION ---
  {
    id: 'room-single-cottage',
    name: 'Single Cottage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Cozy single cottage surrounded by nature.',
    description: 'Perfect for solo travelers seeking privacy and tranquility in a standalone cottage setup.',
    priceDisplay: 'KES 3,500',
    priceNumeric: 3500,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: '1 Guest • 1 Single Bed',
    inclusions: ['High-Speed Wi-Fi', 'Hot Shower', 'Flat-screen TV', 'Daily Housekeeping'],
    image: '/images/Rooms.jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Cottage',
    ctaTarget: 'Single Cottage',
    featured: true,
  },
  {
    id: 'room-standard-cottage',
    name: 'Standard Cottage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Comfortable standard cottage for couples or solo travelers.',
    description: 'A beautiful standard cottage offering extra space and comfort with serene garden views.',
    priceDisplay: 'KES 4,500',
    priceNumeric: 4500,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: 'Up to 2 Guests • 1 Double Bed',
    inclusions: ['High-Speed Wi-Fi', 'Hot Shower', 'Flat-screen TV', 'Daily Housekeeping'],
    image: '/images/Rooms (2).jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Cottage',
    ctaTarget: 'Standard Cottage',
  },
  {
    id: 'room-twin-bed-cottage',
    name: 'Twin-Bed Cottage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Spacious cottage with two separate beds.',
    description: 'Ideal for friends or colleagues sharing a room while enjoying the private cottage experience.',
    priceDisplay: 'KES 6,000',
    priceNumeric: 6000,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: 'Up to 2 Guests • 2 Twin Beds',
    inclusions: ['High-Speed Wi-Fi', 'Hot Shower', 'Flat-screen TV', 'Desk & Chair'],
    image: '/images/accomodation-4.jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Cottage',
    ctaTarget: 'Twin-Bed Cottage',
  },
  {
    id: 'room-family-cottage',
    name: 'Family Cottage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Spacious family cottage for groups and families.',
    description: 'A large cottage designed for families, offering ample space and comfort for everyone.',
    priceDisplay: 'KES 9,000',
    priceNumeric: 9000,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: 'Up to 4 Guests • 1 Double + 2 Twin Beds',
    inclusions: ['High-Speed Wi-Fi', 'Hot Shower', 'Living Area', 'Flat-screen TV'],
    image: '/images/accomodation-3.jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Cottage',
    ctaTarget: 'Family Cottage',
    featured: true,
  },
  {
    id: 'room-single-etage',
    name: 'Single Étage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Comfortable single room in the étage section.',
    description: 'A cozy and affordable single room located in our multi-story building.',
    priceDisplay: 'KES 2,500',
    priceNumeric: 2500,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: '1 Guest • 1 Single Bed',
    inclusions: ['High-Speed Wi-Fi', 'Hot Shower', 'Flat-screen TV'],
    image: '/images/Rooms.jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Room',
    ctaTarget: 'Single Étage',
  },
  {
    id: 'room-standard-etage',
    name: 'Standard Étage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Standard double room in the étage section.',
    description: 'Comfortable accommodation in the main building, suitable for couples.',
    priceDisplay: 'KES 3,500',
    priceNumeric: 3500,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: 'Up to 2 Guests • 1 Double Bed',
    inclusions: ['High-Speed Wi-Fi', 'Hot Shower', 'Flat-screen TV'],
    image: '/images/Rooms (2).jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Room',
    ctaTarget: 'Standard Étage',
  },
  {
    id: 'room-deluxe-etage',
    name: 'Deluxe Étage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Spacious deluxe room with premium amenities.',
    description: 'Elevated comfort and space in our deluxe étage rooms, offering superior relaxation.',
    priceDisplay: 'KES 5,000',
    priceNumeric: 5000,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: 'Up to 2 Guests • 1 Queen Bed',
    inclusions: ['High-Speed Wi-Fi', 'Air Conditioning', 'Flat-screen TV', 'Balcony'],
    image: '/images/accomodation-1.jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Room',
    ctaTarget: 'Deluxe Étage',
  },
  {
    id: 'room-bnb-etage',
    name: 'BnB Étage',
    category: 'accommodation',
    categoryLabel: 'Accommodation',
    shortDescription: 'Premium Bed and Breakfast suite.',
    description: 'Our top-tier étage accommodation featuring expanded space and premium breakfast inclusions.',
    priceDisplay: 'KES 10,000',
    priceNumeric: 10000,
    currency: 'KES',
    pricingUnit: 'per night',
    capacityOrCondition: 'Up to 2 Guests • 1 King Bed',
    inclusions: ['High-Speed Wi-Fi', 'Air Conditioning', 'Smart TV', 'Premium Breakfast'],
    image: '/images/accomodation-2.jpeg',
    ctaType: 'booking-modal',
    ctaLabel: 'Reserve Room',
    ctaTarget: 'BnB Étage',
    featured: true,
  },

  // --- CONFERENCES & VENUES ---`;

  content = content.replace(/\/\/ --- ACCOMMODATION ---[\s\S]*?\/\/ --- CONFERENCES & VENUES ---/, newAcc);
  fs.writeFileSync(file, content);
  console.log('Updated pricingData.ts');
}

function updatePricingPage() {
  const file = 'src/app/pricing/page.tsx';
  let content = fs.readFileSync(file, 'utf8');

  const newRows = `                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Single Cottage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">1 Guest, Single Bed</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 3,500 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Single Cottage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Standard Cottage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">2 Guests, Double Bed</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 4,500 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Standard Cottage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Twin-Bed Cottage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">2 Guests, Twin Beds</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 6,000 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Twin-Bed Cottage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Family Cottage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">4 Guests, Double + 2 Twins</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 9,000 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Family Cottage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Single Étage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">1 Guest, Single Bed</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 2,500 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Single Étage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Standard Étage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">2 Guests, Double Bed</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 3,500 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Standard Étage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Deluxe Étage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">2 Guests, Queen Bed</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 5,000 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('Deluxe Étage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">BnB Étage</td>
                  <td className="py-3 px-4">Accommodation</td>
                  <td className="py-3 px-4">2 Guests, King Bed</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 10,000 / night</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleBookRoom('BnB Étage')} className="text-resort-600 hover:text-resort-800 font-semibold">
                      Reserve
                    </button>
                  </td>
                </tr>`;

  // It's tricky to replace just the 4 table rows, let's look for Deluxe Executive Suite and end after Standard Twin Room row.
  const regex = /<tr className="hover:bg-slate-50\/70">\s*<td className="py-3 px-4 font-semibold text-slate-900">Deluxe Executive Suite<\/td>[\s\S]*?<td className="py-3 px-4 font-semibold text-slate-900">Standard Twin Room<\/td>[\s\S]*?<\/tr>/;
  content = content.replace(regex, newRows);
  content = content.replace(/useState\('Deluxe Executive Suite'\)/g, "useState('Single Cottage')");
  fs.writeFileSync(file, content);
  console.log('Updated pricing page');
}

function updateBookingModal() {
  const file = 'src/components/booking/BookingModal.tsx';
  let content = fs.readFileSync(file, 'utf8');

  const newOptions = `                  <option value="Single Cottage">Single Cottage (KES 3,500/night)</option>
                  <option value="Standard Cottage">Standard Cottage (KES 4,500/night)</option>
                  <option value="Twin-Bed Cottage">Twin-Bed Cottage (KES 6,000/night)</option>
                  <option value="Family Cottage">Family Cottage (KES 9,000/night)</option>
                  <option value="Single Étage">Single Étage (KES 2,500/night)</option>
                  <option value="Standard Étage">Standard Étage (KES 3,500/night)</option>
                  <option value="Deluxe Étage">Deluxe Étage (KES 5,000/night)</option>
                  <option value="BnB Étage">BnB Étage (KES 10,000/night)</option>`;

  content = content.replace(/<option value="Deluxe Executive Suite">.*?<\/option>\s*<option value="Superior Double Room">.*?<\/option>\s*<option value="Family Luxury Cottage">.*?<\/option>\s*<option value="Standard Twin Room">.*?<\/option>/, newOptions);
  content = content.replace(/preselectedRoom \|\| 'Deluxe Executive Suite'/, "preselectedRoom || 'Single Cottage'");
  fs.writeFileSync(file, content);
  console.log('Updated BookingModal');
}

function updateAvailabilityBar() {
  const file = 'src/components/booking/BookingAvailabilityBar.tsx';
  let content = fs.readFileSync(file, 'utf8');

  const newOptions = `              <option value="Single Cottage">Single Cottage</option>
              <option value="Standard Cottage">Standard Cottage</option>
              <option value="Twin-Bed Cottage">Twin-Bed Cottage</option>
              <option value="Family Cottage">Family Cottage</option>
              <option value="Single Étage">Single Étage</option>
              <option value="Standard Étage">Standard Étage</option>
              <option value="Deluxe Étage">Deluxe Étage</option>
              <option value="BnB Étage">BnB Étage</option>`;

  content = content.replace(/<option value="Deluxe Executive Suite">.*?<\/option>\s*<option value="Superior Double Room">.*?<\/option>\s*<option value="Family Luxury Cottage">.*?<\/option>\s*<option value="Standard Twin Room">.*?<\/option>/, newOptions);
  content = content.replace(/useState\('Deluxe Executive Suite'\)/g, "useState('Single Cottage')");
  fs.writeFileSync(file, content);
  console.log('Updated AvailabilityBar');
}

try {
  updateDbTs();
  updatePricingData();
  updatePricingPage();
  updateBookingModal();
  updateAvailabilityBar();
} catch (e) {
  console.error(e);
}
