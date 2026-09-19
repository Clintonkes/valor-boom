import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
}: PageHeroProps) {
  return (
    <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* A plain <img> (unlike a CSS background-image) can carry a fetch
          priority hint, so this hero — the page's LCP element — starts
          downloading as early and as urgently as possible. */}
      <img
        src={image}
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/50" />
      <div className="relative text-center px-4 z-10 pt-16">
        <nav className="flex items-center justify-center gap-2 text-sm text-stone-300 mb-4">
          <Link to="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-emerald-400">{breadcrumb}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-stone-200 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
