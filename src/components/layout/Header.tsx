'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Menu, X, Calendar } from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';
import BookingModal from '../booking/BookingModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Info Bar (Hidden when scrolled or on small screens) */}
        <div className={`bg-resort-950 text-slate-300 text-xs py-2 px-4 transition-all duration-300 border-b border-resort-800 ${
          isScrolled ? 'max-h-0 py-0 opacity-0 overflow-hidden border-none' : 'max-h-12 opacity-100'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 hover:text-white transition">
                <MapPin className="w-3.5 h-3.5 text-resort-400" />
                {RESORT_INFO.location}
              </span>
              <a href={`tel:${RESORT_INFO.contact.phoneRaw}`} className="hidden md:flex items-center gap-1.5 hover:text-white transition">
                <Phone className="w-3.5 h-3.5 text-resort-400" />
                {RESORT_INFO.contact.phone}
              </a>
              <a href={`mailto:${RESORT_INFO.contact.email}`} className="hidden lg:flex items-center gap-1.5 hover:text-white transition">
                <Mail className="w-3.5 h-3.5 text-resort-400" />
                {RESORT_INFO.contact.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href={getWhatsAppLink('Hello Le Voyage Resort, I would like to enquire about your services.')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded text-[11px] font-medium transition flex items-center gap-1"
              >
                WhatsApp Us
              </a>
              <span className="text-resort-400 font-semibold tracking-wider text-[10px] uppercase">
                {RESORT_INFO.coreValues}
              </span>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation Bar */}
        <nav className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-resort-950/95 backdrop-blur-md shadow-lg py-3 border-b border-resort-800' 
            : 'bg-gradient-to-b from-resort-950/90 to-resort-950/60 backdrop-blur-sm py-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Resort Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.jpeg"
                alt="Le Voyage Resort Official Logo"
                className="w-10 h-10 rounded-full object-contain bg-white shadow-md border border-resort-400/30 group-hover:scale-105 transition transform p-0.5"
              />
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide block leading-none">
                  LE VOYAGE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-resort-300 font-medium uppercase block mt-0.5">
                  Resort Kitale
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition duration-200 ${
                      isActive
                        ? 'text-white bg-resort-700/60 border border-resort-500/40 shadow-sm'
                        : 'text-slate-200 hover:text-white hover:bg-resort-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-resort-500 hover:bg-resort-400 text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 border border-resort-300/30 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-slate-200 hover:text-white p-2 rounded-lg bg-resort-900/80 border border-resort-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed inset-x-0 top-[60px] bg-resort-950/98 backdrop-blur-xl border-b border-resort-800 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto py-6 shadow-2xl' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}>
          <div className="max-w-7xl mx-auto px-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                  pathname === link.href
                    ? 'bg-resort-700 text-white font-semibold'
                    : 'text-slate-200 hover:bg-resort-900 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-resort-800/80 space-y-3">
              <a
                href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                className="flex items-center gap-3 px-4 py-2 text-slate-300 text-sm hover:text-white"
              >
                <Phone className="w-4 h-4 text-resort-400" />
                {RESORT_INFO.contact.phone}
              </a>
              <a
                href={getWhatsAppLink('Hello Le Voyage Resort, I would like to make an enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg text-center font-medium text-sm flex items-center justify-center gap-2 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Global Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
}
