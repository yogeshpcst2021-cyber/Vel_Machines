import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

const locations = [
  {
    city: 'Coimbatore',
    address:
      '123 Industrial Estate, Peelamedu, Coimbatore - 641004',
    phone: '+91 9789 360 111',
  },
  {
    city: 'Chennai',
    address:
      '45 Mount Road, Teynampet, Chennai - 600018',
    phone: '+91 9789 360 112',
  },
  {
    city: 'Bangalore',
    address: '78 MG Road, Bangalore - 560001',
    phone: '+91 9789 360 113',
  },
  {
    city: 'Pune',
    address: '32 Hinjewadi Phase 1, Pune - 411057',
    phone: '+91 9789 360 114',
  },
  {
    city: 'Delhi',
    address:
      '15 Okhla Industrial Area, New Delhi - 110020',
    phone: '+91 9789 360 115',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="pt-24 pb-12 bg-background">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/workshop-sparks.jpg"
            alt="Contact"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-background/80 to-background" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">

              Get in{' '}

              <span className="text-gradient-primary">
                Touch
              </span>

            </h1>

            <p className="text-text-secondary text-lg leading-relaxed">

              Have a question or need a quote? Reach out to us
              and our team will respond within 24 hours.

            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="py-12 bg-surface">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-5 gap-8">

            {/* Form */}
            <div className="lg:col-span-3">

              <GlassCard>

                <div className="p-8">

                  {submitted ? (
                    <div className="text-center py-12">

                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

                      <h3 className="text-text-primary font-semibold text-xl mb-2">
                        Message Sent!
                      </h3>

                      <p className="text-text-secondary">
                        Thank you for reaching out. We'll contact you shortly.
                      </p>

                    </div>
                  ) : (
                    <>

                      <h3 className="text-text-primary font-semibold text-xl mb-6">
                        Send us a Message
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="grid sm:grid-cols-2 gap-5">

                          <div>

                            <label className="block text-text-secondary text-sm mb-2">
                              Full Name *
                            </label>

                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white border border-border-light text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-all"
                              placeholder="Your name"
                            />

                          </div>

                          <div>

                            <label className="block text-text-secondary text-sm mb-2">
                              Email *
                            </label>

                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white border border-border-light text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-all"
                              placeholder="your@email.com"
                            />

                          </div>

                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">

                          <div>

                            <label className="block text-text-secondary text-sm mb-2">
                              Phone
                            </label>

                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white border border-border-light text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-all"
                              placeholder="+91 98765 43210"
                            />

                          </div>

                          <div>

                            <label className="block text-text-secondary text-sm mb-2">
                              Company
                            </label>

                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl bg-white border border-border-light text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-all"
                              placeholder="Your company"
                            />

                          </div>

                        </div>

                        <div>

                          <label className="block text-text-secondary text-sm mb-2">
                            Message *
                          </label>

                          <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-border-light text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-all resize-none"
                            placeholder="How can we help you?"
                          />

                        </div>

                        <button
                          type="submit"
                          className="w-full px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg gradient-primary"
                        >

                          <Send size={18} className="inline mr-2" />

                          Send Message

                        </button>

                      </form>

                    </>
                  )}

                </div>

              </GlassCard>

            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">

              <GlassCard>

                <div className="p-6 space-y-5">

                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">

                      <Mail size={18} className="text-primary" />

                    </div>

                    <div>

                      <h4 className="text-text-primary font-medium mb-1">
                        Email
                      </h4>

                      <a
                        href="mailto:info@velmachines.com"
                        className="text-text-secondary text-sm hover:text-primary transition-colors"
                      >
                        info@velmachines.com
                      </a>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">

                      <Phone size={18} className="text-primary" />

                    </div>

                    <div>

                      <h4 className="text-text-primary font-medium mb-1">
                        Phone
                      </h4>

                      <a
                        href="tel:+919789360111"
                        className="text-text-secondary text-sm hover:text-primary transition-colors"
                      >
                        +91 9789 360 111
                      </a>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">

                      <Clock size={18} className="text-primary" />

                    </div>

                    <div>

                      <h4 className="text-text-primary font-medium mb-1">
                        Working Hours
                      </h4>

                      <p className="text-text-secondary text-sm">
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>

                    </div>

                  </div>

                  <a
                    href="https://wa.me/919789360111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium hover:bg-green-100 transition-all"
                  >

                    <MessageCircle size={18} />

                    Chat on WhatsApp

                  </a>

                </div>

              </GlassCard>

              {/* Locations */}
              <div className="space-y-3">

                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="rounded-xl bg-white border border-border-light p-4 hover:bg-background hover:border-primary/20 transition-all cursor-pointer"
                  >

                    <div className="flex items-start gap-3">

                      <MapPin
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                      />

                      <div>

                        <h4 className="text-text-primary font-medium text-sm">
                          {loc.city}
                        </h4>

                        <p className="text-text-secondary text-xs mt-1">
                          {loc.address}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}