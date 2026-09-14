'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Wifi, Tv, ArrowRight, X, Loader2, CheckCircle } from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';

export default function ConferenceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    organization: '',
    contact_name: '',
    phone: '',
    email: '',
    event_type: 'Corporate Conference',
    event_date: '',
    attendees: '30',
    required_services: ['PA System & Projector', '10am & 4pm Tea Breaks', 'Buffet Lunch'],
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/conference-enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(data.message);
      } else {
        setErrorMsg(data.message || 'Could not submit quote request.');
      }
    } catch (e) {
      setErrorMsg('Network error. Please contact our events line directly.');
    } finally {
      setLoading(false);
    }
  };

  const venues = [
    {
      name: 'Grand Elgon Ballroom',
      capacity: 'Up to 250 Delegates',
      hireRate: 'KES 10,000',
      rateCondition: '150 People & Above',
      specs: 'HD Projectors, Surround PA Sound, High-speed Fiber Wi-Fi',
      image: '/images/conference-1.jpeg',
      description: 'Our flagship conference space equipped with acoustic insulation and customizable banquet layout options.',
    },
    {
      name: 'Executive Boardroom',
      capacity: 'Up to 25 Executive Guests',
      hireRate: 'KES 5,000',
      rateCondition: '50 People & Below',
      specs: 'Smart Video Conferencing Screen, Ergonomic Seating',
      image: '/images/conference-2.jpeg',
      description: 'Ideal for confidential board meetings, high-level corporate negotiations, and strategic planning retreats.',
    },
    {
      name: 'Manicured Event Lawns',
      capacity: 'Up to 500+ Outdoor Guests',
      hireRate: 'KES 10,000',
      rateCondition: 'Grounds Venue Hire',
      specs: 'Expansive Grass Lawns, Outdoor Lighting & Tent Setups',
      image: '/images/gardens-4.jpeg',
      description: 'The preferred outdoor venue in Kitale for romantic garden weddings, corporate launches, graduations, and celebrations.',
    },
  ];

  return (
    <section className="py-20 bg-resort-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
              Conferences & Events
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              State-of-the-Art Venues in Kitale
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <Link
              href="/pricing"
              className="bg-resort-900 hover:bg-resort-800 text-resort-200 hover:text-white font-semibold text-xs px-4 py-2.5 rounded-lg border border-resort-700 transition"
            >
              View Rates
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-resort-500 hover:bg-resort-400 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow transition"
            >
              Request Event Quote
            </button>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="bg-resort-900/80 rounded-2xl overflow-hidden border border-resort-800 hover:border-resort-600 transition duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-resort-950/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-resort-700 shadow">
                  {venue.hireRate}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-resort-400 uppercase tracking-wider block mb-1">
                    {venue.rateCondition}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{venue.name}</h3>
                  <p className="text-xs text-resort-300 font-medium mb-3">{venue.capacity}</p>
                  <p className="text-slate-300 text-xs leading-relaxed">{venue.description}</p>
                </div>
                <div className="pt-3 border-t border-resort-800 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-resort-400">
                    <Wifi className="w-3.5 h-3.5" /> High-Speed Internet Included
                  </div>
                  <div className="flex items-center gap-1.5 text-resort-400">
                    <Tv className="w-3.5 h-3.5" /> AV Presentation Equipment
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/conferences"
            className="text-resort-300 hover:text-white text-sm font-medium inline-flex items-center gap-1.5 transition"
          >
            <span>Explore All Conference Packages & Catering Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="hidden sm:inline text-resort-700">•</span>
          <Link
            href="/pricing"
            className="bg-resort-900 hover:bg-resort-800 text-white text-xs font-semibold px-4 py-2 rounded-lg border border-resort-700 transition inline-flex items-center gap-1.5"
          >
            <span>View All Resort Rates & Pricing</span>
            <ArrowRight className="w-3.5 h-3.5 text-resort-400" />
          </Link>
        </div>

      </div>

      {/* Quote Request Modal */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden my-8 border border-slate-200">
            <div className="bg-resort-950 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold">Request Conference / Event Quote</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {successMsg ? (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-800">Quote Request Prepared</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">{successMsg}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={getWhatsAppLink(`Hello LE-VOYAGE Resort, I would like to request a quote for a ${formData.event_type} on ${formData.event_date} for ${formData.attendees} attendees.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <span>Send via WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:${RESORT_INFO.contact.email}?subject=${encodeURIComponent(`LE-VOYAGE Resort Conference Quote Request - ${formData.event_type}`)}&body=${encodeURIComponent(`Contact Name: ${formData.contact_name}\nOrganization: ${formData.organization || 'N/A'}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Type: ${formData.event_type}\nEvent Date: ${formData.event_date}\nAttendees: ${formData.attendees}\nRequirements: ${formData.message || 'None'}`)}`}
                      className="bg-resort-600 hover:bg-resort-700 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <span>Send via Email</span>
                    </a>
                    <button
                      onClick={() => {
                        setSuccessMsg('');
                        setIsModalOpen(false);
                      }}
                      className="bg-slate-200 text-slate-800 px-4 py-2.5 rounded-lg text-xs font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && <p className="text-xs text-rose-600 bg-rose-50 p-2 rounded">{errorMsg}</p>}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / Company</label>
                      <input
                        type="text"
                        placeholder="Organization Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Person Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.contact_name}
                        onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Event Type</label>
                      <select
                        value={formData.event_type}
                        onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 text-xs text-slate-800"
                      >
                        <option value="Corporate Conference">Conference</option>
                        <option value="Executive Board Meeting">Board Meeting</option>
                        <option value="Garden Wedding">Garden Wedding</option>
                        <option value="Social Event / Gala">Social Gala</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Event Date</label>
                      <input
                        type="date"
                        required
                        value={formData.event_date}
                        onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Attendees</label>
                      <input
                        type="number"
                        min="5"
                        max="500"
                        value={formData.attendees}
                        onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 text-xs text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Specify catering needs, seating layout, lodging requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-resort-600 hover:bg-resort-700 text-white font-semibold py-2.5 rounded-lg text-xs transition flex items-center justify-center gap-2"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Submit Event Quote</span>}
                    </button>
                    <a
                      href={getWhatsAppLink(`Hello LE-VOYAGE Resort, I want to enquire about hiring a conference facility.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-lg text-xs font-semibold"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
