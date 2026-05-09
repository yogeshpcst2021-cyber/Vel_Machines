import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    label: 'High Speed',
    value: '12,000 RPM',
  },
  {
    icon: Shield,
    label: 'Precision',
    value: '±0.002mm',
  },
  {
    icon: TrendingUp,
    label: 'Efficiency',
    value: '98.5%',
  },
];

export default function LiquidGlassShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({
    x: 0.5,
    y: 0.5,
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect =
        section.getBoundingClientRect();

      setMousePos({
        x:
          (e.clientX - rect.left) /
          rect.width,
        y:
          (e.clientY - rect.top) /
          rect.height,
      });
    };

    section.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    );

    return () =>
      section.removeEventListener(
        'mousemove',
        handleMouseMove
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-background"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(90,70,50,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90,70,50,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Mouse Glow 1 */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-all duration-700 ease-out bg-primary/10"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform:
            'translate(-50%, -50%)',
        }}
      />

      {/* Mouse Glow 2 */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ease-out bg-beige-dark/50"
        style={{
          left: `${(1 - mousePos.x) * 100}%`,
          top: `${(1 - mousePos.y) * 100}%`,
          transform:
            'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="relative">

            <div className="relative rounded-3xl p-10 md:p-14 overflow-hidden bg-surface/70 backdrop-blur-[40px] border border-border-light shadow-[0_10px_40px_rgba(214,199,178,0.25)]">

              {/* Top Reflection */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Corner Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 bg-primary-light/30" />

              <div className="relative z-10">

                {/* Badge */}
                <div className="flex items-center gap-3 mb-6">

                  <div className="w-10 h-10 rounded-xl flex items-center justify-center gradient-primary">

                    <span className="text-white font-bold text-lg">
                      V
                    </span>

                  </div>

                  <span className="text-text-secondary text-sm font-medium tracking-wide uppercase">
                    Next-Gen Technology
                  </span>

                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-6">

                  Precision Engineering{' '}

                  <span className="text-primary">
                    Redefined
                  </span>

                </h2>

                {/* Paragraph */}
                <p className="text-text-secondary text-lg leading-relaxed mb-8">

                  Experience the future of industrial
                  machining with our state-of-the-art
                  CNC solutions. Built for accuracy,
                  designed for endurance.

                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                  <Link
                    to="/products"
                    className="group px-8 py-4 rounded-xl font-semibold text-white text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 gradient-primary"
                  >

                    Explore CNC Range

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />

                  </Link>

                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-xl font-semibold text-text-primary text-center transition-all duration-300 bg-white/40 border border-border-light hover:bg-beige-soft"
                  >
                    Request Demo
                  </Link>

                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -right-5 md:-right-8 rounded-2xl p-5 hidden md:block bg-surface/80 backdrop-blur-[30px] border border-border-light shadow-[0_10px_30px_rgba(214,199,178,0.2)]">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl flex items-center justify-center gradient-primary">

                  <Zap
                    size={20}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-text-primary font-bold text-lg">
                    5000+
                  </p>

                  <p className="text-text-secondary text-xs">
                    Machines Delivered
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {features.map((feat) => (
              <div
                key={feat.label}
                className="relative rounded-2xl p-6 text-center group hover:scale-[1.03] transition-all duration-300 bg-surface/70 backdrop-blur-[20px] border border-border-light"
              >

                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-transparent" />

                <div className="relative z-10">

                  <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-white/40 border border-border-light">

                    <feat.icon
                      size={22}
                      className="text-primary"
                    />

                  </div>

                  <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">
                    {feat.label}
                  </p>

                  <p className="text-text-primary font-bold text-xl">
                    {feat.value}
                  </p>

                </div>

              </div>
            ))}

            {/* Image Card */}
            <div className="sm:col-span-3 rounded-2xl overflow-hidden relative h-60 group border border-border-light">

              <img
                src="/images/product-cnc.jpg"
                alt="CNC Machine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">

                <p className="text-surface text-xs uppercase tracking-wider mb-1">
                  Featured Machine
                </p>

                <p className="text-white font-semibold text-lg">
                  VMC-850 Vertical Machining Center
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}