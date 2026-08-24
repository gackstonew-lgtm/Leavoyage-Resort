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
      title: 'Manicured Tropical Lawns & Event Gardens',
      hours: 'Open 24 Hours for Guests',
      pricing: 'Garden Hire for Events Available Upon Quote',
      image: '/images/gardens-2.jpeg',
      alt: 'Le Voyage Resort manicured tropical lawns and event gardens',
      description: 'Surround yourself with mature trees, blooming tropical flora, and immaculate lawns. Perfect for morning meditation, garden weddings, outdoor team building, and romantic strolls.',
    },
    {
      title: 'Resort Outdoor Fireside Lounge',
      hours: '05:30 PM – 11:00 PM',
      pricing: 'Complimentary Access for Guests',
      image: '/images/swimming-pool-3.jpeg',
      alt: 'Le Voyage Resort outdoor fireside lounge and relaxation area',
      description: 'Gather around our cozy outdoor fire pit as night falls over Kitale. Enjoy warm bonfires, ambient lighting, wood-fired snacks, and evening cocktails.',
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
