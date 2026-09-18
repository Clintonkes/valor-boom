import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { faqs, siteConfig } from '@/config/site';

const heroImage =
  'https://images.pexels.com/photos/8443729/pexels-photo-8443729.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our lawn care services."
        breadcrumb="FAQ"
        image={heroImage}
      />

      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-stone-900">
              Got Questions? We Have Answers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-emerald-300 shadow-lg'
                    : 'border-stone-100 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-stone-900 text-base">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-emerald-500 text-stone-900 rotate-180'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-stone-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-stone-300 mb-6">
              We are happy to help. Reach out and we will answer any questions
              you have about our services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                Send a Message
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
