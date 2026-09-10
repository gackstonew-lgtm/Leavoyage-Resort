'use client';

import { useState } from 'react';
import { Users, Wifi, Tv, Mic, CheckCircle, MessageCircle, Mail, Loader2 } from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';

export default function ConferencesPage() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    organization: '',
    contact_name: '',
    phone: '',
    email: '',
    event_type: 'Corporate Seminar',
    event_date: '',
    attendees: '25',
    required_services: ['PA System & Projector', 'Morning & Afternoon Tea Breaks', 'Buffet Lunch'],
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
        // Submit to Netlify Forms for email notification
        const netlifyFormData = new URLSearchParams();
        netlifyFormData.append('form-name', 'conference');
        netlifyFormData.append('organization', formData.organization);
        netlifyFormData.append('contact_name', formData.contact_name);
        netlifyFormData.append('phone', formData.phone);
        netlifyFormData.append('email', formData.email);
        netlifyFormData.append('event_type', formData.event_type);
        netlifyFormData.append('event_date', formData.event_date);
        netlifyFormData.append('attendees', formData.attendees);
        netlifyFormData.append('message', formData.message);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyFormData.toString(),
        }).catch(() => {}); // Silent — WhatsApp/mailto are primary channels

        setSuccessMsg(data.message);
      } else {
        setErrorMsg(data.message || 'Error submitting request.');
      }
    } catch (e) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const conferencePackages = [
    {
      name: 'Full-Day Delegate Package',
      price: 'KES 2,800 / delegate',
      includes: [
        'Conference Hall Hire with Air Conditioning',
        'High-Speed Fiber Wi-Fi Connection',
        'LCD Projector & Projection Screen',
        'PA System with Cordless Microphones',
        '10:00 AM Tea, Coffee & Assorted Snacks',
        '3-Course Buffet Lunch with Soft Drink',
        '04:00 PM Afternoon Tea & Pastries',
        'Complimentary Writing Pads & Pens',
        '2 Bottles of Mineral Water per Delegate',
      ],
    },
    {
      name: 'Half-Day Delegate Package',
      price: 'KES 2,200 / delegate',
      includes: [
        'Half-Day Hall Usage (4 Hours)',
        'Wi-Fi & Presentation Equipment',
        '1 Mid-Morning or Afternoon Tea Break',
        '3-Course Buffet Lunch',
        'Stationery & Mineral Water',
      ],
    },
    {
      name: 'Executive Boardroom Package',
      price: 'Custom Quote Available',
      includes: [
        'Private Executive Boardroom Setup',
        'Smart Video Conferencing Screen',
        'VIP Plated Lunch Service',
        'Continuous Beverage Station',
        'Dedicated Event Steward',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Corporate & Social Events
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Conferences & Events Facilities
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Host successful business seminars, board meetings, strategy retreats, and garden weddings in Kitale’s premier conference destination.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Packages Grid */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">
            Conference Packages & Inclusions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conferencePackages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">{pkg.name}</h3>
                  <span className="inline-block bg-resort-100 text-resort-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {pkg.price}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-resort-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Quote Form */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Request a Conference Quote</h2>
            <p className="text-xs text-slate-600 mt-2">Fill in your event details below and our events coordinator will prepare a custom proposal.</p>
          </div>

          {successMsg ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold">Quote Request Prepared</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">{successMsg}</p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={getWhatsAppLink(`Hello LE-VOYAGE Resort,\n\nI would like to enquire about your conference/event facilities.\n\nName: ${formData.contact_name}\nOrganization: ${formData.organization || 'N/A'}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nEvent Type: ${formData.event_type}\nEvent Date: ${formData.event_date}\nExpected Guests: ${formData.attendees}\n\nRequirements:\n${formData.message || 'None'}\n\nPlease provide availability and pricing information.\n\nThank you.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </a>
                <a
                  href={`mailto:${RESORT_INFO.contact.email}?subject=${encodeURIComponent(`LE-VOYAGE Resort Conference Quote Request - ${formData.event_type}`)}&body=${encodeURIComponent(`Contact Name: ${formData.contact_name}\nOrganization: ${formData.organization || 'N/A'}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Type: ${formData.event_type}\nEvent Date: ${formData.event_date}\nAttendees: ${formData.attendees}\nRequirements: ${formData.message || 'None'}`)}`}
                  className="bg-resort-600 hover:bg-resort-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Mail className="w-4 h-4" />
                  Send via Email
                </a>
                <button
                  onClick={() => setSuccessMsg('')}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-semibold transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && <p className="text-xs text-rose-600 bg-rose-50 p-2 rounded">{errorMsg}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Event Type</label>
                  <select
                    value={formData.event_type}
                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  >
                    <option value="Full-Day Conference">Full-Day Conference</option>
                    <option value="Half-Day Seminar">Half-Day Seminar</option>
                    <option value="Executive Board Meeting">Board Meeting</option>
                    <option value="Garden Wedding / Reception">Garden Wedding</option>
                    <option value="Corporate Gala / Dinner">Corporate Gala</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Expected Event Date</label>
                  <input
                    type="date"
                    required
                    value={formData.event_date}
                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Attendees</label>
                  <input
                    type="number"
                    min="5"
                    max="500"
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Event Requirements & Notes</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about special dietary needs, layout preferences, audio-visual gear..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-resort-600 hover:bg-resort-700 text-white font-semibold py-3 rounded-lg text-sm transition flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Send Event Enquiry</span>}
                </button>
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to enquire about holding an event at your venue.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Coordinators
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
