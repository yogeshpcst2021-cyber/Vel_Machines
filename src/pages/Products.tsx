import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  Filter,
  X,
  ChevronRight,
  Phone,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';

const productImages = [
  '/images/hero-machinery.jpg',
  '/images/cnc-turning.jpg',
  '/images/lathe-machine.jpg',
  '/images/product-lathe.jpg',
  '/images/milling-machine.jpg',
  '/images/product-cnc.jpg',
  '/images/grinding-machine.jpg',
  '/images/surface-grinder.jpg',
  '/images/drilling-machine.jpg',
  '/images/press-machine.jpg',
];

export default function Products() {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState<any[]>([]);
  const [divisions, setDivisions] = useState<any[]>([]);

  const [selectedDivision, setSelectedDivision] =
    useState(searchParams.get('division') || 'all');

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/products').then((r) => r.json()),
      fetch('/api/divisions').then((r) => r.json()),
    ])
      .then(([prodData, divData]) => {
        setProducts(prodData);
        setDivisions(divData);

        const pid = searchParams.get('id');

        if (pid) {
          const p = prodData.find(
            (x: any) => x.id === parseInt(pid)
          );

          if (p) setSelectedProduct(p);
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchParams]);

  const filtered = products.filter((p) => {
    const matchDiv =
      selectedDivision === 'all' ||
      p.division_id === parseInt(selectedDivision);

    const matchSearch =
      !searchQuery ||
      p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchDiv && matchSearch;
  });

  return (
    <div className="pt-24 pb-12 bg-background">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/images/product-cnc.jpg"
            alt="Products"
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
                Products
              </span>

            </h1>

            <p className="text-text-secondary text-lg leading-relaxed">

              Browse our comprehensive range of industrial
              machinery built for precision and performance

            </p>

          </div>

        </div>

      </section>

      {/* Products */}
      <section className="py-12 bg-surface">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <div className="lg:w-64 shrink-0">

              <GlassCard className="sticky top-24">

                <div className="p-6">

                  <div className="flex items-center gap-2 mb-6">

                    <Filter
                      size={18}
                      className="text-primary"
                    />

                    <h3 className="text-text-primary font-semibold">
                      Filters
                    </h3>

                  </div>

                  {/* Search */}
                  <div className="relative mb-6">

                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
                    />

                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) =>
                        setSearchQuery(e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-border-light text-text-primary text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-all"
                    />

                  </div>

                  {/* Division Filters */}
                  <div className="space-y-2">

                    <button
                      onClick={() =>
                        setSelectedDivision('all')
                      }
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedDivision === 'all'
                          ? 'bg-primary/10 text-primary border border-primary/15'
                          : 'text-text-secondary hover:bg-beige-soft hover:text-text-primary'
                      }`}
                    >
                      All Divisions
                    </button>

                    {divisions.map((div) => (
                      <button
                        key={div.id}
                        onClick={() =>
                          setSelectedDivision(
                            String(div.id)
                          )
                        }
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          selectedDivision ===
                          String(div.id)
                            ? 'bg-primary/10 text-primary border border-primary/15'
                            : 'text-text-secondary hover:bg-beige-soft hover:text-text-primary'
                        }`}
                      >
                        {div.name}
                      </button>
                    ))}

                  </div>

                </div>

              </GlassCard>

            </div>

            {/* Product Grid */}
            <div className="flex-1">

              {loading ? (
                <div className="grid sm:grid-cols-2 gap-6">

                  {[1, 2, 3, 4].map((i) => (
                    <GlassCard key={i}>

                      <div className="h-48 bg-gradient-to-br from-beige-dark to-beige-soft rounded-t-2xl" />

                      <div className="p-6 space-y-3">

                        <div className="h-4 w-20 bg-primary/30 rounded" />

                        <div className="h-5 w-3/4 bg-beige-dark rounded" />

                        <div className="h-4 w-full bg-beige-soft rounded" />

                      </div>

                    </GlassCard>
                  ))}

                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20">

                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-beige-soft flex items-center justify-center">

                    <span className="text-border-light font-bold text-3xl">
                      V
                    </span>

                  </div>

                  <p className="text-text-secondary">
                    No products found matching your
                    criteria.
                  </p>

                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">

                  {filtered.map((product) => (
                    <div key={product.id}>

                      <GlassCard
                        className="group cursor-pointer h-full"
                        onClick={() =>
                          setSelectedProduct(product)
                        }
                      >

                        <div className="h-52 overflow-hidden rounded-t-2xl">

                          <img
                            src={
                              productImages[
                                (product.id - 1) %
                                  productImages.length
                              ]
                            }
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />

                        </div>

                        <div className="p-6">

                          <span className="text-primary text-xs font-medium uppercase tracking-wider">
                            {product.category}
                          </span>

                          <h3 className="text-text-primary font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>

                          <p className="text-text-secondary text-sm line-clamp-2">
                            {product.description}
                          </p>

                          <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">

                            View Details

                            <ChevronRight size={14} />

                          </div>

                        </div>

                      </GlassCard>

                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-background border border-border-light shadow-2xl"
          >

            {/* Close */}
            <button
              onClick={() =>
                setSelectedProduct(null)
              }
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-beige-soft border border-border-light flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="h-64 overflow-hidden rounded-t-3xl">

              <img
                src={
                  productImages[
                    (selectedProduct.id - 1) %
                      productImages.length
                  ]
                }
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />

            </div>

            {/* Content */}
            <div className="p-8">

              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                {selectedProduct.category}
              </span>

              <h2 className="text-3xl font-bold text-text-primary mt-2 mb-4">
                {selectedProduct.name}
              </h2>

              <p className="text-text-secondary leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              {/* Specs */}
              {selectedProduct.specs && (
                <div className="mb-8">

                  <h3 className="text-text-primary font-semibold mb-4">
                    Specifications
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">

                    {Object.entries(
                      selectedProduct.specs
                    ).map(
                      ([key, val]: [string, any]) => (
                        <div
                          key={key}
                          className="flex justify-between px-4 py-3 rounded-xl bg-white border border-border-light"
                        >

                          <span className="text-text-secondary text-sm capitalize">
                            {key.replace(/_/g, ' ')}
                          </span>

                          <span className="text-text-primary text-sm font-medium">
                            {val}
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href={`/contact?product=${selectedProduct.name}`}
                  className="flex-1 px-6 py-3.5 rounded-xl font-semibold text-white text-center transition-all duration-300 hover:shadow-lg gradient-primary"
                >
                  Send Enquiry
                </a>

                <a
                  href="tel:+919789360111"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-beige-soft border border-border-light text-text-primary font-semibold hover:bg-beige-dark transition-all"
                >

                  <Phone size={18} />

                  Call Now

                </a>

              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}