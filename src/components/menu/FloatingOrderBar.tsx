'use client';

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';

export default function FloatingOrderBar() {
  const { totalItemsCount, totalAmount, isDrawerOpen, setIsDrawerOpen } = useOrder();

  if (totalItemsCount === 0 || isDrawerOpen) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-4 pointer-events-none animate-bounce-short">
      <div className="max-w-md mx-auto pointer-events-auto">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="w-full bg-resort-950/95 hover:bg-resort-950 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-resort-700/80 flex items-center justify-between gap-3 transition transform active:scale-95 group"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-resort-600 flex items-center justify-center text-white shadow">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-resort-950">
                {totalItemsCount}
              </span>
            </div>
            <div className="text-left">
              <span className="text-[11px] text-resort-300 font-medium uppercase tracking-wider block">
                Your Order
              </span>
              <span className="text-sm font-serif font-bold text-white block">
                KSh {totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-resort-600 hover:bg-resort-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow transition">
            <span>Review Order</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}
