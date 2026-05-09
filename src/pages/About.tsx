import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { Award, Users, Globe, Target, Quote } from 'lucide-react';

const timeline = [
  {
    year: '1996',
    title: 'Founded',
    desc: 'Vel Machines established in Coimbatore, the Manchester of South India.',
  },
  {
    year: '2002',
    title: 'Expansion',
    desc: 'Opened branches in Chennai and Bangalore to serve South India better.',
  },
  {
    year: '2008',
    title: 'Pan-India Presence',
    desc: 'Expanded to Pune and Delhi, becoming a national player.',
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    desc: 'Launched CNC and automation divisions with Industry 4.0 capabilities.',
  },
  {
    year: '2024',
    title: 'Market Leader',
    desc: '5000+ machines delivered. Recognized as a top industrial machinery distributor.',
  },
];

const values = [
  {
    title: 'Integrity',
    desc: 'We operate with transparency and honesty in every deal.',
    icon: Award,
  },
  {
    title: 'Customer First',
    desc: 'Your success is our success. We go the extra mile.',
    icon: Users,
  },
  {
    title: 'Innovation',
    desc: 'Constantly evolving to bring the latest technology to you.',
    icon: Globe,
  },
  {
    title: 'Excellence',
    desc: 'No compromises on quality, precision, or service.',
    icon: Target,
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-12 bg-background">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/factory-floor.jpg"
            alt="Factory"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-background/80 to-background" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">

              About{' '}

              <span className="text-gradient-primary">
                Vel Machines
              </span>

            </h1>

            <p className="text-text-secondary text-lg leading-relaxed">

              For over 28 years, Vel Machines has been at the forefront of
              India's industrial revolution, delivering world-class machinery
              and unmatched service to manufacturers across the nation.

            </p>

          </div>

        </div>

      </section>

      {/* Founder Section */}
      <section className="py-16 bg-surface">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <GlassCard className="max-w-4xl mx-auto">

            <div className="p-8 md:p-12">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md gradient-primary">

                  <span className="text-white font-bold text-2xl">
                    V
                  </span>

                </div>

                <div>

                  <h3 className="text-text-primary font-semibold text-lg">
                    V. Elango
                  </h3>

                  <p className="text-primary text-sm">
                    Founder & CEO
                  </p>

                </div>

              </div>

              <div className="relative">

                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />

                <p className="text-text-secondary text-lg leading-relaxed pl-6">

                  When we started Vel Machines in 1996, our vision was simple —
                  to bring the best industrial machinery to Indian manufacturers.
                  Today, that vision has grown into a mission to power India's
                  manufacturing excellence. Every machine we deliver carries our
                  commitment to quality, precision, and your success.

                </p>

              </div>

            </div>

          </GlassCard>

        </div>

      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Our Journey"
            subtitle="Three decades of growth and innovation"
          />

          <div className="relative">

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary-light/30 to-transparent" />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 mb-12 ${
                  i % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >

                <div
                  className={`hidden md:block w-1/2 ${
                    i % 2 === 0
                      ? 'text-right pr-12'
                      : 'text-left pl-12'
                  }`}
                >

                  <h3 className="text-text-primary font-bold text-2xl mb-2">
                    {item.year}
                  </h3>

                  <h4 className="text-primary font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-text-secondary text-sm">
                    {item.desc}
                  </p>

                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className="pl-12 md:pl-0 md:w-1/2 md:hidden">

                  <h3 className="text-text-primary font-bold text-xl mb-1">
                    {item.year}
                  </h3>

                  <h4 className="text-primary font-semibold mb-1">
                    {item.title}
                  </h4>

                  <p className="text-text-secondary text-sm">
                    {item.desc}
                  </p>

                </div>

                <div
                  className={`hidden md:block w-1/2 ${
                    i % 2 === 0
                      ? 'text-left pl-12'
                      : 'text-right pr-12'
                  }`}
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Values */}
      <section className="py-20 bg-surface">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((val) => (
              <GlassCard key={val.title} glow>

                <div className="p-8 text-center">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">

                    <val.icon className="w-7 h-7 text-primary" />

                  </div>

                  <h3 className="text-text-primary font-semibold text-lg mb-3">
                    {val.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {val.desc}
                  </p>

                </div>

              </GlassCard>
            ))}

          </div>

        </div>

      </section>

      <CTASection />

    </div>
  );
}