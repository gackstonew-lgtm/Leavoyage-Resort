'use client';

import React from 'react';
import Link from 'next/link';
import { Utensils, Wine, ShoppingBag } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';

interface MenuNavigationTabsProps {
  activeMenu: 'dining' | 'bar';
}

export default function MenuNavigationTabs({ activeMenu }: MenuNavigationTabsProps) {
  const { totalItemsCount, totalAmount, setIsDrawerOpen } = useOrder();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
      {/* Menu Switcher Tabs */}
      <div className="flex items-center gap-2 w-full sm:w-auto bg-slate-100 p-1.5 rounded-xl border border-slate-200">
        <Link
          href="/dining-menu"
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeMenu === 'dining'
              ? 'bg-resort-600 text-white shadow-md'
              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
          }`}
        >
          <Utensils className="w-4 h-4" />
          <span>Dining Menu</span>
        </Link>
        <Link
          href="/bar-menu"
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeMenu === 'bar'
              ? 'bg-resort-600 text-white shadow-md'
              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
          }`}
        >
          <Wine className="w-4 h-4" />
          <span>Bar Menu</span>
        </Link>
      </div>

      {/* Cart Quick Status Trigger */}
      {totalItemsCount > 0 ? (
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-resort-950 hover:bg-resort-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow transition transform active:scale-95 border border-resort-800"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-resort-400" />
            <span className="absolute -top-2 -right-2 bg-resort-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItemsCount}
            </span>
          </div>
          <span>Review Order (KSh {totalAmount.toLocaleString()})</span>
        </button>
      ) : (
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium px-3 py-2 bg-slate-50 rounded-xl border border-slate-100">
          <ShoppingBag className="w-3.5 h-3.5 text-slate-400" />
          <span>Select items below to build your order</span>
        </div>
      )}
    </div>
  );
}
