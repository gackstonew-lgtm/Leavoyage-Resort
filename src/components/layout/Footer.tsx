import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-resort-950 text-slate-300 pt-16 pb-8 border-t border-resort-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-resort-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="LE-VOYAGE Resort Official Logo"
                className="w-10 h-10 rounded-full object-contain bg-white shadow-md border border-resort-400/30 p-0.5"
              />
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-wide block leading-none">
                  LE-VOYAGE Resort
                </span>
                <span className="text-[10px] tracking-[0.2em] text-resort-300 font-medium uppercase block mt-0.5">
                  Home Away From Home
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Home Away From Home. Premier destination for luxury accommodation, fine dining, corporate conferences, and memorable outdoor events in Kitale.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-resort-900 border border-resort-700/60 text-resort-300 px-3 py-1 rounded-full text-xs font-medium">
                {RESORT_INFO.coreValues}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-lg font-semibold tracking-wide border-b border-resort-800 pb-2">
              Explore Resort
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Luxury Rooms & Suites', href: '/accommodation' },
                { name: 'Conferences & Seminars', href: '/conferences' },
                { name: 'Restaurant & Bar Overview', href: '/dining' },
                { name: 'Online Dining Menu', href: '/dining-menu' },
                { name: 'Online Bar Menu', href: '/bar-menu' },
                { name: 'Swimming Pool & Lawn', href: '/facilities' },
                { name: 'Packages & Offers', href: '/packages' },
                { name: 'Resort Photo Gallery', href: '/gallery' },
                { name: 'About LE-VOYAGE Resort', href: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-1 transition inline-flex items-center gap-1.5 text-slate-400">
                    <ChevronRight className="w-3.5 h-3.5 text-resort-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event & Leisure Services */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-lg font-semibold tracking-wide border-b border-resort-800 pb-2">
              Events & Hospitality
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-resort-400" /> Garden Weddings & Receptions</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-resort-400" /> Corporate Team Building</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-resort-400" /> Executive Board Meetings</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-resort-400" /> Outdoor Dining & Barbecue</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-resort-400" /> Weekend Poolside Relaxation</li>
              <li className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-resort-400" /> Private Party Venue Hire</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-lg font-semibold tracking-wide border-b border-resort-800 pb-2">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-resort-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block leading-relaxed">{RESORT_INFO.contact.address}</span>
                  <span className="text-xs text-resort-300 font-medium block mt-1">{RESORT_INFO.contact.postalAddress}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-resort-400 shrink-0" />
                <a href={`tel:${RESORT_INFO.contact.phoneRaw}`} className="hover:text-white transition">
                  {RESORT_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-resort-400 shrink-0" />
                <a href={`mailto:${RESORT_INFO.contact.email}`} className="hover:text-white transition">
                  {RESORT_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to make an enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct Enquiry
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} LE-VOYAGE Resort Kitale. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition flex items-center gap-1">
              <Facebook className="w-4 h-4 text-resort-400" />
              <span>Facebook</span>
            </a>
            <a href="#" className="hover:text-white transition flex items-center gap-1">
              <Instagram className="w-4 h-4 text-resort-400" />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-white transition flex items-center gap-1">
              <Twitter className="w-4 h-4 text-resort-400" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
