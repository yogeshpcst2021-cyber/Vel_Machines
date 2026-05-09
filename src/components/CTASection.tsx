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
    <section className="relative py-24 overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary-light/5 to-emerald-500/5" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">

        {/* Card */}
        <div className="rounded-3xl bg-surface/90 backdrop-blur-2xl border border-border-light shadow-xl p-10 md:p-16">

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary Button */}
            <Link
              to={buttonLink}
              className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 gradient-primary"
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
              className="px-8 py-4 rounded-xl bg-background border border-border-light text-text-primary font-semibold hover:bg-beige-soft hover:border-beige-dark transition-all duration-300 flex items-center gap-2"
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