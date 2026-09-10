'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, Bed, Maximize, Check, ArrowRight, MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';
import { staticRooms, RoomRecord } from '@/lib/db';
import BookingModal from '../booking/BookingModal';

export default function FeaturedRooms() {
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

  const handleBookNow = (roomName: string) => {
    setBookingRoomName(roomName);
    setIsBookingOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-resort-600 block mb-2">
              Accommodation & Cottages
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Refined Living in Kitale
            </h2>
          </div>
          <Link
            href="/accommodation"
            className="mt-4 md:mt-0 text-resort-600 hover:text-resort-800 font-semibold text-sm inline-flex items-center gap-1 transition"
          >
            <span>View All Accommodations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Room Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-slate-100 rounded-2xl h-[420px]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={room.main_image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-resort-950/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow border border-resort-700">
                    KES {room.price_per_night.toLocaleString()} / night
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-resort-600 transition">
                      {room.name}
                    </h3>
                    <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {room.short_description}
                    </p>

                    {/* Room Meta Specs */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mt-4 text-[11px] text-slate-600 font-medium">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-resort-500" />
                        <span>{room.capacity} Guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-resort-500" />
                        <span className="truncate">{room.bed_type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5 text-resort-500" />
                        <span>{room.room_size}</span>
                      </div>
                    </div>

                    {/* Quick Amenities Pill List */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {room.amenities.slice(0, 3).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="bg-resort-50 text-resort-700 text-[10px] px-2 py-0.5 rounded font-semibold">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-lg transition text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookNow(room.name)}
                      className="flex-1 bg-resort-600 hover:bg-resort-700 text-white text-xs font-semibold py-2.5 rounded-lg transition shadow-sm text-center"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedRoom(null);
          }}
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden my-8">
            <div className="relative h-72 bg-slate-900">
              <img
                src={selectedRoom.main_image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 bg-resort-950/80 text-white p-2 rounded-full hover:bg-resort-950"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-resort-950/90 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                KES {selectedRoom.price_per_night.toLocaleString()} / night
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <h3 className="text-2xl font-serif font-bold text-slate-900">{selectedRoom.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{selectedRoom.description}</p>

              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl text-xs font-medium text-slate-700">
                <div>Occupancy: <span className="font-bold">{selectedRoom.capacity} Guests</span></div>
                <div>Bed Setup: <span className="font-bold">{selectedRoom.bed_type}</span></div>
                <div>Room Size: <span className="font-bold">{selectedRoom.room_size}</span></div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Key Amenities</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedRoom.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-resort-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    const roomName = selectedRoom.name;
                    setSelectedRoom(null);
                    handleBookNow(roomName);
                  }}
                  className="flex-1 bg-resort-600 hover:bg-resort-700 text-white py-3 rounded-lg font-semibold text-sm transition"
                >
                  Book This Room
                </button>
                <a
                  href={getWhatsAppLink(`Hello Le Voyage Resort, I would like to enquire about reserving the ${selectedRoom.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedRoom={bookingRoomName}
      />
    </section>
  );
}
