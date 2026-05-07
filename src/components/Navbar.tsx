import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
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
            ? 'bg-[#F5F0E6]/95 backdrop-blur-xl border-b border-[#D6C7B2] shadow-lg'
            : 'bg-[#FAF6EF]/85 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src="/images/logo.png"
                alt="Vel Machines Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col leading-none">
                <span className="text-[#2B2B2B] font-bold text-3xl tracking-tight">
                  Vel Machines
                </span>

                <span className="text-[#2563EB] text-xs tracking-[0.28em] uppercase mt-1 font-semibold">
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
                    location.pathname === link.path
                      ? 'text-[#2563EB] bg-[#E9E1D3] border border-[#D6C7B2]'
                      : 'text-[#5C4B3B] hover:text-[#2B2B2B] hover:bg-[#EFE7DA]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919789360111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EFE7DA] border border-[#D6C7B2] flex items-center justify-center text-[#10B981] hover:scale-110 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>

              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl font-semibold text-textDark text-sm transition-all duration-300 hover:scale-105 shadow-md"
                style={{
                  background:
                    'linear-gradient(135deg, #2563EB, #38BDF8)',
                }}
              >
                Enquiry
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-[#EFE7DA] border border-[#D6C7B2] flex items-center justify-center text-[#2B2B2B]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#FAF6EF] backdrop-blur-2xl overflow-y-auto">
          <div className="pt-24 px-6 pb-8 min-h-screen flex flex-col">

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-5 py-4 rounded-xl text-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-[#E9E1D3] text-[#2563EB] border border-[#D6C7B2]'
                      : 'text-[#5C4B3B] hover:bg-[#EFE7DA] hover:text-[#2B2B2B]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/919789360111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E8F8F0] border border-[#B7E4C7] text-[#10B981] font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-textDark"
                style={{
                  background:
                    'linear-gradient(135deg, #2563EB, #38BDF8)',
                }}
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