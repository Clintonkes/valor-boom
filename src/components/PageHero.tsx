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
    <section
      className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 25, 23, 0.7), rgba(28, 25, 23, 0.5)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center px-4 z-10 pt-16">
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
