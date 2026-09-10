'use client';

import React, { useState } from 'react';
import { Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useOrder } from '@/context/OrderContext';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const { addToOrder, orderItems } = useOrder();

  const currentOrderCount = orderItems.find((i) => i.item.id === item.id)?.quantity || 0;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAdd = () => {
    addToOrder(item, quantity);
    setJustAdded(true);
    setQuantity(1);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-card hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden">
      {/* Popular Badge */}
      {item.featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-resort-600 to-resort-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-sm">
          Chef Special
        </div>
      )}

      <div>
        {/* Header: Title & Size */}
        <div className="flex items-start justify-between gap-2 pr-12">
          <div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-resort-600 transition">
              {item.name}
            </h3>
            {item.size && (
              <span className="inline-block mt-1 bg-resort-50 text-resort-700 text-[11px] font-semibold px-2 py-0.5 rounded border border-resort-200/60">
                {item.size}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
            {item.description}
          </p>
        )}
      </div>

      {/* Footer: Price, Quantity, Add to Order */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Price & In-Cart indicator */}
        <div>
          <span className="text-base sm:text-lg font-serif font-bold text-resort-950">
            KSh {item.price.toLocaleString()}
          </span>
          {currentOrderCount > 0 && (
            <div className="text-[11px] font-medium text-emerald-600 flex items-center gap-1 mt-0.5">
              <Check className="w-3 h-3" />
              <span>{currentOrderCount} in your order</span>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quantity Selector */}
          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5">
            <button
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 disabled:opacity-40 transition active:scale-95"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center text-xs font-bold text-slate-800">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 transition active:scale-95"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Order Button */}
          <button
            onClick={handleAdd}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-sm transition transform active:scale-95 ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-resort-600 hover:bg-resort-700 text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Order</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
