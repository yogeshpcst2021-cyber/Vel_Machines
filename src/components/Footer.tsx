import { Link } from 'react-router-dom';

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Linkedin,
  Facebook,
  Twitter,
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Divisions', path: '/divisions' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
  ],

  products: [
    { name: 'CNC Machines', path: '/products' },
    { name: 'Lathe Machines', path: '/products' },
    { name: 'Milling Machines', path: '/products' },
    { name: 'Grinding Machines', path: '/products' },
  ],

  support: [
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Enquiry', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border-light bg-surface/95 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-4 mb-6 group"
            >

              <img
                src="/images/logo.png"
                alt="Vel Machines Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col">

                <span className="text-text-primary font-bold text-2xl tracking-tight leading-none">
                  Vel Machines
                </span>

                <span className="text-primary text-[10px] tracking-[0.2em] uppercase mt-1 font-semibold">
                  Industrial Excellence
                </span>

              </div>

            </Link>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              India's premier industrial machinery solutions
              provider. 28+ years of engineering excellence
              delivering cutting-edge machines across the
              nation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">

              {[Linkedin, Facebook, Twitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-background border border-border-light flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}

            </div>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>

            <ul className="space-y-3">

              {footerLinks.company.map((link) => (
                <li key={link.path + link.name}>

                  <Link
                    to={link.path}
                    className="text-text-secondary text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                  >

                    {link.name}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Products */}
          <div>

            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>

            <ul className="space-y-3">

              {footerLinks.products.map((link) => (
                <li key={link.path + link.name}>

                  <Link
                    to={link.path}
                    className="text-text-secondary text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                  >

                    {link.name}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">

                <MapPin
                  size={16}
                  className="text-primary mt-0.5 shrink-0"
                />

                <span className="text-text-secondary text-sm">
                  Coimbatore, Chennai, Bangalore,
                  Pune, Delhi
                </span>

              </li>

              <li className="flex items-center gap-3">

                <Phone
                  size={16}
                  className="text-primary shrink-0"
                />

                <a
                  href="tel:+919789360111"
                  className="text-text-secondary text-sm hover:text-primary transition-colors"
                >
                  +91 9789 360 111
                </a>

              </li>

              <li className="flex items-center gap-3">

                <Mail
                  size={16}
                  className="text-primary shrink-0"
                />

                <a
                  href="mailto:info@velmachines.com"
                  className="text-text-secondary text-sm hover:text-primary transition-colors"
                >
                  info@velmachines.com
                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Vel Machines.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="text-text-secondary text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-text-secondary text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}