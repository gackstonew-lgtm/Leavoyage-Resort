'use client';

import { useState } from 'react';
import { Calendar, Users, Bed, Search } from 'lucide-react';
import BookingModal from './BookingModal';

export default function BookingAvailabilityBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('Deluxe Executive Suite');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-floating p-4 sm:p-6 border border-slate-100/80">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          {/* Check-in */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-resort-600" />
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-resort-600" />
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-resort-600" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
            >
              <option value="1 Guest">1 Adult</option>
              <option value="2 Guests">2 Adults</option>
              <option value="3 Guests">3 Adults / Family</option>
              <option value="4+ Guests">4+ Guests / Cottage</option>
            </select>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-resort-600" />
              Accommodation
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-resort-500 focus:outline-none"
            >
              <option value="Deluxe Executive Suite">Deluxe Executive Suite</option>
              <option value="Superior Double Room">Superior Double Room</option>
              <option value="Family Luxury Cottage">Family Luxury Cottage</option>
              <option value="Standard Twin Room">Standard Twin Room</option>
            </select>
          </div>

          {/* Submit CTA */}
          <div>
            <button
              type="submit"
              className="w-full bg-resort-600 hover:bg-resort-700 text-white font-semibold text-sm py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 border border-resort-400/40 active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>Check Rates</span>
            </button>
          </div>
        </form>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedRoom={roomType}
      />
    </>
  );
}
