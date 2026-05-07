import {
  Wrench,
  Settings,
  Cog,
  Factory,
  Shield,
  Headphones,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const services = [
  {
    title: 'Annual Maintenance Contract',
    desc: 'Comprehensive AMC packages that ensure your machines operate at peak efficiency year-round. Includes scheduled maintenance, parts replacement, and priority support.',
    icon: Wrench,
    features: [
      'Quarterly inspections',
      'Priority breakdown support',
      'Genuine spare parts',
      'Performance reports',
    ],
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Proactive maintenance programs designed to identify and address potential issues before they cause costly downtime.',
    icon: Settings,
    features: [
      'Vibration analysis',
      'Thermal imaging',
      'Lubrication audits',
      'Alignment checks',
    ],
  },
  {
    title: 'Spare Parts Supply',
    desc: 'Genuine OEM spare parts with fast delivery across all our locations. We maintain a large inventory to minimize your downtime.',
    icon: Cog,
    features: [
      'OEM genuine parts',
      'Same-day dispatch',
      'Pan-India delivery',
      'Warranty coverage',
    ],
  },
  {
    title: 'Machine Installation',
    desc: 'Expert installation and commissioning services by certified engineers. We ensure your machine is production-ready from day one.',
    icon: Factory,
    features: [
      'Site preparation',
      'Foundation work',
      'Precision leveling',
      'Operator training',
    ],
  },
  {
    title: 'Retrofit & Upgrades',
    desc: 'Modernize your existing machines with CNC retrofits, automation upgrades, and control system enhancements.',
    icon: Shield,
    features: [
      'CNC retrofitting',
      'Control upgrades',
      'Automation integration',
      'Energy optimization',
    ],
  },
  {
    title: '24/7 Support',
    desc: 'Round-the-clock technical support via phone, video, and on-site visits. Our engineers are always ready to help.',
    icon: Headphones,
    features: [
      'Phone support',
      'Video diagnostics',
      'On-site visits',
      'Remote monitoring',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-12 bg-[#FAF6EF]">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/factory-floor.jpg"
            alt="Services"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E6]/90 via-[#FAF6EF]/80 to-[#FAF6EF]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-[#2B2B2B] mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-[#5C4B3B] text-lg leading-relaxed">
              Complete lifecycle support for your industrial
              machinery — from installation to retirement
            </p>

          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-[#F5F0E6]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-6">

            {services.map((service) => (
              <GlassCard key={service.title} glow>

                <div className="p-8">

                  <div className="flex items-start gap-5">

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">

                      <service.icon className="w-7 h-7 text-[#2563EB]" />

                    </div>

                    {/* Content */}
                    <div>

                      <h3 className="text-[#2B2B2B] font-semibold text-xl mb-3">
                        {service.title}
                      </h3>

                      <p className="text-[#5C4B3B] text-sm leading-relaxed mb-5">
                        {service.desc}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">

                        {service.features.map((feat) => (
                          <span
                            key={feat}
                            className="px-3 py-1 rounded-lg bg-[#FAF6EF] border border-[#D6C7B2] text-[#5C4B3B] text-xs"
                          >
                            {feat}
                          </span>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </GlassCard>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Custom Service?"
        subtitle="We tailor our service packages to match your specific operational requirements."
        buttonText="Talk to an Expert"
      />

    </div>
  );
}