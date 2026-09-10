'use client';

import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Mail, ShoppingBag, User, Phone, MapPin, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { useOrder, CustomerDetails } from '@/context/OrderContext';

export default function OrderDrawer() {
  const {
    orderItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromOrder,
    clearOrder,
    totalItemsCount,
    totalAmount,
    generateWhatsAppUrl,
    generateEmailUrl,
  } = useOrder();

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    roomOrTable: '',
    preferredContact: 'WhatsApp',
    instructions: '',
  });

  const [validationError, setValidationError] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setValidationError('');
      setOrderSent(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const validateForm = (): boolean => {
    if (!customer.name.trim()) {
      setValidationError('Please provide your full name.');
      return false;
    }
    if (!customer.phone.trim() || customer.phone.trim().length < 8) {
      setValidationError('Please provide a valid phone number.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;
    const url = generateWhatsAppUrl(customer);
    window.open(url, '_blank', 'noopener,noreferrer');
    setOrderSent(true);
  };

  const handleEmailSubmit = () => {
    if (!validateForm()) return;
    const url = generateEmailUrl(customer);
    window.location.href = url;
    setOrderSent(true);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsDrawerOpen(false);
      }}
      className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-fade-in"
    >
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-slate-200">
        
        {/* Drawer Header */}
        <div className="bg-resort-950 text-white px-6 py-4 flex items-center justify-between border-b border-resort-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-resort-800/80 flex items-center justify-center text-resort-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-white">Your Menu Order</h2>
              <p className="text-xs text-resort-300">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-resort-900 transition"
            aria-label="Close drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-800">Your order is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our delicious dining specialties or bar selection and add your favorite items.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="bg-resort-600 hover:bg-resort-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow transition"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Sent Confirmation Banner */}
              {orderSent && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm">Order Dispatched!</span>
                    <span>Your order message has been prepared for LE-VOYAGE Resort. Once confirmed, our culinary team will begin preparing your request.</span>
                  </div>
                </div>
              )}

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Selected Items</span>
                  <button
                    onClick={clearOrder}
                    className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {orderItems.map(({ item, quantity }) => {
                    const subtotal = item.price * quantity;
                    return (
                      <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-slate-900 truncate">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            {item.size && <span className="bg-slate-100 px-1.5 py-0.5 rounded">{item.size}</span>}
                            <span>KSh {item.price.toLocaleString()} each</span>
                          </div>
                        </div>

                        {/* Quantity and Subtotal */}
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 transition"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-bold text-slate-800">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-slate-900 transition"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right min-w-[70px]">
                            <span className="text-sm font-bold text-slate-900 block">
                              KSh {subtotal.toLocaleString()}
                            </span>
                          </div>

                          <button
                            onClick={() => removeFromOrder(item.id)}
                            className="text-slate-400 hover:text-rose-600 p-1 rounded transition"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Grand Total Bar */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Total Amount</span>
                  <span className="text-xl font-serif font-bold text-resort-950">
                    KSh {totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Customer Details Form */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-resort-600" />
                  <span>Customer Details for Order</span>
                </h3>

                {validationError && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +254 712 000 000"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-resort-500" />
                      <span>Room / Table / Reservation (Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Room 04 / Table 12 / Takeaway"
                      value={customer.roomOrTable}
                      onChange={(e) => setCustomer({ ...customer, roomOrTable: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Preferred Contact Channel
                    </label>
                    <select
                      value={customer.preferredContact}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          preferredContact: e.target.value as 'WhatsApp' | 'Phone Call' | 'Email',
                        })
                      }
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                    >
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Phone Call">Direct Phone Call</option>
                      <option value="Email">Email Confirmation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-resort-500" />
                    <span>Special Instructions / Dietary Notes (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Wet fry, mild pepper, extra ice with juice..."
                    value={customer.instructions}
                    onChange={(e) => setCustomer({ ...customer, instructions: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {orderItems.length > 0 && (
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 space-y-3">
            <button
              onClick={handleWhatsAppSubmit}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp (KSh {totalAmount.toLocaleString()})</span>
            </button>

            <button
              onClick={handleEmailSubmit}
              className="w-full bg-resort-950 hover:bg-resort-900 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold shadow flex items-center justify-center gap-2 transition border border-resort-800 active:scale-98"
            >
              <Mail className="w-4 h-4" />
              <span>Order via Email</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
