'use client';

import { useState, useEffect } from 'react';
import { Users, Bed, Maximize, Check, Calendar, MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';
import { staticRooms, RoomRecord } from '@/lib/db';
import BookingModal from '@/components/booking/BookingModal';

export default function AccommodationPage() {
  const [rooms, setRooms] = useState<RoomRecord[]>(staticRooms);
  const [loading, setLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomRecord | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingRoomName, setBookingRoomName] = useState('');

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch('/api/rooms');
        const data = await res.json();
        if (data.success && data.data) {
          setRooms(data.data);
        }
      } catch (e) {
        // Fallback to staticRooms already initialized
      } finally {
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  const handleBook = (name: string) => {
    setBookingRoomName(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Luxury Suites & Cottages
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Resort Accommodation
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Choose from our collection of executive suites, double rooms, and self-contained cottages tailored for comfort, privacy, and relaxation in Kitale.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-slate-100 rounded-2xl h-80" />
            ))}
          </div>
        ) : (
          <div className="space-y-10">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Image */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px]">
                  <img
                    src={room.main_image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-resort-950/90 text-white px-3 py-1 rounded-full text-xs font-bold border border-resort-700">
                    KES {room.price_per_night.toLocaleString()} / night
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">{room.name}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{room.description}</p>

                    <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-700 font-medium mb-4">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-resort-600" />
                        <span>{room.capacity} Guests</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-resort-600" />
                        <span className="truncate">{room.bed_type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize className="w-4 h-4 text-resort-600" />
                        <span>{room.room_size}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((item, idx) => (
                        <span key={idx} className="bg-resort-50 text-resort-800 text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                          <Check className="w-3 h-3 text-resort-600" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => handleBook(room.name)}
                      className="w-full sm:flex-1 bg-resort-600 hover:bg-resort-700 text-white font-semibold py-3 rounded-lg text-sm shadow transition flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Reserve Room
                    </button>
                    <a
                      href={getWhatsAppLink(`Hello Le Voyage Resort, I would like to enquire about availability for ${room.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedRoom={bookingRoomName}
      />
    </div>
  );
}
