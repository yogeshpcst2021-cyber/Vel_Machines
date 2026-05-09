import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero-machinery.jpg',
  '/images/product-cnc.jpg',
  '/images/lathe-machine.jpg',
  '/images/milling-machine.jpg',
  '/images/factory-floor.jpg',
];

export default function HeroBackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">

      {/* Slides */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
          }}
        >

          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform:
                i === current
                  ? 'scale(1)'
                  : 'scale(1.08)',
              transition:
                'transform 8000ms ease-out',
            }}
          />

        </div>
      ))}

      {/* Premium Beige Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/70 to-background/45" />

      {/* Soft Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-surface/35" />

      {/* Luxury Warm Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-beige-dark/10 backdrop-blur-[1px]" />

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">

        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-primary'
                : 'w-4 bg-border-light hover:bg-beige-dark'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}

      </div>

    </div>
  );
}