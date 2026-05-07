import { useEffect, useRef } from 'react';

export default function FloatingBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const x =
        (e.clientX / window.innerWidth - 0.5) * 20;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 20;

      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 transition-transform duration-1000 ease-out"
      style={{ willChange: 'transform' }}
    >

      {/* Main Beige Glow */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#E9E1D3]/40 rounded-full blur-[120px] animate-pulse" />

      {/* Warm Cream Glow */}
      <div
        className="absolute top-[40%] right-[10%] w-[420px] h-[420px] bg-[#F5F0E6]/50 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* Soft Blue Accent */}
      <div
        className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] bg-[#2563EB]/8 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: '4s' }}
      />

      {/* Sky Blue Glow */}
      <div
        className="absolute top-[60%] right-[40%] w-[300px] h-[300px] bg-[#38BDF8]/10 rounded-full blur-[80px] animate-pulse"
        style={{ animationDelay: '3s' }}
      />

      {/* Extra Luxury Warm Glow */}
      <div
        className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] bg-[#EFE7DA]/35 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: '5s' }}
      />

    </div>
  );
}