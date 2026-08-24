import Link from 'next/link';
import { Waves, Trees, Sun, Clock, ArrowRight } from 'lucide-react';

export default function FacilitiesSection() {
  const facilities = [
    {
      title: 'Swimming Pool & Sun Deck',
      hours: '07:00 AM – 06:30 PM',
      icon: Waves,
      image: '/leavoyage-images/swimming%20pool.jpeg',
      description: 'Crystal-clear outdoor pool with dedicated kids paddling area, comfortable poolside loungers, and refreshing towel service.',
    },
    {
      title: 'Tropical Manicured Lawns',
      hours: 'Open Daily',
      icon: Trees,
      image: '/leavoyage-images/gardens.jpeg',
      description: 'Expansive verdant gardens ideal for tranquil morning walks, photography, outdoor team building, and wedding receptions.',
    },
    {
      title: 'Outdoor Lounge & Fire Pit',
      hours: '05:00 PM – 11:00 PM',
      icon: Sun,
      image: '/leavoyage-images/gardens%20(3).jpeg',
      description: 'Cosy evening gathering spots under the star-lit Kitale sky, featuring warm bonfire setups and relaxing music.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-resort-600 block mb-2">
              Leisure & Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Unwind & Rejuvenate in Kitale
            </h2>
          </div>
          <Link
            href="/facilities"
            className="mt-4 md:mt-0 text-resort-600 hover:text-resort-800 font-semibold text-sm inline-flex items-center gap-1 transition"
          >
            <span>Explore All Resort Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
              >
                {fac.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-resort-100 text-resort-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-resort-500" />
                        {fac.hours}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{fac.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{fac.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
