import Link from 'next/link';
import { Utensils, Coffee, Wine, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';

export default function DiningPage() {
  const menuCategories = [
    {
      category: 'Breakfast Specialties (06:00 AM – 10:30 AM)',
      items: [
        { name: 'LE-VOYAGE Highland Breakfast', desc: 'Two fresh eggs cooked to order, grilled beef sausages, bacon, fried mushrooms, roast tomato & toasted brioche.', price: 'KES 1,200' },
        { name: 'Swahili Mahamri & Swahili Tea', desc: 'Freshly baked cardamon mahamri served with spiced coconut bean stew and authentic brewed Kenyan Swahili tea.', price: 'KES 850' },
        { name: 'Fresh Tropical Fruit Platter & Yogurt', desc: 'Sliced pawpaw, sweet pineapple, passion fruit, watermelon, topped with wild honey and roasted granola.', price: 'KES 750' },
      ],
    },
    {
      category: 'Main Dishes & Chef Specials (12:00 PM – 10:00 PM)',
      items: [
        { name: 'Char-Grilled Kitale Tilapia', desc: 'Whole fresh lake tilapia seasoned with local herbs, served with traditional ugali and sauteed local greens (Sukuma/Kienyeji).', price: 'KES 1,650' },
        { name: 'Prime Aged Beef Tenderloin Steak', desc: 'Flame-grilled 250g beef steak topped with rich mushroom peppercorn reduction, served with potato wedges or garlic mash.', price: 'KES 1,950' },
        { name: 'Pan-Seared Herb Chicken Breast', desc: 'Tender chicken breast infused with rosemary and lemon butter, served alongside seasonal garden vegetables and savory rice.', price: 'KES 1,550' },
        { name: 'Creamy Tuscan Penne Pasta (V)', desc: 'Penne tossed in sundried tomato garlic cream sauce with fresh basil, wilted spinach and parmesan cheese shavings.', price: 'KES 1,350' },
      ],
    },
    {
      category: 'Cocktails & Signature Beverages',
      items: [
        { name: 'LE-VOYAGE Sunset Breeze', desc: 'Signature resort cocktail with gold rum, fresh passion fruit juice, lime, and a splash of grenadine.', price: 'KES 850' },
        { name: 'Kitale Highlands Dawa', desc: 'Classic Kenyan cocktail with vodka, freshly squeezed lime, crushed ginger, and natural organic honey.', price: 'KES 750' },
        { name: 'Fresh Hibiscus & Mint Mocktail', desc: 'Chilled house-brewed zesty hibiscus tea infused with crushed mint and fresh lemon juice.', price: 'KES 450' },
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Gastronomy & Culinary Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Restaurant & Bar Menus
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Indulge in an extraordinary dining experience featuring fresh local ingredients from Kitale farms combined with international culinary craft.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Menu Navigation CTA Buttons */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-600 block">
            Interactive Online Menus & Ordering
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Explore Dishes & Premium Beverages
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Browse our full food and bar collections with updated prices, customize quantities, and place orders directly via WhatsApp or Email.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dining-menu"
              className="w-full sm:w-auto bg-resort-600 hover:bg-resort-700 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 border border-resort-500 active:scale-95"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Dining Menu</span>
            </Link>

            <Link
              href="/bar-menu"
              className="w-full sm:w-auto bg-resort-950 hover:bg-resort-900 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 border border-resort-800 active:scale-95"
            >
              <Wine className="w-4 h-4 text-resort-400" />
              <span>Explore Bar Menu</span>
            </Link>
          </div>
        </div>

        {/* Atmosphere Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 group bg-white">
            <div className="h-52 overflow-hidden">
              <img
                src="/images/Dinning.jpeg"
                alt="LE-VOYAGE main restaurant dining hall"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif font-bold text-slate-900 text-sm">Main Restaurant Dining Hall</h3>
              <p className="text-xs text-slate-500 mt-1">Elegant ambience serving African fusion and continental cuisines.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 group bg-white">
            <div className="h-52 overflow-hidden">
              <img
                src="/images/Bar & Lounge.jpeg"
                alt="LE-VOYAGE veranda cocktail bar and outdoor lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif font-bold text-slate-900 text-sm">Veranda Cocktail Bar</h3>
              <p className="text-xs text-slate-500 mt-1">Open-air veranda seating overlooking lush resort greenery.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 group bg-white">
            <div className="h-52 overflow-hidden">
              <img
                src="/images/Bar & Lounge (2).jpeg"
                alt="LE-VOYAGE indoor cocktail bar and lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif font-bold text-slate-900 text-sm">Indoor Bar & Lounge</h3>
              <p className="text-xs text-slate-500 mt-1">Comfortable lounge setting with premium drinks and spirits.</p>
            </div>
          </div>
        </div>
        {menuCategories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-resort-950 mb-6 border-b border-slate-100 pb-3">
              {cat.category}
            </h2>
            <div className="space-y-6">
              {cat.items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b border-slate-50 pb-4 last:border-none">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-sm font-bold text-resort-600 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-resort-950 text-white rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold">Private Dining & Event Catering</h3>
          <p className="text-slate-300 text-xs max-w-lg mx-auto">
            Planning a private birthday dinner, family gathering, or outdoor barbecue event in our gardens? Contact our food & beverage team.
          </p>
          <a
            href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to enquire about table reservations and private catering.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg text-xs font-semibold shadow transition"
          >
            <MessageCircle className="w-4 h-4" />
            Reserve Table via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
