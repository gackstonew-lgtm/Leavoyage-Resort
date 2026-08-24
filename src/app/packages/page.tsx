'use client';

import { useState } from 'react';
import { Tag, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';
import BookingModal from '@/components/booking/BookingModal';

export default function PackagesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const packagesList = [
    {
      title: 'Romantic Couples Weekend Escape',
      price: 'KES 22,000 / couple',
      image: '/images/swimming-pool-4.jpeg',
      alt: 'Le Voyage Resort romantic couples weekend getaway',
      description: 'Escape to Kitale for a 2-night romantic stay in our Executive Suite. Includes welcome sparkling wine, full-board dining, complimentary swimming pool access, and late check-out.',
      terms: 'Valid Friday to Sunday. Advance reservation required.',
      highlights: ['2 Nights Accommodation', 'Full-Board Meals Included', 'Welcome Drinks', 'Pool & Gardens Access'],
    },
    {
      title: 'Full-Day Corporate Conference Package',
      price: 'KES 2,800 / delegate',
      image: '/images/conference-2.jpeg',
      alt: 'Le Voyage Resort corporate conference hall',
      description: 'Comprehensive seminar bundle including air-conditioned hall hire, 10am & 4pm tea breaks with fresh snacks, 3-course buffet lunch, LCD projector, and high-speed Wi-Fi.',
      terms: 'Minimum 15 delegates required.',
      highlights: ['AC Hall Hire', '2 Tea Breaks + Buffet Lunch', 'AV & Projector Included', 'Fiber Wi-Fi'],
    },
    {
      title: 'Garden Wedding & Reception Bundle',
      price: 'Custom Quote Available',
      image: '/images/gardens-3.jpeg',
      alt: 'Le Voyage Resort garden wedding lawn venue',
      description: 'Host your dream outdoor wedding on our lush manicured gardens. Includes manicured lawn venue hire, bridal party dressing room, complimentary honeymoon suite, and dedicated event coordinator.',
      terms: 'Pre-wedding consultation and booking required.',
      highlights: ['Lawn Venue Hire', 'Bridal Dressing Room', 'Honeymoon Suite Night', 'Dedicated Coordinator'],
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Promotions & Special Offers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Resort Packages & Deals
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Discover curated packages designed to offer exceptional value for weekend staycations, corporate seminars, and wedding celebrations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesList.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-56 relative bg-slate-900">
                  <img src={pkg.image} alt={pkg.alt || pkg.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-resort-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {pkg.price}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-serif font-bold text-slate-900">{pkg.title}</h2>
                  <p className="text-slate-600 text-xs leading-relaxed">{pkg.description}</p>

                  <div className="space-y-1.5 pt-2">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-resort-600" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-100">
                    *{pkg.terms}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 bg-resort-600 hover:bg-resort-700 text-white font-semibold py-2.5 rounded-lg text-xs shadow transition text-center"
                >
                  Book Package
                </button>
                <a
                  href={getWhatsAppLink(`Hello Le Voyage Resort, I want to enquiry about the ${pkg.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center transition"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
