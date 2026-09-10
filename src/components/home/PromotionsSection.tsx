'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Tag, Calendar, ChevronRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';
import BookingModal from '../booking/BookingModal';

interface Promotion {
  id: number;
  title: string;
  slug: string;
  description: string;
  price_text: string;
  image: string;
  terms: string;
}

export default function PromotionsSection() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    async function fetchPromos() {
      try {
        const res = await fetch('/api/promotions');
        const data = await res.json();
        if (data.success) {
          setPromotions(data.data);
        }
      } catch (e) {
        console.error('Failed to load promotions', e);
      }
    }
    fetchPromos();
  }, []);

  return (
    <section className="py-20 bg-resort-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400">
            Exclusive Packages & Offers
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Special Resort Promotions
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Enjoy extraordinary savings on accommodation, corporate seminars, and celebration packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-resort-900/90 rounded-2xl overflow-hidden border border-resort-800 hover:border-resort-600 transition duration-300 flex flex-col group shadow-lg"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-resort-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {promo.price_text}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{promo.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">{promo.description}</p>
                  <p className="text-[11px] text-resort-300 font-medium italic border-t border-resort-800/80 pt-2">
                    *{promo.terms}
                  </p>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="flex-1 bg-resort-600 hover:bg-resort-500 text-white text-xs font-semibold py-2.5 rounded-lg transition text-center"
                  >
                    Book Package
                  </button>
                  <a
                    href={getWhatsAppLink(`Hello LE-VOYAGE Resort, I want to enquire about the "${promo.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
