'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Menu,
  X,
  Calendar,
  ShoppingBag,
  Utensils,
  Wine,
  Home,
  Bed,
  Users,
  Sparkles,
  Tag,
  Image,
  Info,
  ChevronRight,
  PhoneCall,
} from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';
import { useOrder } from '@/context/OrderContext';
import BookingModal from '../booking/BookingModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const pathname = usePathname();
  const { totalItemsCount, setIsDrawerOpen } = useOrder();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Conferences & Events', href: '/conferences' },
    { name: 'Dining', href: '/dining' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileNavLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Accommodation', href: '/accommodation', icon: Bed },
    { name: 'Conferences & Events', href: '/conferences', icon: Users },
    { name: 'Dining Overview', href: '/dining', icon: Utensils },
    { name: 'Dining Menu', href: '/dining-menu', isHighlight: true, icon: Utensils },
    { name: 'Bar Menu', href: '/bar-menu', isHighlight: true, icon: Wine },
    { name: 'Facilities', href: '/facilities', icon: Sparkles },
    { name: 'Packages', href: '/packages', icon: Tag },
    { name: 'Gallery', href: '/gallery', icon: Image },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-resort-950 shadow-md border-b border-resort-800">
        {/* Main Navigation Bar */}
        <nav className="py-2.5 sm:py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Resort Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <img
                src="/images/logo.jpeg"
                alt="LE-VOYAGE Resort Official Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain bg-white shadow-md border border-resort-400/30 group-hover:scale-105 transition transform p-0.5"
              />
              <div>
                <span className="text-lg sm:text-xl xl:text-2xl font-serif font-bold text-white tracking-wide block leading-none">
                  LE-VOYAGE Resort
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-resort-300 font-medium uppercase block mt-0.5">
                  Home Away From Home
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                      isActive
                        ? 'text-white bg-resort-700/90 font-semibold shadow-sm border border-resort-500/40'
                        : 'text-slate-200 hover:text-white hover:bg-resort-800/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {totalItemsCount > 0 && (
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="bg-resort-900 hover:bg-resort-800 text-white px-2.5 sm:px-3 py-2 rounded-lg text-xs font-semibold border border-resort-700 flex items-center gap-1.5 transition active:scale-95 shadow-sm"
                  aria-label="View order"
                  title="View your menu order"
                >
                  <ShoppingBag className="w-4 h-4 text-resort-400" />
                  <span className="hidden sm:inline">Order</span>
                  <span className="bg-resort-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                    {totalItemsCount}
                  </span>
                </button>
              )}

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="hidden lg:flex bg-resort-600 hover:bg-resort-500 text-white px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 items-center gap-1.5 border border-resort-400/30 active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 rounded-lg bg-resort-600 hover:bg-resort-500 border border-resort-400/40 shadow-sm focus:outline-none transition active:scale-95 flex items-center justify-center"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[59px] sm:top-[63px] bg-resort-950 border-b border-resort-800 shadow-2xl transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-[calc(100vh-60px)] opacity-100 overflow-y-auto py-4'
              : 'max-h-0 opacity-0 overflow-hidden py-0 pointer-events-none'
          }`}
        >
          <div className="max-w-md mx-auto px-4 sm:px-6 space-y-1">
            {mobileNavLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-resort-600 text-white font-semibold shadow-sm border border-resort-400/30'
                      : link.isHighlight
                      ? 'bg-resort-900/80 text-resort-200 border border-resort-700/60 hover:bg-resort-800 hover:text-white'
                      : 'text-white hover:bg-resort-900/90'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          isActive ? 'text-white' : 'text-resort-300 group-hover:text-white'
                        }`}
                      />
                    )}
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-white' : 'text-resort-400/60 group-hover:text-white'
                    }`}
                  />
                </Link>
              );
            })}

            {/* Mobile Actions Section */}
            <div className="pt-3 border-t border-resort-800 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full bg-resort-600 hover:bg-resort-500 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow transition active:scale-95 border border-resort-400/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Accommodation</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-resort-900 hover:bg-resort-800 text-slate-200 text-xs font-medium border border-resort-800 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-resort-400" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to make an enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium transition"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Global Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
}
