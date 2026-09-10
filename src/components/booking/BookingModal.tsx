'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, User, Mail, Phone, CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { RESORT_INFO, getWhatsAppLink } from '@/config/resortInfo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedRoom }: BookingModalProps) {
  // 1. All hooks declared unconditionally at the top level
  const [formData, setFormData] = useState({
    guest_name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    adults: '2',
    children: '0',
    rooms_count: '1',
    room_type: preselectedRoom || 'Deluxe Executive Suite',
    special_requests: '',
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{ reference_no: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 2. Event Handlers
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessResponse(null);

    // Client-side validations
    if (!formData.guest_name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    if (!formData.check_in || !formData.check_out) {
      setErrorMessage('Please select check-in and check-out dates.');
      return;
    }
    if (new Date(formData.check_out) <= new Date(formData.check_in)) {
      setErrorMessage('Check-out date must be after check-in date.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        // Submit to Netlify Forms for email notification
        const netlifyFormData = new URLSearchParams();
        netlifyFormData.append('form-name', 'booking');
        netlifyFormData.append('guest_name', formData.guest_name);
        netlifyFormData.append('email', formData.email);
        netlifyFormData.append('phone', formData.phone);
        netlifyFormData.append('check_in', formData.check_in);
        netlifyFormData.append('check_out', formData.check_out);
        netlifyFormData.append('adults', formData.adults);
        netlifyFormData.append('children', formData.children);
        netlifyFormData.append('rooms_count', formData.rooms_count);
        netlifyFormData.append('room_type', formData.room_type);
        netlifyFormData.append('special_requests', formData.special_requests);
        netlifyFormData.append('reference_no', data.reference_no);
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyFormData.toString(),
        }).catch(() => {}); // Silent — WhatsApp/mailto are primary channels

        setSuccessResponse({
          reference_no: data.reference_no,
          message: data.message,
        });
      } else {
        setErrorMessage(data.message || 'Could not process your booking request. Please try again.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please try again or contact our reservations desk.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResponse(null);
    setErrorMessage('');
    onClose();
  };

  // 3. Early return AFTER all hook declarations
  if (!isOpen) return null;

  const whatsappMessage = `Hello LE-VOYAGE Resort, I would like to reserve a room.\nName: ${formData.guest_name || 'Guest'}\nRoom Type: ${formData.room_type}\nCheck-in: ${formData.check_in || 'Pending'}\nCheck-out: ${formData.check_out || 'Pending'}`;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Modal Header */}
        <div className="bg-resort-950 text-white px-6 py-5 flex items-center justify-between border-b border-resort-800">
          <div>
            <h2 className="text-xl font-serif font-bold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-resort-400" />
              Reserve Your Stay — LE-VOYAGE Resort
            </h2>
            <p className="text-xs text-resort-300 mt-0.5">Submit your booking request for instant processing</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-resort-900 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {successResponse ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800">Booking Request Received!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {successResponse.message}
              </p>
              <div className="bg-resort-50 border border-resort-200 rounded-xl p-4 inline-block max-w-xs w-full">
                <span className="text-xs text-resort-700 font-semibold uppercase tracking-wider block">Booking Reference</span>
                <span className="text-2xl font-mono font-bold text-resort-950 mt-1 block">{successResponse.reference_no}</span>
              </div>
              <p className="text-xs text-slate-500">Your booking enquiry has been submitted. Please wait for confirmation from LE-VOYAGE Resort via phone or email.</p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppLink(`Hello LE-VOYAGE Resort, I submitted booking ref: ${successResponse.reference_no} for ${formData.room_type} (${formData.check_in} to ${formData.check_out}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm via WhatsApp
                </a>
                <a
                  href={`mailto:${RESORT_INFO.contact.bookingEmail}?subject=${encodeURIComponent(`LE-VOYAGE Resort Booking Request Ref: ${successResponse.reference_no}`)}&body=${encodeURIComponent(`Hello LE-VOYAGE Resort,\n\nI submitted a booking request.\nReference: ${successResponse.reference_no}\nGuest Name: ${formData.guest_name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRoom Type: ${formData.room_type}\nCheck-in: ${formData.check_in}\nCheck-out: ${formData.check_out}\nGuests: ${formData.adults} Adults, ${formData.children} Children\nSpecial Requests: ${formData.special_requests || 'None'}`)}`}
                  className="bg-resort-600 hover:bg-resort-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Mail className="w-4 h-4" />
                  Send via Email
                </a>
                <button
                  onClick={handleReset}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Room Type</label>
                <select
                  value={formData.room_type}
                  onChange={(e) => setFormData({ ...formData, room_type: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                >
                  <option value="Deluxe Executive Suite">Deluxe Executive Suite (KES 12,500/night)</option>
                  <option value="Superior Double Room">Superior Double Room (KES 9,500/night)</option>
                  <option value="Family Luxury Cottage">Family Luxury Cottage (KES 18,000/night)</option>
                  <option value="Standard Twin Room">Standard Twin Room (KES 7,500/night)</option>
                </select>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Check-in Date</label>
                  <input
                    type="date"
                    required
                    value={formData.check_in}
                    onChange={(e) => setFormData({ ...formData, check_in: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Check-out Date</label>
                  <input
                    type="date"
                    required
                    value={formData.check_out}
                    onChange={(e) => setFormData({ ...formData, check_out: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests and Rooms Row */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Adults</label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Children</label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Rooms</label>
                  <select
                    value={formData.rooms_count}
                    onChange={(e) => setFormData({ ...formData, rooms_count: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-resort-600" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.guest_name}
                    onChange={(e) => setFormData({ ...formData, guest_name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-resort-600" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-resort-600" /> Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Late check-in, dietary requirements, airport pick-up..."
                  value={formData.special_requests}
                  onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Form Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 bg-resort-600 hover:bg-resort-700 text-white py-3 rounded-lg font-semibold text-sm shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <span>Submit Booking Enquiry</span>
                  )}
                </button>

                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
