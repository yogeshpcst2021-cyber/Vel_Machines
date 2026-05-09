import {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const slides = [
  {
    image: '/images/hero-machinery.jpg',
    alt: 'CNC Machining Center',
  },
  {
    image: '/images/product-cnc.jpg',
    alt: 'Precision CNC Machine',
  },
  {
    image: '/images/factory-floor.jpg',
    alt: 'Industrial Factory Floor',
  },
  {
    image: '/images/workshop-sparks.jpg',
    alt: 'Metalworking Workshop',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () =>
      setCurrent(
        (p) => (p + 1) % slides.length
      ),
    []
  );

  const prev = useCallback(
    () =>
      setCurrent(
        (p) =>
          (p - 1 + slides.length) %
          slides.length
      ),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition:
              'opacity 1.2s ease-in-out',
            willChange: 'opacity',
          }}
        >

          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{
              transform:
                i === current
                  ? 'scale(1)'
                  : 'scale(1.08)',
              transition:
                'transform 7000ms ease-out',
            }}
            loading={
              i === 0 ? 'eager' : 'lazy'
            }
          />

        </div>
      ))}

      {/* Premium Beige Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/65 to-background" />

      {/* Side Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface/70 via-transparent to-surface/55" />

      {/* Luxury Soft Glow */}
      <div className="absolute inset-0 bg-beige-dark/10 backdrop-blur-[1px]" />

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-primary'
                : 'w-4 bg-border-light hover:bg-beige-dark'
            }`}
          />
        ))}

      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface/80 backdrop-blur border border-border-light items-center justify-center text-text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
      >

        <ChevronLeft size={22} />

      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface/80 backdrop-blur border border-border-light items-center justify-center text-text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
      >

        <ChevronRight size={22} />

      </button>

    </div>
  );
}