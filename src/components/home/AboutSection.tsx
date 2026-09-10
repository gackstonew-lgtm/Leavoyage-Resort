import Link from 'next/link';
import { ShieldCheck, Award, HeartHandshake, MapPin } from 'lucide-react';
import { RESORT_INFO } from '@/config/resortInfo';

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Showcase collage */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/Resort (2).jpeg"
                alt="LE-VOYAGE Resort entrance and serene grounds in Kitale"
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
            
            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-resort-950 text-white p-6 rounded-2xl shadow-2xl max-w-xs hidden sm:block border border-resort-700">
              <span className="text-resort-400 font-serif font-bold text-3xl block">100%</span>
              <p className="text-xs text-slate-300 mt-1 font-medium leading-normal">
                Dedicated to warm hospitality, serene stays, and seamless events in Kitale.
              </p>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-resort-200/50 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-resort-100 text-resort-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-resort-600" />
              Kitale, Trans-Nzoia
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              An Oasis of Elegance & Warm Hospitality
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Nested in the serene landscapes of Kitale, <span className="font-semibold text-slate-800">LE-VOYAGE Resort</span> is designed to provide guests with an unmatched blend of luxury, comfort, and peaceful retreat. Whether traveling for executive business, hosting a corporate seminar, or enjoying a family getaway, our resort delivers tailor-made experiences.
            </p>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-resort-600 block mb-1">Our Slogan</span>
              <span className="text-lg font-serif font-bold text-slate-800">{RESORT_INFO.slogan}</span>
            </div>

            {/* Key feature pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-resort-100 text-resort-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Secure & Serene</h4>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 security and private peaceful grounds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-resort-100 text-resort-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Top Facilities</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Modern halls, pool, & fine dining.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-resort-100 text-resort-700 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Tailored Care</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Attentive staff for every request.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-resort-950 hover:bg-resort-900 text-white font-semibold px-6 py-3 rounded-lg text-sm transition shadow-md"
              >
                Learn More About Us
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
