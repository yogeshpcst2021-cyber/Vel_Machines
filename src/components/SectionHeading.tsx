interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        centered ? 'text-center' : ''
      }`}
    >

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 leading-tight">

        {title}

      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-[#5C4B3B] text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Premium Divider */}
      <div
        className={`h-1 w-24 rounded-full mt-6 bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#D6C7B2] ${
          centered ? 'mx-auto' : ''
        }`}
      />

    </div>
  );
}