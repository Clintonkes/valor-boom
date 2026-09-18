import { Link } from 'react-router-dom';
import {
  Leaf,
  Scissors,
  Shrub,
  Droplets,
  Sprout,
  Trees,
  Check,
  ArrowRight,
  Phone,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { siteConfig, services } from '@/config/site';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors,
  Shrub,
  Leaf,
  Droplets,
  Trees,
  Sprout,
};

const heroImage =
  'https://images.pexels.com/photos/38936351/pexels-photo-38936351.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Services() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive lawn care and landscape management designed for South Florida properties."
        breadcrumb="Services"
        image={heroImage}
      />

      {/* Services List */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Leaf;
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`relative ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg hidden md:flex">
                      <Icon className="w-8 h-8 text-stone-900" />
                    </div>
                  </div>
                  <div
                    className={
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="md:hidden w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      Request This Service
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Simple Process, Exceptional Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Request a Quote',
                text: 'Fill out our online form or call us. We will gather details about your property and needs.',
              },
              {
                step: '02',
                title: 'Free Assessment',
                text: 'We visit your property to assess the lawn, discuss your goals, and provide a custom plan.',
              },
              {
                step: '03',
                title: 'Schedule Service',
                text: 'Choose a service plan and schedule that works for you. We set everything up hassle-free.',
              },
              {
                step: '04',
                title: 'Enjoy Your Lawn',
                text: 'Our crew takes care of everything. You sit back and enjoy a beautiful, healthy property.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-stone-800/50 rounded-2xl p-6 border border-stone-700 text-center"
              >
                <div className="text-5xl font-bold text-emerald-500/30 mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-stone-800 mb-8">
            Get your free quote today and see the Valor Boom difference for
            yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white/20 hover:bg-white/30 text-stone-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
