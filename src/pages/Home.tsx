import { Link } from 'react-router-dom';
import {
  Leaf,
  Scissors,
  Shrub,
  Droplets,
  Sprout,
  Trees,
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
  Users,
} from 'lucide-react';
import { siteConfig, services, testimonials } from '@/config/site';
import StarRating from '@/components/StarRating';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors,
  Shrub,
  Leaf,
  Droplets,
  Trees,
  Sprout,
};

const heroImage =
  'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600';
const mowingImage =
  'https://images.pexels.com/photos/4162016/pexels-photo-4162016.jpeg?auto=compress&cs=tinysrgb&w=1200';
const workerImage =
  'https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 25, 23, 0.55), rgba(28, 25, 23, 0.35)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-5 py-2 mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">
              Serving Jupiter, FL &amp; Surrounding Areas
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            A Lush, Healthy Lawn
            <br />
            <span className="text-emerald-400">Starts Here</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional lawn care and landscape management tailored to South
            Florida's unique climate. Reliable service, exceptional results —
            every visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/30 flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="bg-stone-50 -mt-1 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Licensed & Insured', sub: 'Fully protected' },
              { icon: Clock, title: 'On-Time Service', sub: 'Every visit' },
              { icon: Award, title: '5-Star Rated', sub: 'By our customers' },
              { icon: Users, title: 'Trusted Crews', sub: 'Consistent team' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-stone-100"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{item.title}</p>
                  <p className="text-stone-500 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
              Complete Lawn Care Solutions
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From routine mowing to full landscape management, we handle every
              aspect of keeping your property looking its best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Leaf;
              return (
                <Link
                  key={service.slug}
                  to="/services"
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-stone-900" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {service.short}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src={workerImage}
            alt="Lawn care professional"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                The Difference Is in the Details
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                At Valor Boom Management, we treat every property as if it were
                our own. Our experienced crews, professional equipment, and
                commitment to quality mean you get a beautiful lawn without the
                hassle.
              </p>
              <div className="space-y-4">
                {[
                  'Same crew every visit — they know your property',
                  'Professional-grade equipment for clean results',
                  'Customized care plans for your grass type and climate',
                  'Reliable scheduling with weather-aware rescheduling',
                  'Fully licensed and insured for your peace of mind',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-200">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-6 py-3 rounded-xl mt-8 transition-all duration-200"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mowingImage}
                  alt="Professional lawn mowing"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-stone-900 rounded-2xl p-6 shadow-xl hidden md:block">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm font-medium">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Properties Served' },
              { value: '7+', label: 'Years of Experience' },
              { value: '98%', label: 'Customer Retention' },
              { value: '4.9', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-stone-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-stone-800 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We are proud to serve our community and earn our customers' trust
              with every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300"
              >
                <StarRating rating={t.rating} size="md" />
                <p className="text-stone-700 mt-4 mb-5 leading-relaxed text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-stone-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Lawn You Will Love?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Our team will assess your
            property and provide a customized care plan that fits your needs and
            budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/30 flex items-center gap-2"
            >
              Request Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
