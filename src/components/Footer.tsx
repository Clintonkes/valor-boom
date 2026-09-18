import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { siteConfig, services } from '@/config/site';

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/quote', label: 'Get a Quote' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
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
            <p className="text-sm text-stone-400 leading-relaxed mb-5">
              {siteConfig.tagline} serving Jupiter, FL and the surrounding
              Palm Beach County area.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500 flex items-center justify-center text-stone-300 hover:text-stone-900 transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500 flex items-center justify-center text-stone-300 hover:text-stone-900 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services"
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-sm text-stone-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-stone-400 hover:text-emerald-400 transition-colors duration-200 break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-stone-500">
            Licensed &amp; Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
