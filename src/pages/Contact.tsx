import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/config/site';
import { createContact } from '@/lib/api';

const heroImage =
  'https://images.pexels.com/photos/20534859/pexels-photo-20534859.jpeg?auto=compress&cs=tinysrgb&w=1600';

const subjectOptions = [
  'General Inquiry',
  'Schedule a Service',
  'Billing Question',
  'Compliment or Feedback',
  'Complaint or Issue',
  'Employment Opportunity',
  'Other',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await createContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject || undefined,
        message: formData.message,
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`
  )}&output=embed`;

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or need to get in touch? We are here to help."
        breadcrumb="Contact"
        image={heroImage}
      />

      {/* Contact Cards */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a
              href={`tel:${siteConfig.phone}`}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Phone className="w-8 h-8 text-emerald-600 group-hover:text-stone-900 transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-stone-900 mb-1">Call Us</h3>
              <p className="text-stone-500 text-sm mb-2">Mon - Sat</p>
              <p className="text-emerald-600 font-semibold">{siteConfig.phone}</p>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                <Mail className="w-8 h-8 text-emerald-600 group-hover:text-stone-900 transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-stone-900 mb-1">Email Us</h3>
              <p className="text-stone-500 text-sm mb-2">Anytime</p>
              <p className="text-emerald-600 font-semibold text-sm break-all">
                {siteConfig.email}
              </p>
            </a>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-stone-900 mb-1">Visit Us</h3>
              <p className="text-stone-500 text-sm mb-2">Our Office</p>
              <p className="text-stone-700 text-sm leading-relaxed">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{' '}
                {siteConfig.address.zip}
              </p>
            </div>
          </div>

          {/* Form + Hours + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                  <h2 className="text-2xl font-bold text-stone-900">
                    Send Us a Message
                  </h2>
                </div>
                <p className="text-stone-500 text-sm mb-8">
                  Fill out the form and we will get back to you as soon as
                  possible.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-stone-600 mb-6">
                      Thanks for reaching out. We will respond to your message
                      shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-700 font-medium text-sm">
                            Could not send message
                          </p>
                          <p className="text-red-600 text-sm">{errorMsg}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                          placeholder="(561) 555-0100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Select a subject</option>
                          {subjectOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-stone-900 font-semibold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Hours + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Business Hours */}
              <div className="bg-stone-900 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-6 h-6 text-emerald-400" />
                  <h3 className="font-bold text-white text-lg">Business Hours</h3>
                </div>
                <ul className="space-y-3">
                  {siteConfig.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm border-b border-stone-800 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-stone-300 font-medium">
                        {h.day}
                      </span>
                      <span
                        className={
                          h.time === 'Closed'
                            ? 'text-red-400'
                            : 'text-emerald-400'
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                <div className="p-5 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-emerald-500" />
                    <div>
                      <h3 className="font-bold text-stone-900">Find Us</h3>
                      <p className="text-stone-500 text-sm">
                        {siteConfig.address.street}, {siteConfig.address.city},{' '}
                        {siteConfig.address.state} {siteConfig.address.zip}
                      </p>
                    </div>
                  </div>
                </div>
                <iframe
                  title="Office location map"
                  src={mapSrc}
                  className="w-full h-[260px] border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need a Quote Banner */}
      <section className="py-12 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-1">
              Looking for pricing?
            </h3>
            <p className="text-stone-800 text-sm">
              Use our quote request form for a free, customized estimate.
            </p>
          </div>
          <Link
            to="/quote"
            className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
