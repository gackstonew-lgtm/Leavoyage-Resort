'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Tag,
  CheckCircle,
  MessageCircle,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  Info,
  Users,
  Check,
  HelpCircle,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';
import { RESORT_PRICING_DATA, PRICING_CATEGORIES, PricingItem } from '@/data/pricingData';
import BookingModal from '@/components/booking/BookingModal';

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomName, setSelectedRoomName] = useState('Single Cottage');

  const filteredItems = activeCategory === 'all'
    ? RESORT_PRICING_DATA
    : RESORT_PRICING_DATA.filter((item) => item.category === activeCategory);

  const handleBookRoom = (roomName?: string) => {
    if (roomName) {
      setSelectedRoomName(roomName);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Transparent Hospitality Rates
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Official Pricing & Rates
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore official rates for accommodation, state-of-the-art conference halls, outdoor event grounds venue hire, fine dining, and leisure facilities at LE-VOYAGE Resort Kitale.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-resort-300">
            <span className="flex items-center gap-1.5 bg-resort-900/80 px-3 py-1.5 rounded-full border border-resort-700/60">
              <ShieldCheck className="w-3.5 h-3.5 text-resort-400" />
              Official Published Rates
            </span>
            <span className="flex items-center gap-1.5 bg-resort-900/80 px-3 py-1.5 rounded-full border border-resort-700/60">
              <CheckCircle className="w-3.5 h-3.5 text-resort-400" />
              No Hidden Charges
            </span>
            <span className="flex items-center gap-1.5 bg-resort-900/80 px-3 py-1.5 rounded-full border border-resort-700/60">
              <Clock className="w-3.5 h-3.5 text-resort-400" />
              Direct Front-Desk Booking
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Core Venue & Conference Rates Spotlight Box */}
        <div className="bg-gradient-to-r from-resort-900 to-resort-950 rounded-3xl p-6 sm:p-8 text-white border border-resort-700 shadow-xl">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-resort-400 block mb-1">
              Official Venue & Event Hire
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Conference Halls & Outdoor Grounds Rates
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Official venue hire pricing for social celebrations, community events, and corporate conferences at LE-VOYAGE Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conference Small */}
            <div className="bg-resort-900/90 rounded-2xl p-5 border border-resort-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-resort-300 uppercase tracking-wider block mb-1">
                  Corporate & Seminars
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  Conference Room
                </h3>
                <p className="text-xs text-resort-200 font-medium mb-3">50 People & Below</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  KES 5,000 <span className="text-xs font-normal text-slate-300">/ venue hire</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Professional conference room venue hire based on attendance of 50 people and below. Ideal for focused workshops, board meetings, and strategy sessions.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-resort-800">
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to book a Conference Room for 50 People & Below (KES 5,000 venue hire).')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-resort-600 hover:bg-resort-500 text-white py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Request Conference Booking</span>
                </a>
              </div>
            </div>

            {/* Conference Large */}
            <div className="bg-resort-900/90 rounded-2xl p-5 border border-resort-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold text-resort-300 uppercase tracking-wider block mb-1">
                  Conventions & Gala
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  Conference Room
                </h3>
                <p className="text-xs text-resort-200 font-medium mb-3">150 People & Above</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  KES 10,000 <span className="text-xs font-normal text-slate-300">/ venue hire</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Spacious conference hall venue hire for larger assemblies of 150 people and above. Equipped for grand conventions, symposiums, and corporate dinners.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-resort-800">
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to book a Conference Room for 150 People & Above (KES 10,000 venue hire).')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-resort-600 hover:bg-resort-500 text-white py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Request Conference Booking</span>
                </a>
              </div>
            </div>

            {/* Grounds Venue Hire */}
            <div className="bg-resort-800/90 rounded-2xl p-5 border border-resort-600 flex flex-col justify-between relative shadow-lg">
              <div className="absolute -top-3 right-4 bg-resort-400 text-resort-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="text-[11px] font-semibold text-resort-300 uppercase tracking-wider block mb-1">
                  Social & Outdoor Events
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  Grounds Venue Hire
                </h3>
                <p className="text-xs text-resort-200 font-medium mb-3">Weddings, Graduations & Celebrations</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  KES 10,000 <span className="text-xs font-normal text-slate-300">/ venue hire</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Suitable for weddings, graduations, receptions, celebrations, corporate events, and other approved social gatherings on our lush manicured resort lawns.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-resort-700">
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to enquire about Grounds Venue Hire (KES 10,000) for our upcoming event.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Request Grounds Venue</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-resort-950/70 border border-resort-800/80 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-resort-400 shrink-0 mt-0.5" />
            <span>
              <strong>Important Notice:</strong> Venue hire rates (KES 5,000 / KES 10,000) cover venue space allocation. They do not automatically include catering, decoration, entertainment, accommodation, or audio-visual equipment unless booked as part of our full delegate or wedding packages.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
          {PRICING_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  isActive
                    ? 'bg-resort-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-card hover:shadow-xl ${
                item.featured ? 'border-resort-400 ring-1 ring-resort-400/30' : 'border-slate-200'
              }`}
            >
              <div>
                {/* Image if available */}
                {item.image && (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-resort-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-resort-700">
                      {item.categoryLabel}
                    </div>
                    {item.featured && (
                      <div className="absolute top-3 right-3 bg-resort-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Recommended
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Category & Title */}
                  <div className="mb-2">
                    <span className="text-[11px] font-semibold text-resort-600 uppercase tracking-wider block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-3 px-3.5 bg-slate-50 rounded-xl border border-slate-100 my-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        {item.priceDisplay}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        / {item.pricingUnit}
                      </span>
                    </div>
                    {item.capacityOrCondition && (
                      <p className="text-[11px] text-slate-600 font-medium mt-1">
                        {item.capacityOrCondition}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Inclusions */}
                  {item.inclusions && item.inclusions.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Includes:
                      </span>
                      {item.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Exclusions Notice */}
                  {item.exclusionsNotice && (
                    <p className="text-[11px] text-amber-700 bg-amber-50/80 p-2.5 rounded-lg mt-3 border border-amber-200/60 leading-relaxed">
                      *{item.exclusionsNotice}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                {item.ctaType === 'booking-modal' && (
                  <div className="flex gap-2 pt-3">
                    <button
                      onClick={() => handleBookRoom(item.ctaTarget)}
                      className="flex-1 bg-resort-600 hover:bg-resort-700 text-white font-semibold py-2.5 rounded-lg text-xs shadow transition flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{item.ctaLabel}</span>
                    </button>
                    <a
                      href={getWhatsAppLink(`Hello LE-VOYAGE Resort, I would like to enquire about reserving the ${item.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center transition"
                      aria-label="Enquire via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {item.ctaType === 'whatsapp' && (
                  <div className="pt-3">
                    <a
                      href={getWhatsAppLink(item.ctaTarget || `Hello LE-VOYAGE Resort, I would like to enquire about ${item.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-lg text-xs shadow transition flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{item.ctaLabel}</span>
                    </a>
                  </div>
                )}

                {item.ctaType === 'quote' && (
                  <div className="flex gap-2 pt-3">
                    <Link
                      href="/conferences"
                      className="flex-1 bg-resort-600 hover:bg-resort-700 text-white font-semibold py-2.5 rounded-lg text-xs shadow transition flex items-center justify-center gap-1.5"
                    >
                      <span>{item.ctaLabel}</span>
                    </Link>
                    <a
                      href={getWhatsAppLink(item.ctaTarget || `Hello LE-VOYAGE Resort, I would like to request a quote for ${item.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center transition"
                      aria-label="Enquire via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {item.ctaType === 'link' && (
                  <div className="pt-3">
                    <Link
                      href={item.ctaTarget || '/dining'}
                      className="w-full bg-resort-950 hover:bg-resort-900 text-white font-semibold py-2.5 px-4 rounded-lg text-xs shadow transition flex items-center justify-center gap-2 border border-resort-800"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Rates Reference Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-resort-600 block mb-1">
              At-A-Glance Summary
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Quick Reference Rates Matrix
            </h2>
            <p className="text-slate-600 text-xs mt-1">
              Summary of official rates across all resort departments. All rates are in Kenya Shillings (KES).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-200 text-slate-800 uppercase tracking-wider text-[11px] font-bold">
                  <th className="py-3 px-4">Service / Product</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Applicable Capacity / Condition</th>
                  <th className="py-3 px-4">Official Rate (KES)</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Grounds / Outdoor Event Venue</td>
                  <td className="py-3 px-4">Conferences & Venues</td>
                  <td className="py-3 px-4">Weddings, graduations, social events & ceremonies</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 10,000</td>
                  <td className="py-3 px-4 text-right">
                    <a
                      href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to book Grounds Venue Hire (KES 10,000).')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      Enquire
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Conference Room (50 & Below)</td>
                  <td className="py-3 px-4">Conferences & Venues</td>
                  <td className="py-3 px-4">50 People & Below Attendance</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 5,000</td>
                  <td className="py-3 px-4 text-right">
                    <Link href="/conferences" className="text-resort-600 hover:text-resort-800 font-semibold">
                      Book Hall
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Conference Room (150 & Above)</td>
                  <td className="py-3 px-4">Conferences & Venues</td>
                  <td className="py-3 px-4">150 People & Above Attendance</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 10,000</td>
                  <td className="py-3 px-4 text-right">
                    <Link href="/conferences" className="text-resort-600 hover:text-resort-800 font-semibold">
                      Book Hall
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Full-Day Delegate Package</td>
                  <td className="py-3 px-4">Conferences & Venues</td>
                  <td className="py-3 px-4">Includes Hall, 2 Tea Breaks & 3-Course Buffet Lunch</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 2,800 / delegate</td>
                  <td className="py-3 px-4 text-right">
                    <Link href="/conferences" className="text-resort-600 hover:text-resort-800 font-semibold">
                      Details
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Half-Day Delegate Package</td>
                  <td className="py-3 px-4">Conferences & Venues</td>
                  <td className="py-3 px-4">Includes 4-hr Hall, 1 Tea Break & Lunch</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 2,200 / delegate</td>
                  <td className="py-3 px-4 text-right">
                    <Link href="/conferences" className="text-resort-600 hover:text-resort-800 font-semibold">
                      Details
                    </Link>
                  </td>
                </tr>
                                <tr className="hover:bg-slate-50/70">
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
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Swimming Pool Day Pass</td>
                  <td className="py-3 px-4">Facilities & Leisure</td>
                  <td className="py-3 px-4">Resident Free • Visiting Guests</td>
                  <td className="py-3 px-4 font-bold text-resort-700">KES 800 (Adult) / KES 500 (Child)</td>
                  <td className="py-3 px-4 text-right">
                    <Link href="/facilities" className="text-resort-600 hover:text-resort-800 font-semibold">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Dining & Restaurant Menu</td>
                  <td className="py-3 px-4">Dining</td>
                  <td className="py-3 px-4">Breakfast KES 500–1,000 • Platters from KES 1,800</td>
                  <td className="py-3 px-4 font-bold text-resort-700">Per Dining Menu</td>
                  <td className="py-3 px-4 text-right">
                    <Link href="/dining-menu" className="text-resort-600 hover:text-resort-800 font-semibold">
                      Menu
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Westim Salon, Kinyozi & Spa</td>
                  <td className="py-3 px-4">Facilities & Leisure</td>
                  <td className="py-3 px-4">Haircuts, Beauty, Styling & Massage</td>
                  <td className="py-3 px-4 text-slate-600 italic">Contact Resort for Rates</td>
                  <td className="py-3 px-4 text-right">
                    <a
                      href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to request rates for Westim Salon and Spa.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      Enquire
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Policies & Transparent Guidelines */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-resort-600 block mb-1">
              Guest Policies & FAQ
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Pricing Guidelines & Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <h3 className="font-serif font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-resort-600" />
                Check-In & Check-Out
              </h3>
              <p>
                Standard room check-in time is from <strong>12:00 PM</strong> and check-out is by <strong>11:00 AM</strong>. Early check-in or late check-out is subject to room availability upon request.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <h3 className="font-serif font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-resort-600" />
                Venue Hire Terms
              </h3>
              <p>
                Grounds venue hire (KES 10,000) and conference room hire (KES 5,000 / KES 10,000) secure your designated event space. Full catering, PA systems, and decorations are custom-quoted based on attendance.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <h3 className="font-serif font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-resort-600" />
                Reservations & Payment
              </h3>
              <p>
                Advance reservations are recommended for accommodation, weddings, and conferences. We accept M-Pesa, bank transfers, and major credit cards. Direct confirmation via our 24/7 front desk.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-resort-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-resort-800">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Ready to Book or Need a Custom Quote?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our hospitable events and reservations team is available 24/7 to answer questions, check availability, or prepare a bespoke quotation for your stay or function.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <button
              onClick={() => handleBookRoom()}
              className="w-full sm:w-auto bg-resort-600 hover:bg-resort-500 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Accommodation</span>
            </button>
            <a
              href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to enquire about your pricing and availability.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Reservations</span>
            </a>
            <a
              href={`tel:${RESORT_INFO.contact.phoneRaw}`}
              className="w-full sm:w-auto bg-resort-900 hover:bg-resort-800 text-slate-200 font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-resort-700 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-resort-400" />
              <span>Call: {RESORT_INFO.contact.phone}</span>
            </a>
            <a
              href={`tel:${RESORT_INFO.contact.additionalPhoneRaw}`}
              className="w-full sm:w-auto bg-resort-900 hover:bg-resort-800 text-slate-200 font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm border border-resort-700 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-resort-400" />
              <span>Call: {RESORT_INFO.contact.additionalPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedRoom={selectedRoomName}
      />
    </div>
  );
}
