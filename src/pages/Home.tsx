import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Wrench,
  Award,
  Factory,
  Settings,
  Cog,
  TrendingUp,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  ChevronLeft,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import HeroBackgroundSlider from '../components/HeroBackgroundSlider';

const stats = [
  { value: '28+', label: 'Years Experience', icon: Clock },
  { value: '5000+', label: 'Machines Delivered', icon: Factory },
  { value: '5', label: 'Cities', icon: MapPin },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
];

const divisions = [
  {
    name: 'CNC Machines',
    desc: 'Precision CNC turning and machining centers',
    icon: Settings,
    image: '/images/hero-machinery.jpg',
  },
  {
    name: 'Lathe Machines',
    desc: 'Heavy-duty turning solutions',
    icon: Cog,
    image: '/images/lathe-machine.jpg',
  },
  {
    name: 'Milling Machines',
    desc: 'Vertical and horizontal milling',
    icon: Factory,
    image: '/images/milling-machine.jpg',
  },
  {
    name: 'Grinding Machines',
    desc: 'Surface and cylindrical grinders',
    icon: TrendingUp,
    image: '/images/grinding-machine.jpg',
  },
];

const whyChoose = [
  {
    title: 'Industry Expertise',
    desc: '28+ years of deep domain knowledge in industrial machinery.',
    icon: Award,
  },
  {
    title: 'Nationwide Presence',
    desc: 'Offices in Coimbatore, Chennai, Bangalore, Pune, and Delhi.',
    icon: MapPin,
  },
  {
    title: 'After-Sales Support',
    desc: 'Comprehensive AMC and preventive maintenance programs.',
    icon: Wrench,
  },
  {
    title: 'Quality Assurance',
    desc: 'Rigorous testing and ISO-certified manufacturing partners.',
    icon: Shield,
  },
];

const services = [
  {
    title: 'Annual Maintenance Contract',
    desc: 'Keep your machines running at peak performance with our AMC plans.',
    icon: Wrench,
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Scheduled inspections and servicing to prevent costly breakdowns.',
    icon: Settings,
  },
  {
    title: 'Spare Parts Supply',
    desc: 'Genuine OEM spare parts with fast delivery across India.',
    icon: Cog,
  },
  {
    title: 'Machine Installation',
    desc: 'Expert installation and commissioning at your facility.',
    icon: Factory,
  },
];

const clients = [
  'Tata Motors',
  'Ashok Leyland',
  'TVS Motors',
  'Bharat Forge',
  'Sundaram Fasteners',
  'Mahindra',
  'L&T',
  'BHEL',
];

const productImages = [
  '/images/hero-machinery.jpg',
  '/images/lathe-machine.jpg',
  '/images/milling-machine.jpg',
  '/images/grinding-machine.jpg',
  '/images/drilling-machine.jpg',
  '/images/press-machine.jpg',
  '/images/cnc-turning.jpg',
  '/images/product-cnc.jpg',
];

function ProductCarousel({ products }: { products: any[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentIndexRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const cardWidth = 336;

  const maxIndex = Math.max(0, products.length - 1);

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));

      currentIndexRef.current = clamped;

      setCurrentIndex(clamped);

      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: clamped * cardWidth,
          behavior: 'smooth',
        });
      }
    },
    [maxIndex]
  );

  const goNext = useCallback(
    () => scrollToIndex(currentIndexRef.current + 1),
    [scrollToIndex]
  );

  const goPrev = useCallback(
    () => scrollToIndex(currentIndexRef.current - 1),
    [scrollToIndex]
  );

  return (
    <section className="py-20 relative bg-[#FAF6EF]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="Featured Machines"
          subtitle="Explore our range of precision-engineered industrial machinery"
        />

        <div className="relative">

          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-12 h-12 rounded-full bg-[#F5F0E6] border border-[#D6C7B2] shadow-lg flex items-center justify-center text-[#2B2B2B] hover:bg-[#2563EB] hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={goNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-12 h-12 rounded-full bg-[#F5F0E6] border border-[#D6C7B2] shadow-lg flex items-center justify-center text-[#2B2B2B] hover:bg-[#2563EB] hover:text-white transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={carouselRef}
            className={`flex gap-4 overflow-x-auto pb-6 px-2 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >

            {products.length > 0 ? (
              products.map((product, i) => (
                <div
                  key={product.id}
                  className="snap-start shrink-0 w-80"
                >

                  <GlassCard className="h-full group" hover>

                    <div className="h-52 overflow-hidden rounded-t-2xl relative">

                      <img
                        src={
                          productImages[
                            i % productImages.length
                          ]
                        }
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F5F0E6]/90 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                        {product.category}
                      </div>

                    </div>

                    <div className="p-6">

                      <h3 className="text-[#2B2B2B] font-semibold text-lg mb-2">
                        {product.name}
                      </h3>

                      <p className="text-[#5C4B3B] text-sm mb-4">
                        {product.description}
                      </p>

                      <Link
                        to={`/products?id=${product.id}`}
                        className="inline-flex items-center gap-1.5 text-[#2563EB] text-sm font-medium hover:text-[#38BDF8] transition-colors"
                      >
                        View Details
                        <ChevronRight size={14} />
                      </Link>

                    </div>

                  </GlassCard>

                </div>
              ))
            ) : (
              [1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-80"
                >

                  <GlassCard className="h-full">

                    <div className="h-52 bg-gradient-to-br from-[#E9E1D3] to-[#EFE7DA] rounded-t-2xl" />

                    <div className="p-6 space-y-3">

                      <div className="h-3 w-16 bg-[#2563EB]/30 rounded" />

                      <div className="h-5 w-3/4 bg-[#E9E1D3] rounded" />

                      <div className="h-4 w-full bg-[#EFE7DA] rounded" />

                    </div>

                  </GlassCard>

                </div>
              ))
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className="relative bg-[#FAF6EF]">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <HeroBackgroundSlider />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0E6]/80 border border-[#D6C7B2] text-[#2B2B2B] text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                Industrial Machinery Leaders Since 1996
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-[#2B2B2B] leading-tight mb-6">
                Your Machine is{' '}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                  Your Capital
                </span>
              </h1>

              <p className="text-[#5C4B3B] text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                India's trusted partner for premium industrial
                machines. From CNC to grinding, we deliver
                precision engineering that powers your growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/products"
                  className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    background:
                      'linear-gradient(135deg, #2563EB, #38BDF8)',
                  }}
                >
                  Explore Products
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-[#F5F0E6]/80 border border-[#D6C7B2] text-[#2B2B2B] font-semibold hover:bg-[#EFE7DA] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get a Quote
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      <ProductCarousel products={products} />

      <CTASection />

    </div>
  );
}