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
    <div className="pt-24 pb-12 bg-[#FAF6EF]">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/cnc-turning.jpg"
            alt="News"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: 'center 30%' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E6]/90 via-[#FAF6EF]/80 to-[#FAF6EF]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-bold text-[#2B2B2B] mb-6">
              Latest{' '}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                News
              </span>
            </h1>

            <p className="text-[#5C4B3B] text-lg leading-relaxed">
              Stay updated with the latest from Vel Machines —
              product launches, events, and industry insights
            </p>

          </div>

        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-[#F5F0E6]">

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

                      <span className="flex items-center gap-1 text-[#5C4B3B] text-xs">
                        <Calendar size={12} />
                        {new Date(item.date).toLocaleDateString(
                          'en-IN'
                        )}
                      </span>

                      <span className="text-[#2563EB] text-xs font-medium uppercase tracking-wider">
                        {item.category || 'News'}
                      </span>

                    </div>

                    <h3 className="text-[#2B2B2B] font-semibold text-lg mb-3 group-hover:text-[#2563EB] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-[#5C4B3B] text-sm line-clamp-3 mb-4">
                      {item.excerpt || item.content}
                    </p>

                    <button className="inline-flex items-center gap-1 text-[#2563EB] text-sm font-medium hover:text-[#38BDF8] transition-colors">
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

                  <div className="h-48 bg-gradient-to-br from-[#E9E1D3] to-[#EFE7DA] rounded-t-2xl" />

                  <div className="p-6 space-y-3">

                    <div className="flex gap-3">

                      <div className="h-3 w-20 bg-[#EFE7DA] rounded" />

                      <div className="h-3 w-16 bg-[#2563EB]/30 rounded" />

                    </div>

                    <div className="h-5 w-3/4 bg-[#E9E1D3] rounded" />

                    <div className="h-4 w-full bg-[#EFE7DA] rounded" />

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