'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGallerySliderProps {
  images: string[];
  alt: string;
  badge?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  aspectRatioClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  showCounter?: boolean;
}

export default function ImageGallerySlider({
  images,
  alt,
  badge,
  className = '',
  imageClassName = '',
  aspectRatioClassName = 'h-60 sm:h-64 lg:h-full min-h-[240px]',
  showDots = true,
  showArrows = true,
  showCounter = true,
}: ImageGallerySliderProps) {
  // Deduplicate and filter valid image URLs
  const validImages = Array.from(new Set(images.filter((img) => typeof img === 'string' && img.trim().length > 0)));
  const galleryList = validImages.length > 0 ? validImages : ['/images/Rooms.jpeg'];
  const hasMultiple = galleryList.length > 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
    },
    [galleryList.length]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % galleryList.length);
    },
    [galleryList.length]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Check if horizontal swipe with threshold of 35px
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      className={`relative overflow-hidden group select-none bg-slate-900 ${aspectRatioClassName} ${className}`}
      onTouchStart={hasMultiple ? handleTouchStart : undefined}
      onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      aria-label={`${alt} gallery, slide ${currentIndex + 1} of ${galleryList.length}`}
    >
      {/* Current Image */}
      <img
        src={galleryList[currentIndex]}
        alt={`${alt} - view ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-all duration-500 ease-out ${imageClassName}`}
        loading="lazy"
      />

      {/* Optional Top Badge (e.g. Price Tag) */}
      {badge && <div className="absolute top-4 left-4 z-10 pointer-events-none">{badge}</div>}

      {/* Multiple Image Controls */}
      {hasMultiple && (
        <>
          {/* Navigation Arrows */}
          {showArrows && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label={`Previous image of ${alt}`}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 bg-resort-950/70 hover:bg-resort-950 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-md border border-white/20 shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={`Next image of ${alt}`}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 bg-resort-950/70 hover:bg-resort-950 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-md border border-white/20 shadow-md opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none active:scale-95"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </>
          )}

          {/* Bottom Bar: Dots & Counter */}
          <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-between px-3 pointer-events-none">
            {/* Dots */}
            {showDots ? (
              <div className="flex items-center gap-1.5 bg-resort-950/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 pointer-events-auto shadow-sm">
                {galleryList.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1} of ${galleryList.length}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-4 bg-resort-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            ) : <div />}

            {/* Counter Pill */}
            {showCounter && (
              <div className="bg-resort-950/80 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/15 shadow-sm">
                {currentIndex + 1} / {galleryList.length}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
