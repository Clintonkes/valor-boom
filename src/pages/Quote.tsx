import { useState, FormEvent } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ClipboardList,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { siteConfig, services } from '@/config/site';
import { createBooking } from '@/lib/api';

const heroImage =
  'https://images.pexels.com/photos/37554739/pexels-photo-37554739.jpeg?auto=compress&cs=tinysrgb&w=1600';

const serviceTypes = services.map((s) => s.title);
const frequencies = ['One-time', 'Weekly', 'Bi-weekly', 'Monthly', 'Not sure yet'];
const propertySizes = [
  'Under 1/4 acre',
  '1/4 - 1/2 acre',
  '1/2 - 1 acre',
  '1 - 2 acres',
  '2+ acres',
  'Commercial property',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service_type: string;
  property_size: string;
  frequency: string;
  preferred_date: string;
  message: string;
}

export default function Quote() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service_type: '',
    property_size: '',
    frequency: '',
    preferred_date: '',
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
      await createBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service: formData.service_type || undefined,
        lawn_size: formData.property_size || undefined,
        frequency: formData.frequency || undefined,
        preferred_date: formData.preferred_date || undefined,
        notes: formData.message || undefined,
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service_type: '',
        property_size: '',
        frequency: '',
        preferred_date: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 pt-20">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            Quote Request Received!
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Thank you for reaching out to Valor Boom Management. Our team will
            review your request and contact you within 24 hours to schedule your
            free property assessment.
          </p>
          <div className="bg-stone-50 rounded-xl p-5 mb-8 text-left">
            <p className="text-sm text-stone-500 mb-2">Need to talk to us now?</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-emerald-600 font-semibold"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
          <button
            onClick={() => setStatus('idle')}
            className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        title="Get a Free Quote"
        subtitle="Tell us about your property and we will provide a customized quote — no obligation, no pressure."
        breadcrumb="Quote"
        image={heroImage}
      />

      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-stone-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList className="w-6 h-6 text-emerald-400" />
                  <h3 className="font-bold text-lg">What to Expect</h3>
                </div>
                <ul className="space-y-3 text-sm text-stone-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    Free, no-obligation quote
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    On-site property assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    Customized care plan
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    Transparent, upfront pricing
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 space-y-4">
                <h3 className="font-bold text-stone-900">Contact Directly</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-stone-600 hover:text-emerald-600 transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm break-all">{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3 text-stone-600">
                  <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{' '}
                    {siteConfig.address.zip}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8"
              >
                <h2 className="text-2xl font-bold text-stone-900 mb-2">
                  Request Your Quote
                </h2>
                <p className="text-stone-500 text-sm mb-8">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>

                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-700 font-medium text-sm">
                        Submission failed
                      </p>
                      <p className="text-red-600 text-sm">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-5">
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
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                        placeholder="(561) 555-0100"
                      />
                    </div>
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
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                      placeholder="123 Main St, Jupiter, FL 33477"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service_type"
                        required
                        value={formData.service_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                        <option value="Multiple services">Multiple services</option>
                        <option value="Full maintenance plan">
                          Full maintenance plan
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Property Size
                      </label>
                      <select
                        name="property_size"
                        value={formData.property_size}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select size</option>
                        {propertySizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Service Frequency
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select frequency</option>
                        {frequencies.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="preferred_date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about any specific concerns, problem areas, or goals for your property..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-stone-900 font-semibold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">
                  By submitting, you agree to be contacted about your quote
                  request. We respect your privacy and never share your info.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-12 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-10 h-10 text-emerald-400" />
            <div>
              <p className="text-white font-semibold text-lg">
                Prefer to talk to a person?
              </p>
              <p className="text-stone-400 text-sm">
                Call us directly and we will be happy to help.
              </p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
