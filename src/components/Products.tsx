import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';
import { Droplet, Sprout, Layers, ArrowUpRight, Check, Sparkles, Filter } from 'lucide-react';

interface ProductsProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProductForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const getCategoryBadge = (category: ProductCategory) => {
    switch (category) {
      case 'oils':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-mustard-100 text-mustard-900 border border-mustard-300">
            <Droplet className="w-3.5 h-3.5 text-mustard-600" />
            <span>Manufactured Oil</span>
          </span>
        );
      case 'seeds':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
            <Sprout className="w-3.5 h-3.5 text-emerald-700" />
            <span>Edible Seeds</span>
          </span>
        );
      case 'cakes':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Layers className="w-3.5 h-3.5 text-amber-800" />
            <span>De-Oiled Cake</span>
          </span>
        );
    }
  };

  return (
    <section id="products" className="py-20 bg-cream-50/60 border-b border-cream-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream-300">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-mustard-700 uppercase">
              <span className="w-2 h-2 rounded-full bg-forest-700"></span>
              <span>B2B Commercial Catalog</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
              Verified Mill Products & Raw Materials
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Explore our core manufacturing scope across pure extracted vegetable oils, whole edible oilseeds, and by-product de-oiled cakes. Clear categorization ensures procurement teams find exact technical grades.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end bg-white p-1.5 rounded-xl border border-cream-300 shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-forest-900 hover:bg-cream-100'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('oils')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'oils'
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-forest-900 hover:bg-cream-100'
              }`}
            >
              <Droplet className="w-3.5 h-3.5 text-mustard-500" />
              <span>Oils</span>
            </button>
            <button
              onClick={() => setActiveCategory('seeds')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'seeds'
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-forest-900 hover:bg-cream-100'
              }`}
            >
              <Sprout className="w-3.5 h-3.5 text-emerald-600" />
              <span>Seeds</span>
            </button>
            <button
              onClick={() => setActiveCategory('cakes')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'cakes'
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-forest-900 hover:bg-cream-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>Cakes</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredProducts.map((product) => {
            const isHero = product.isHeroFlagship;

            return (
              <div 
                key={product.id}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isHero 
                    ? 'border-mustard-400 ring-2 ring-mustard-400/20 shadow-md' 
                    : 'border-cream-300/90 shadow-sm'
                }`}
              >
                {/* Visual Header / Image area */}
                <div className="relative aspect-[4/3] bg-cream-100 overflow-hidden flex items-center justify-center p-4">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={`${product.name} - ${product.categoryLabel} by Prime Fresh Oil Mills`} 
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* Hero Oil Typography Composition (No bottle image fabrication) */
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 p-6 flex flex-col justify-between text-white relative overflow-hidden">
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-mustard-400/20 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-widest text-mustard-300 uppercase px-2.5 py-1 rounded bg-mustard-400/20 border border-mustard-400/30">
                          Primary Extracted Product
                        </span>
                        <Droplet className="w-6 h-6 text-mustard-400 fill-mustard-400/20" />
                      </div>

                      <div className="space-y-1 my-auto">
                        <span className="text-xs text-forest-300 uppercase font-semibold">Processed & Purified</span>
                        <div className="font-editorial text-2xl font-bold text-cream-50 leading-tight">
                          Pure Yellow Mustard Oil
                        </div>
                        <div className="text-xs text-cream-300/70">
                          Golden Viscosity • Natural Pungency
                        </div>
                      </div>

                      <div className="text-[11px] text-cream-300/80 border-t border-forest-800 pt-2 flex items-center justify-between">
                        <span>Bulk Extraction</span>
                        <span className="text-mustard-300 font-medium">B2B Supply</span>
                      </div>
                    </div>
                  )}

                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 z-10">
                    {getCategoryBadge(product.category)}
                  </div>

                  {product.isBestseller && (
                    <div className="absolute top-4 right-4 z-10 bg-forest-900 text-mustard-300 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-forest-800">
                      <Sparkles className="w-3 h-3 text-mustard-400" />
                      <span>Bestseller</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                      <span>Physical Form:</span>
                      <span className="font-semibold text-forest-900 bg-cream-100 px-2 py-0.5 rounded">
                        {product.visualForm}
                      </span>
                    </div>

                    <h3 className="font-editorial text-xl font-bold text-forest-950">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Common B2B Use Cases */}
                  <div className="pt-2 border-t border-cream-200 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      Commercial Applications:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.suitability.map((use, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-700 bg-cream-100/80 px-2 py-1 rounded border border-cream-200"
                        >
                          <Check className="w-2.5 h-2.5 text-forest-700" />
                          <span>{use}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Quotation CTA */}
                  <div className="pt-3">
                    <button
                      onClick={() => onSelectProductForQuote(product.name)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-forest-950 bg-cream-200 hover:bg-mustard-400 transition-colors border border-cream-300 hover:border-mustard-400 group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                      id={`enquire-btn-${product.id}`}
                    >
                      <span>Enquire for this Product</span>
                      <ArrowUpRight className="w-4 h-4 text-forest-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-xl bg-forest-950 text-cream-200 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-4 border border-forest-800">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-forest-900 text-mustard-400 shrink-0">
              <Droplet className="w-5 h-5" />
            </span>
            <div>
              <span className="font-bold text-white block">Verified Manufacturing Scope Notice</span>
              <span className="text-cream-300/80 text-xs">
                Prime Fresh Oil Mills engages strictly in real edible seeds, oils and de-oiled cakes. No speculative claims or fictitious certifications are listed.
              </span>
            </div>
          </div>
          <button
            onClick={() => onSelectProductForQuote('Custom Bulk Order')}
            className="shrink-0 px-4 py-2 bg-mustard-400 hover:bg-mustard-300 text-forest-950 font-bold rounded-lg text-xs"
          >
            Custom Requirement
          </button>
        </div>

      </div>
    </section>
  );
};
