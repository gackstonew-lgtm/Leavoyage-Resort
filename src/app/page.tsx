import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import ConferenceSection from '@/components/home/ConferenceSection';
import DiningSection from '@/components/home/DiningSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import PromotionsSection from '@/components/home/PromotionsSection';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { RESORT_INFO } from '@/config/resortInfo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedRooms />
      <ConferenceSection />
      <DiningSection />
      <FacilitiesSection />
      <PromotionsSection />

      {/* Gallery Highlight Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-resort-600">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Explore LE-VOYAGE Resort
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Discover our rooms, dining spaces, manicured lawns, conference halls, and swimming pool.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>

      {/* Google Maps & Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Location Cards */}
            <div className="bg-resort-950 text-white p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-xl border border-resort-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
                  Visit Us in Kitale
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4">Find LE-VOYAGE Resort</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Conveniently situated along the scenic Kitale corridor, providing guest privacy while offering easy access to town facilities and transport hubs.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-resort-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block">{RESORT_INFO.contact.address}</span>
                      <span className="text-resort-300 text-xs block mt-0.5">{RESORT_INFO.contact.postalAddress}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-resort-400 shrink-0" />
                    <span>{RESORT_INFO.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-resort-400 shrink-0" />
                    <span>{RESORT_INFO.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-resort-400 shrink-0" />
                    <span>24/7 Reception & Front Desk Service</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-resort-800">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESORT_INFO.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-resort-600 hover:bg-resort-500 text-white text-xs font-semibold py-3 rounded-lg text-center block transition shadow"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-slate-200 min-h-[350px]">
              <iframe
                title="LE-VOYAGE Resort Location Map"
                src={RESORT_INFO.contact.googleMapsEmbedUrl}
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
