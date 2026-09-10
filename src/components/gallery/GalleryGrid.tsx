'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { staticGallery, GalleryRecord } from '@/lib/db';

export default function GalleryGrid() {
  const [items, setItems] = useState<GalleryRecord[]>(staticGallery);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Accommodation', 'Rooms', 'Dining', 'Conference', 'Swimming Pool', 'Gardens', 'Facilities', 'Resort'];

  useEffect(() => {
    if (activeCategory === 'All') {
      setItems(staticGallery);
    } else {
      setItems(staticGallery.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-resort-600 text-white shadow-md border border-resort-500'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative h-64 rounded-xl overflow-hidden bg-slate-900 cursor-pointer shadow border border-slate-200"
          >
            <img
              src={item.image_url}
              alt={item.alt_text || item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-resort-950/90 via-resort-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] text-resort-300 font-semibold uppercase tracking-wider">
                {item.category}
              </span>
              <h4 className="text-white text-sm font-serif font-semibold">{item.title}</h4>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-resort-900/80 border border-resort-700 z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-resort-900/80 border border-resort-700 z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-resort-900/80 border border-resort-700 z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl relative">
            <img
              src={items[lightboxIndex].image_url}
              alt={items[lightboxIndex].title}
              className="max-h-[75vh] w-auto mx-auto object-contain rounded-xl"
            />
            <div className="bg-resort-950/90 text-white p-4 text-center border-t border-resort-800">
              <span className="text-xs text-resort-400 font-semibold uppercase">{items[lightboxIndex].category}</span>
              <h3 className="text-lg font-serif font-bold mt-0.5">{items[lightboxIndex].title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
