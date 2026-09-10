'use client';

import React from 'react';
import { MenuCategory } from '@/data/menuData';

interface MenuCategoryNavProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function MenuCategoryNav({
  categories,
  activeCategoryId,
  onSelectCategory,
}: MenuCategoryNavProps) {
  return (
    <div className="sticky top-[72px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 max-w-7xl mx-auto min-w-max">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 ${
            activeCategoryId === 'all'
              ? 'bg-resort-600 text-white shadow-md border border-resort-500'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
          }`}
        >
          All Categories ({categories.reduce((acc, cat) => acc + cat.items.length, 0)})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 ${
              activeCategoryId === cat.id
                ? 'bg-resort-600 text-white shadow-md border border-resort-500'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {cat.name} ({cat.items.length})
          </button>
        ))}
      </div>
    </div>
  );
}
