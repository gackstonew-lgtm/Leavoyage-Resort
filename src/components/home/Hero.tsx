'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import BookingAvailabilityBar from '../booking/BookingAvailabilityBar';
import BookingModal from '../booking/BookingModal';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const heroSlides = [
    {
      image: '/leavoyage-images/gardens.jpeg',
      title: 'Welcome to Le Voyage Resort',
      subtitle: 'Experience comfort, hospitality and serenity in the heart of Kitale.',
    },
    {
      image: '/leavoyage-images/accomodation.jpeg',
      title: 'Luxury Accommodation & Cottages',
      subtitle: 'Unwind in beautifully appointed suites surrounded by tranquil manicured gardens.',
    },
    {
      image: '/leavoyage-images/swimming%20pool.jpeg',
      title: 'World-Class Conferences & Facilities',
      subtitle: 'State-of-the-art halls and stunning outdoor venues for corporate & social occasions.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 bg-resort-950 overflow-hidden">
      
      {/* Background Image Carousel Slider */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transition: 'opacity 1.2s ease-in-out, transform 8s ease-out' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-24 pb-8 flex-1 flex flex-col justify-center items-center">
        
        <div className="inline-flex items-center gap-2 bg-resort-950/80 backdrop-blur-md border border-resort-500/40 text-resort-300 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-lg animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-resort-400 animate-ping"></span>
          Kitale’s Premier Hospitality Destination
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide max-w-4xl leading-tight mb-4 drop-shadow-md">
          {heroSlides[currentSlide].title}
        </h1>

        <p className="text-base sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed mb-8 drop-shadow">
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Dual Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto bg-resort-500 hover:bg-resort-400 text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl hover:shadow-2xl transition duration-200 flex items-center justify-center gap-2 border border-resort-300/30 text-base"
          >
            <span>Book Your Stay</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <Link
            href="/accommodation"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium px-8 py-3.5 rounded-xl transition duration-200 text-center text-base"
          >
            Explore Resort
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-resort-400' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Overlapping Booking / Availability Panel */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 mt-6">
        <BookingAvailabilityBar />
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
