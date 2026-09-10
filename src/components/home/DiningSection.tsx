import Link from 'next/link';
import { Utensils, Coffee, Wine, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';

export default function DiningSection() {
  const diningHighlights = [
    {
      title: 'Buffet & À la Carte Restaurant',
      time: '06:00 AM – 10:00 PM',
      icon: Utensils,
      description: 'Savor rich African fusion culinary creations, fresh local Kitale produce, and continental specialties prepared by our master chefs.',
      image: '/images/Dinning.jpeg',
    },
    {
      title: 'Coffee & Breakfast Lounge',
      time: '06:00 AM – 11:00 AM',
      icon: Coffee,
      description: 'Start your morning with freshly brewed Kenyan highlands coffee, handmade pastries, fresh fruit juices, and cooked-to-order breakfasts.',
      image: '/images/dinning-2.jpeg',
    },
    {
      title: 'Resort Cocktail Bar & Lounge',
      time: '12:00 PM – 11:00 PM',
      icon: Wine,
      description: 'Relax with signature handcrafted cocktails, premium spirits, fine wines, and chilled beverages in a serene, ambient lounge setting.',
      image: '/images/Bar & Lounge (2).jpeg',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-600">
            Gastronomy & Culinary Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Exquisite Dining at Le Voyage
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From sunrise buffet breakfasts to intimate candlelight dinners and outdoor poolside cocktails, discover flavors crafted with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diningHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-resort-950/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 border border-resort-700">
                    <Clock className="w-3 h-3 text-resort-400" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-resort-100 text-resort-700 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href={getWhatsAppLink(`Hello Le Voyage Resort, I would like to reserve a table at the restaurant.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-resort-600 hover:text-resort-800 flex items-center gap-1.5 transition"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      Reserve Table / Order Catering
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dining"
            className="bg-resort-950 hover:bg-resort-900 text-white text-xs font-semibold px-6 py-3 rounded-lg shadow inline-block transition"
          >
            View Dining Menus & Catering Options
          </Link>
        </div>

      </div>
    </section>
  );
}
