import Link from 'next/link';
import { RESORT_INFO } from '@/config/resortInfo';
import { ShieldCheck, Award, HeartHandshake, MapPin, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Our Hospitality Journey
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            About Le Voyage Resort Kitale
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Discover our commitment to providing world-class hospitality, tranquil relaxation, executive corporate spaces, and unforgettable dining experiences in Kitale.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-resort-600 block">
              Welcome to Kitale’s Haven
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
              Hospitality Built Around Comfort & Distinction
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Le Voyage Resort was established to fill a distinct need for premier hospitality, executive conference facilities, and serene leisure spaces in Kitale, Trans-Nzoia County. Located conveniently off Kapenguria Road, our resort offers guests a secluded haven away from city noise while keeping them connected to essential amenities.
            </p>

            <div className="p-4 bg-resort-50 rounded-xl border border-resort-200">
              <span className="text-xs font-bold text-resort-800 uppercase tracking-widest block mb-1">
                Our Brand Pillar
              </span>
              <span className="text-xl font-serif font-bold text-resort-950">
                {RESORT_INFO.coreValues}
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              From our executive suites and double rooms to our self-contained family cottages, state-of-the-art conference halls, manicured event lawns, and outdoor swimming pool, every detail has been crafted to deliver genuine Kenyan warmth and professional service.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
              alt="Le Voyage Resort Kitale Grounds"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Why Guests Choose Le Voyage</h2>
            <p className="text-xs text-slate-600">The premier destination for business executives, families, and event planners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-resort-100 text-resort-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">Secure & Peaceful Location</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enjoy 24/7 round-the-clock security, ample monitored parking, and quiet surroundings that promote restful sleep and focused business meetings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-resort-100 text-resort-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">Versatile Conference Halls</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped with acoustic treatment, HD presentation equipment, high-speed fiber internet, and customized catering menus for corporate seminars.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-resort-100 text-resort-700 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900">Genuine Warm Hospitality</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our attentive hospitality team is committed to making every stay seamless, from check-in assistance to custom dietary preparations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-resort-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">Experience Le Voyage Resort Today</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Book your stay online or contact our reservations team to discuss customized room rates and conference event packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/accommodation" className="bg-resort-500 hover:bg-resort-400 text-white font-semibold px-6 py-3 rounded-lg text-sm transition">
              View Rooms & Suites
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg text-sm transition border border-white/20">
              Contact Reservations
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
