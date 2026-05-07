import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = 'Ready to Upgrade Your Production?',
  subtitle = 'Get in touch with our experts for a personalized consultation and quote.',
  buttonText = 'Get a Quote',
  buttonLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FAF6EF]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 via-[#38BDF8]/5 to-[#10B981]/5" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">

        {/* Card */}
        <div className="rounded-3xl bg-[#F5F0E6]/90 backdrop-blur-2xl border border-[#D6C7B2] shadow-xl p-10 md:p-16">

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-[#5C4B3B] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary Button */}
            <Link
              to={buttonLink}
              className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/20 hover:scale-105 flex items-center gap-2"
              style={{
                background:
                  'linear-gradient(135deg, #2563EB, #38BDF8)',
              }}
            >
              {buttonText}

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />

            </Link>

            {/* Phone Button */}
            <a
              href="tel:+919789360111"
              className="px-8 py-4 rounded-xl bg-[#FAF6EF] border border-[#D6C7B2] text-[#2B2B2B] font-semibold hover:bg-[#EFE7DA] hover:border-[#CDBAA0] transition-all duration-300 flex items-center gap-2"
            >

              <Phone size={18} />

              +91 9789 360 111

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}