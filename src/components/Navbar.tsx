import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/quote', label: 'Get a Quote' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-stone-900/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="w-6 h-6 text-stone-900" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-tight">
                Valor Boom
              </span>
              <span className="text-emerald-400 text-xs font-medium tracking-wide uppercase">
                Lawn Care
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-stone-300 hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden lg:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-stone-900 border-t border-stone-700 mt-2">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-stone-300 hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 bg-emerald-500 text-stone-900 font-semibold px-5 py-3 rounded-lg mt-2"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
