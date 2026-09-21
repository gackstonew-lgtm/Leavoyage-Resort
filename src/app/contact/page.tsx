'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        // Submit to Netlify Forms for email notification
        const netlifyFormData = new URLSearchParams();
        netlifyFormData.append('form-name', 'enquiry');
        netlifyFormData.append('name', formData.name);
        netlifyFormData.append('email', formData.email);
        netlifyFormData.append('phone', formData.phone);
        netlifyFormData.append('subject', formData.subject);
        netlifyFormData.append('message', formData.message);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyFormData.toString(),
        }).catch(() => {}); // Silent — WhatsApp/mailto are primary channels

        setSuccessMsg(data.message);
        setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
      } else {
        setErrorMsg(data.message || 'Could not send message.');
      }
    } catch (e) {
      setErrorMsg('Network error. Please contact us via phone or WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Contact LE-VOYAGE Resort
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Have questions about room bookings, conference packages, or garden weddings? Reach out directly or send us a message below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-resort-950 text-white p-8 rounded-2xl shadow-xl space-y-6 border border-resort-800">
              <h2 className="text-2xl font-serif font-bold text-white border-b border-resort-800 pb-3">Resort Direct Contact</h2>
              
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-resort-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Physical Location</span>
                    <span className="text-slate-300 block">{RESORT_INFO.contact.address}</span>
                    <span className="text-resort-300 text-xs block mt-1">{RESORT_INFO.contact.postalAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-resort-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Phone Lines</span>
                    <div className="flex flex-col space-y-1 text-slate-300 mt-1">
                      <a href={`tel:${RESORT_INFO.contact.phoneRaw}`} className="hover:text-white transition block">
                        {RESORT_INFO.contact.phone}
                      </a>
                      <a href={`tel:${RESORT_INFO.contact.additionalPhoneRaw}`} className="hover:text-white transition block">
                        {RESORT_INFO.contact.additionalPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-resort-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Email Enquiries</span>
                    <a href={`mailto:${RESORT_INFO.contact.email}`} className="text-slate-300 hover:text-white transition">
                      {RESORT_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-resort-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Front Desk Hours</span>
                    <span className="text-slate-300">24 Hours / 7 Days a Week</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-resort-800">
                <a
                  href={getWhatsAppLink('Hello LE-VOYAGE Resort, I would like to make a direct enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Directly on WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64">
              <iframe
                title="Resort Map"
                src={RESORT_INFO.contact.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-card">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-xs text-slate-600 mb-6">Fill in the contact form below and our team will get back to you promptly.</p>

            {successMsg ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold">Message Prepared Successfully</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">{successMsg}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={getWhatsAppLink(`Hello LE-VOYAGE Resort,\nName: ${formData.name || 'Guest'}\nSubject: ${formData.subject}\nMessage: ${formData.message}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </a>
                  <a
                    href={`mailto:${RESORT_INFO.contact.email}?subject=${encodeURIComponent(`LE-VOYAGE Resort Enquiry: ${formData.subject}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`)}`}
                    className="bg-resort-600 hover:bg-resort-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <Mail className="w-4 h-4" />
                    Send via Email
                  </a>
                  <button
                    onClick={() => {
                      setSuccessMsg('');
                      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
                    }}
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Enquiry Subject</label>
                    <input
                      type="text"
                      placeholder="Room enquiry, Conference, Dining..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your enquiry details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-resort-600 hover:bg-resort-700 text-white font-semibold py-3 rounded-lg text-sm shadow transition flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Send Message</span>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
