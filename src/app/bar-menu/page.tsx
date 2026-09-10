'use client';

import React, { useState, useMemo } from 'react';
import { BAR_CATEGORIES } from '@/data/menuData';
import MenuItemCard from '@/components/menu/MenuItemCard';
import MenuNavigationTabs from '@/components/menu/MenuNavigationTabs';
import MenuCategoryNav from '@/components/menu/MenuCategoryNav';
import { Search, Wine, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';

export default function BarMenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return BAR_CATEGORIES.map((category) => {
      const items = category.items.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
        const matchesSearch =
          !searchQuery.trim() ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.size?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      return {
        ...category,
        items,
      };
    }).filter((category) => category.items.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-28">
      {/* Hero Header */}
      <div className="bg-resort-950 text-white py-16 mb-8 border-b border-resort-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/images/Bar & Lounge (2).jpeg"
            alt="LE-VOYAGE Resort Bar and Lounge"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block">
            Premium Spirits, Wines & Chilled Beers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            LE-VOYAGE Resort Bar Menu
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of fine whiskies, gins, brandies, cognacs, cold ciders, wines, and signature cocktail shots in Kitale.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs (Dining vs Bar switcher) */}
        <MenuNavigationTabs activeMenu="bar" />

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search drinks (e.g. Jameson, Tusker, Gin, Wine, Red Bull)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-resort-500 shadow-sm placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Navigation */}
        <MenuCategoryNav
          categories={BAR_CATEGORIES}
          activeCategoryId={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Menu Items by Category */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="text-base font-serif font-bold text-slate-800">No drinks found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We couldn&apos;t find any bar items matching &quot;{searchQuery}&quot;. Try adjusting your search query or category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="bg-resort-600 hover:bg-resort-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <section key={category.id} className="space-y-4">
                {/* Category Header */}
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                      <span>{category.name}</span>
                      <span className="text-xs font-sans font-normal text-resort-600 bg-resort-50 px-2 py-0.5 rounded-full border border-resort-200">
                        {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                      </span>
                    </h2>
                    {category.description && (
                      <p className="text-xs text-slate-500 mt-1">{category.description}</p>
                    )}
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>

        {/* VIP Lounge & Bottle Service Banner */}
        <div className="bg-gradient-to-r from-resort-950 via-resort-900 to-resort-950 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-resort-800 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-resort-800/80 border border-resort-700 text-resort-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-resort-400" />
            <span>VIP Lounge & Bottle Service</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Veranda & Poolside Bar Service
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Relax with your favorite drinks at our open veranda or garden gazebos. For specialized bottle reservations, birthday celebrations, or cocktail requests, chat directly with our bar team.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to enquire about bar table reservations and bottle service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Bar Service on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
