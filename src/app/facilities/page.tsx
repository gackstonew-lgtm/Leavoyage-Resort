import { Waves, Trees, Sun, Coffee, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';

export default function FacilitiesPage() {
  const facilitiesList = [
    {
      title: 'Outdoor Swimming Pool & Sun Lounge',
      hours: '07:00 AM – 06:30 PM',
      pricing: 'Free for Resident Guests | Day Pass KES 800 (Adults) / KES 500 (Children)',
      image: '/images/swimming-pool-1.jpeg',
      alt: 'Le Voyage Resort outdoor swimming pool and sun deck lounge',
      description: 'Relax in our pristine outdoor swimming pool featuring crystal-clear water, sun deck loungers, fresh towel service, and poolside beverage service from the main bar.',
    },
    {
      title: 'Westim Salon, Kinyozi & Spa',
      hours: '08:00 AM – 08:00 PM',
      pricing: 'Executive Haircuts, Styling, Manicure, Pedicure & Massage Services',
      image: '/images/Salon, Kinyozi & SPA (4).jpeg',
      alt: 'Le Voyage Resort Westim Salon, Kinyozi and Spa facilities',
      description: 'Rejuvenate your senses at our state-of-the-art beauty salon, barber shop (kinyozi), and spa. Professional hair styling, grooming, facial treatments, and massage therapies provided by certified practitioners.',
    },
    {
      title: 'Private Garden Shades & Gazebos',
      hours: '08:00 AM – 10:00 PM',
      pricing: 'Complimentary for Dining & Resident Guests | Private Booking Available',
      image: '/images/Shades.jpeg',
      alt: 'Le Voyage Resort private garden shades and gazebos in Kitale',
      description: 'Enjoy secluded outdoor dining and relaxation in our named garden shades (Cherengany, Makutano, Homa Bay). Immersed in lush green surroundings, perfect for private meetings, intimate family meals, and small group get-togethers.',
    },
    {
      title: 'Manicured Tropical Lawns & Kids Play Area',
      hours: 'Open 24 Hours for Guests',
      pricing: 'Complimentary Access | Event Garden Hire Upon Request',
      image: '/images/Gardens.jpeg',
      alt: 'Le Voyage Resort manicured tropical lawns and kids play area in Kitale',
      description: 'Surround yourself with mature trees, blooming tropical flora, vibrant lawns, and a dedicated kids bouncing castle and play area. Ideal for morning meditation, garden weddings, outdoor team building, and romantic strolls.',
    },
    {
      title: 'Veranda Cocktail Bar & Fireside Lounge',
      hours: '12:00 PM – 11:00 PM',
      pricing: 'Signature Cocktails, Fine Wines, Chilled Beverages & Grilled Bites',
      image: '/images/Bar & Lounge.jpeg',
      alt: 'Le Voyage Resort veranda cocktail bar and fireside lounge',
      description: 'Unwind at our open-air veranda bar and cozy indoor lounge. Enjoy handcrafted signature cocktails, cold beers, premium spirits, and evening fireside ambiance under the Kitale starlit sky.',
    },
    {
      title: '24/7 Front Desk & Reception Lounge',
      hours: 'Open 24/7 All Week',
      pricing: 'Concierge Assistance, Check-In/Check-Out & Travel Inquiries',
      image: '/images/Reception.jpeg',
      alt: 'Le Voyage Resort grand reception and welcome lounge',
      description: 'Our hospitable reception team is available around the clock to ensure a seamless arrival, comfortable stay, luggage handling, and personalized guest assistance.',
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Leisure & Outdoor Living
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Resort Facilities & Amenities
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Immerse yourself in serenity with our swimming pool, expansive gardens, outdoor lounge areas, and recreational amenities.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {facilitiesList.map((fac, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 h-64 md:h-auto">
              <img src={fac.image} alt={fac.alt || fac.title} className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-resort-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {fac.hours}
                </span>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">{fac.title}</h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{fac.description}</p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-medium text-slate-700">
                  {fac.pricing}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={getWhatsAppLink(`Hello Le Voyage Resort, I would like to enquire about ${fac.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
