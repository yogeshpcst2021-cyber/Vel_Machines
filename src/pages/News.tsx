import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

const newsImages = [
  '/images/hero-machinery.jpg',
  '/images/workshop-sparks.jpg',
  '/images/factory-floor.jpg',
  '/images/product-cnc.jpg',
  '/images/cnc-turning.jpg',
  '/images/product-lathe.jpg',
];

export default function News() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data) => setNews(data))
      .catch(() => setNews([]));
  }, []);

  return (
    <div className="pt-24 pb-12 bg-background">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/cnc-turning.jpg"
            alt="News"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-background/80 to-background" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">

              Latest{' '}

              <span className="text-gradient-primary">
                News
              </span>

            </h1>

            <p className="text-text-secondary text-lg leading-relaxed">

              Stay updated with the latest from Vel Machines —
              product launches, events, and industry insights

            </p>

          </div>

        </div>

      </section>

      {/* News Grid */}
      <section className="py-12 bg-surface">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {news.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {news.map((item, i) => (
                <GlassCard
                  key={item.id}
                  glow
                  className="group"
                >

                  {/* Image */}
                  <div className="h-48 overflow-hidden rounded-t-2xl">

                    <img
                      src={newsImages[i % newsImages.length]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-center gap-3 mb-3">

                      <span className="flex items-center gap-1 text-text-secondary text-xs">

                        <Calendar size={12} />

                        {new Date(item.date).toLocaleDateString(
                          'en-IN'
                        )}

                      </span>

                      <span className="text-primary text-xs font-medium uppercase tracking-wider">

                        {item.category || 'News'}

                      </span>

                    </div>

                    <h3 className="text-text-primary font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">

                      {item.title}

                    </h3>

                    <p className="text-text-secondary text-sm line-clamp-3 mb-4">

                      {item.excerpt || item.content}

                    </p>

                    <button className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:text-primary-light transition-colors">

                      Read More

                      <ArrowRight size={14} />

                    </button>

                  </div>

                </GlassCard>
              ))}

            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[1, 2, 3].map((i) => (
                <GlassCard key={i}>

                  <div className="h-48 bg-gradient-to-br from-beige-dark to-beige-soft rounded-t-2xl" />

                  <div className="p-6 space-y-3">

                    <div className="flex gap-3">

                      <div className="h-3 w-20 bg-beige-soft rounded" />

                      <div className="h-3 w-16 bg-primary/30 rounded" />

                    </div>

                    <div className="h-5 w-3/4 bg-beige-dark rounded" />

                    <div className="h-4 w-full bg-beige-soft rounded" />

                  </div>

                </GlassCard>
              ))}

            </div>
          )}

        </div>
      </section>
    </div>
  );
}