import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { galleryImages } from '@/config/site';

const heroImage =
  'https://images.pexels.com/photos/6728925/pexels-photo-6728925.jpeg?auto=compress&cs=tinysrgb&w=1600';

const categories = ['All', 'Mowing', 'Trimming', 'Cleanup', 'Irrigation', 'Full Service'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      <PageHero
        title="Our Work"
        subtitle="See the Valor Boom difference in action. Real properties, real results."
        breadcrumb="Gallery"
        image={heroImage}
      />

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-stone-900 shadow-lg shadow-emerald-500/20'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, index) => (
              <div
                key={`${img.url}-${index}`}
                className="group relative rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                onClick={() => setLightbox(img.url)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="inline-block bg-emerald-500 text-stone-900 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-medium">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 hover:text-emerald-400 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-stone-300 mb-8">
            Let us bring the same level of care to your property. Get a free quote
            today.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/30"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
