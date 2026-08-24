import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="bg-resort-950 text-white py-16 mb-12 border-b border-resort-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-resort-400 block mb-2">
            Visual Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">
            Resort Photo Gallery
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Take a visual tour of Le Voyage Resort Kitale. Browse our luxury suites, fine dining spaces, conference halls, gardens, and swimming pool.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </div>
    </div>
  );
}
