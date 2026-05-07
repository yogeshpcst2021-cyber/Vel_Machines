import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setProgress(0);

    const p1 = setTimeout(
      () => setProgress(40),
      50
    );

    const p2 = setTimeout(
      () => setProgress(75),
      200
    );

    const p3 = setTimeout(
      () => setProgress(100),
      400
    );

    const done = setTimeout(
      () => setLoading(false),
      700
    );

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(done);
    };
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF6EF] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[120px]" />

      <div className="absolute w-[350px] h-[350px] bg-[#E9E1D3]/50 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Loader Circle */}
        <div className="relative w-32 h-32 mb-6">

          {/* Outer Ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: '2s' }}
            viewBox="0 0 100 100"
          >

            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#D6C7B2"
              strokeWidth="2"
              strokeDasharray="180 360"
              strokeLinecap="round"
              opacity="0.6"
            />

            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              strokeDasharray="90 360"
              strokeLinecap="round"
            />

          </svg>

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="w-16 h-16 rounded-2xl bg-[#F5F0E6] border border-[#D6C7B2] shadow-xl flex items-center justify-center overflow-hidden">

              <img
                src="/images/logo.png"
                alt="Vel Machines Logo"
                className="w-12 h-12 object-contain"
              />

            </div>

          </div>

        </div>

        {/* Brand Name */}
        <h2 className="text-[#2B2B2B] font-bold text-2xl tracking-tight mb-1">
          Vel Machines
        </h2>

        <p className="text-[#5C4B3B] text-sm tracking-[0.2em] uppercase mb-6">
          Industrial Excellence
        </p>

        {/* Progress Bar */}
        <div className="w-60 h-2 bg-[#E9E1D3] rounded-full overflow-hidden border border-[#D6C7B2]">

          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background:
                'linear-gradient(90deg, #2563EB, #38BDF8)',
            }}
          />

        </div>

        {/* Percentage */}
        <p className="text-[#5C4B3B] text-xs mt-3 font-semibold tracking-wide tabular-nums">
          {progress}%
        </p>

      </div>

    </div>
  );
}