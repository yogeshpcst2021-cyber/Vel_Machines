import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Menu,
  X,
  Phone,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Divisions', path: '/divisions' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'News', path: '/news' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 40);

    window.addEventListener(
      'scroll',
      onScroll
    );

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow =
        'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl border-b border-border-light shadow-lg'
            : 'bg-background/85 backdrop-blur-md border-b border-transparent'
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-4 group"
            >

              <img
                src="/images/logo.png"
                alt="Vel Machines Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col leading-none">

                <span className="text-text-primary font-bold text-3xl tracking-tight">
                  Vel Machines
                </span>

                <span className="text-primary text-xs tracking-[0.28em] uppercase mt-1 font-semibold">
                  Industrial Excellence
                </span>

              </div>

            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    location.pathname ===
                    link.path
                      ? 'text-primary bg-beige-dark border border-border-light'
                      : 'text-text-secondary hover:text-text-primary hover:bg-beige-soft'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">

              {/* WhatsApp */}
              <a
  href="https://wa.me/919789360111"
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-11
    h-11
    rounded-full
    bg-white
    border
    border-border-light
    flex
    items-center
    justify-center
    shadow-md
    hover:scale-110
    hover:shadow-lg
    transition-all
    duration-300
  "
>

  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#25D366"
  >

    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>

  </svg>

</a>

              {/* Enquiry Button */}
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 shadow-md gradient-primary"
              >
                Enquiry
              </Link>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="lg:hidden w-10 h-10 rounded-xl bg-beige-soft border border-border-light flex items-center justify-center text-text-primary"
              aria-label="Toggle menu"
            >

              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}

            </button>

          </div>

        </div>

      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-background backdrop-blur-2xl overflow-y-auto">

          <div className="pt-24 px-6 pb-8 min-h-screen flex flex-col">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all ${
                    location.pathname ===
                    link.path
                      ? 'bg-beige-dark text-primary border border-border-light'
                      : 'text-text-secondary hover:bg-beige-soft hover:text-text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </div>

            {/* Mobile Actions */}
            <div className="mt-8 flex flex-col gap-3">

              {/* WhatsApp */}
              <a
                href="https://wa.me/919789360111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
              >

               <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  strokeWidth="2.2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6"
>

  <path d="M3 21l1.65-4.95A9 9 0 1 1 21 12a9 9 0 0 1-16.35 4.95L3 21" />

  <path d="M8.5 10.5c.3 2 2 3.7 4 4 .5.1 1-.1 1.3-.5l.7-.9c.2-.3.6-.4.9-.2l1.6.8c.4.2.6.7.4 1.1l-.3.7c-.3.8-1.1 1.3-2 1.2-4.2-.5-7.5-3.8-8-8-.1-.9.4-1.7 1.2-2l.7-.3c.4-.2.9 0 1.1.4l.8 1.6c.2.3.1.7-.2.9l-.9.7c-.4.3-.6.8-.5 1.3z" />

</svg>

              </a>

              {/* Contact Button */}
              <Link
                to="/contact"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white gradient-primary"
              >

                <Phone size={18} />

                Send Enquiry

              </Link>

            </div>

          </div>

        </div>
      )}
    </>
  );
}