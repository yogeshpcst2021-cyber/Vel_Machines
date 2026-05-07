import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-[#F5F0E6]/85 backdrop-blur-2xl border border-[#D6C7B2] overflow-hidden shadow-md shadow-[#D6C7B2]/20 ${
        glow
          ? 'hover:border-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/10'
          : 'hover:border-[#CDBAA0]'
      } ${
        hover
          ? 'hover:-translate-y-1 hover:scale-[1.02]'
          : ''
      } transition-all duration-500 ${className}`}
    >

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#EFE7DA]/30 pointer-events-none" />

      {/* Soft Inner Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}