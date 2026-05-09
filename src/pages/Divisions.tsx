import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Settings,
  Cog,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

const iconMap: Record<string, any> = {
  cnc: Settings,
  lathe: Cog,
  milling: Factory,
  grinding: TrendingUp,
  drilling: Factory,
  press: Factory,
};

const divisionImages: Record<number, string> = {
  1: '/images/hero-machinery.jpg',
  2: '/images/lathe-machine.jpg',
  3: '/images/milling-machine.jpg',
  4: '/images/grinding-machine.jpg',
  5: '/images/drilling-machine.jpg',
  6: '/images/press-machine.jpg',
};

export default function Divisions() {
  const [divisions, setDivisions] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/divisions')
      .then((r) => r.json())
      .then((data) => setDivisions(data))
      .catch(() => setDivisions([]));
  }, []);

  return (
    <div className="pt-24 pb-12 bg-background">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/workshop-sparks.jpg"
            alt="Workshop"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-background/80 to-background" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">

              Our{' '}

              <span className="text-gradient-primary">
                Divisions
              </span>

            </h1>

            <p className="text-text-secondary text-lg leading-relaxed">

              Specialized divisions delivering cutting-edge
              solutions across the industrial spectrum

            </p>

          </div>

        </div>

      </section>

      {/* Divisions Grid */}
      <section className="py-12 bg-surface">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {divisions.length > 0 ? (
              divisions.map((div) => {
                const Icon = iconMap[div.icon] || Factory;

                return (
                  <GlassCard
                    key={div.id}
                    glow
                    className="group"
                  >

                    <div className="p-0 overflow-hidden">

                      {/* Image */}
                      <div className="h-52 overflow-hidden relative">

                        <img
                          src={
                            divisionImages[div.id] ||
                            '/images/hero-machinery.jpg'
                          }
                          alt={div.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center border border-border-light">

                          <Icon className="w-6 h-6 text-primary" />

                        </div>

                      </div>

                      {/* Content */}
                      <div className="p-6">

                        <h3 className="text-text-primary font-semibold text-xl mb-3">
                          {div.name}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed mb-5">
                          {div.description}
                        </p>

                        <Link
                          to={`/products?division=${div.id}`}
                          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary-light transition-colors"
                        >

                          View Products

                          <ArrowRight size={16} />

                        </Link>

                      </div>

                    </div>

                  </GlassCard>
                );
              })
            ) : (
              [1, 2, 3, 4, 5, 6].map((i) => (
                <GlassCard key={i}>

                  <div className="p-0 overflow-hidden">

                    <div className="h-52 bg-gradient-to-br from-beige-dark to-beige-soft" />

                    <div className="p-6 space-y-3">

                      <div className="h-6 w-3/4 bg-beige-dark rounded" />

                      <div className="h-4 w-full bg-beige-soft rounded" />

                      <div className="h-4 w-2/3 bg-beige-soft rounded" />

                    </div>

                  </div>

                </GlassCard>
              ))
            )}

          </div>

        </div>
      </section>
    </div>
  );
}