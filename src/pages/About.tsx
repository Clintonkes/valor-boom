import { Link } from 'react-router-dom';
import {
  Leaf,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Target,
  ArrowRight,
  Phone,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/config/site';

const heroImage =
  'https://images.pexels.com/photos/9029162/pexels-photo-9029162.jpeg?auto=compress&cs=tinysrgb&w=1600';
const teamImage =
  'https://images.pexels.com/photos/4920293/pexels-photo-4920293.jpeg?auto=compress&cs=tinysrgb&w=1200';
const propertyImage =
  'https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&w=1200';

const values = [
  {
    icon: Heart,
    title: 'Passion for Quality',
    description:
      'We take genuine pride in our work. Every lawn we touch reflects our commitment to excellence and attention to detail.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability & Trust',
    description:
      'We show up when we say we will, every time. Our customers trust us with their properties and we honor that trust.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description:
      'From crisp edges to spotless cleanup, we sweat the small stuff so your property always looks polished.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'We listen, we communicate, and we adapt. Your satisfaction drives everything we do.',
  },
];

const milestones = [
  { year: '2017', title: 'Founded', text: 'Valor Boom Management LLC was established in Jupiter, FL.' },
  { year: '2019', title: '100 Properties', text: 'Reached our first 100 recurring service accounts.' },
  { year: '2021', title: 'Service Expansion', text: 'Added irrigation, fertilization, and full landscape management.' },
  { year: '2023', title: '500+ Customers', text: 'Now serving over 500 properties across Palm Beach County.' },
];

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Dedicated to keeping South Florida beautiful, one property at a time."
        breadcrumb="About"
        image={heroImage}
      />

      {/* Company Story */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-6">
                Rooted in Jupiter, Growing with Our Community
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Valor Boom Management LLC was founded with a simple mission:
                  provide exceptional lawn care that homeowners and businesses
                  in Jupiter can rely on. What started as a small operation has
                  grown into a trusted full-service lawn care company serving
                  hundreds of properties across Palm Beach County.
                </p>
                <p>
                  We understand South Florida's unique climate and the specific
                  needs of our local grasses, plants, and soil. That local
                  expertise, combined with professional equipment and a
                  dedicated crew, means your property gets the exact care it
                  needs to thrive year-round.
                </p>
                <p>
                  Today, we are proud to be one of Jupiter's most recommended
                  lawn care companies — but we have never lost the personal
                  touch that got us here. When you call Valor Boom, you are
                  working with a team that genuinely cares about your property.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={teamImage}
                  alt="Our team at work"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-stone-900 rounded-2xl px-6 py-4 shadow-xl hidden md:block">
                <p className="text-3xl font-bold">7+</p>
                <p className="text-sm font-medium">Years Serving Jupiter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-stone-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-stone-300 leading-relaxed">
                To deliver consistently exceptional lawn care and landscape
                management that enhances the beauty and value of every property
                we serve. We commit to reliable service, honest communication,
                and results that exceed expectations — every single visit.
              </p>
            </div>
            <div className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700">
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-5">
                <Leaf className="w-7 h-7 text-stone-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-stone-300 leading-relaxed">
                To be the most trusted and recommended lawn care company in
                Palm Beach County — known not just for beautiful lawns, but for
                the integrity, professionalism, and community spirit that define
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{value.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
              Milestones Along the Way
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-stone-900 font-bold text-sm flex-shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-stone-200 mt-2 flex-1" />
                  )}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="font-bold text-lg text-stone-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-stone-600">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Image */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl relative">
            <img
              src={propertyImage}
              alt="Property we maintain"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-lg">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Proudly Serving Our Community
                </h2>
                <p className="text-stone-200 mb-6">
                  Jupiter, Palm Beach Gardens, Tequesta, North Palm Beach, and
                  surrounding areas. Local company, local crew, local commitment.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Check If We Serve Your Area
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Let's Transform Your Property
          </h2>
          <p className="text-stone-800 mb-8">
            Join hundreds of satisfied customers who trust Valor Boom with their
            lawn care needs.
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
