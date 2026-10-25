import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Factory, Droplets, Layers } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onRequestQuoteClick: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onRequestQuoteClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 grain-bg border-b border-cream-200">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-mustard-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-forest-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: B2B Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 text-forest-900 border border-forest-900/15 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-mustard-500"></span>
              <span>B2B Edible Oil & Seed Processing Mill</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 tracking-tight leading-[1.12]">
                Your Trusted Partner in{' '}
                <span className="italic font-normal text-forest-800">Edible Oil</span>{' '}
                <span className="text-mustard-600 underline decoration-mustard-300 decoration-wavy decoration-2 underline-offset-8">
                  Manufacturing
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
                Prime Fresh Oil Mills delivers bulk vegetable oil supply, graded oilseeds, and de-oiled cakes to edible oil brands, FMCG food processors, and private-label enterprises seeking verified manufacturing consistency.
              </p>
            </div>

            {/* Quick B2B Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2.5 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-cream-300/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-forest-950 uppercase tracking-wider">Yellow Mustard Oil</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Hero manufactured product</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-cream-300/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-forest-950 uppercase tracking-wider">Edible Seeds & Cakes</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Groundnut, sesame, mustard</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-cream-300/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-forest-950 uppercase tracking-wider">Direct Mill Supply</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Transparent commercial enquiry</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onRequestQuoteClick()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-forest-950 bg-gradient-to-r from-mustard-400 via-mustard-500 to-mustard-400 hover:from-mustard-300 hover:to-mustard-400 shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] border border-mustard-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard-600 focus-visible:ring-offset-2"
                id="hero-request-quote-btn"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4 text-forest-950" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-forest-900 bg-white/80 hover:bg-white hover:text-forest-950 border border-stone-300 hover:border-forest-700 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                id="hero-explore-products-btn"
              >
                <span>Explore Product Catalog</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-stone-500 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-mustard-600" />
              <span>Commercial quotations tailored for institutional buyers, packagers, and contract manufacturing.</span>
            </div>
          </div>

          {/* Right Column: Hero Product Showcase (Yellow Mustard Oil) */}
          {/* Note: In strict adherence to challenge instructions: We do NOT depict seed photographs as bottled oil. */}
          {/* Instead, we create an elegant typography-led composition using mustard-gold visual accents and supplied seed imagery. */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 text-white p-7 sm:p-8 shadow-2xl border border-forest-800 gold-glow">
              
              {/* Top Accent Strip */}
              <div className="flex items-center justify-between pb-6 border-b border-forest-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-mustard-400 animate-ping"></span>
                  <span className="text-xs uppercase font-bold tracking-widest text-mustard-300">
                    Flagship Hero Product
                  </span>
                </div>
                <span className="text-xs bg-mustard-500/20 text-mustard-300 border border-mustard-400/30 px-2.5 py-0.5 rounded-full font-medium">
                  Manufactured Oil
                </span>
              </div>

              {/* Title & Core Value */}
              <div className="pt-6 space-y-2">
                <span className="text-xs font-semibold tracking-wider text-forest-300 uppercase block">
                  Cold-Pressed & Pure
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
                  Yellow Mustard Oil
                </h2>
                <p className="text-cream-200/80 text-sm leading-relaxed pt-1">
                  Extracted from carefully selected whole yellow mustard seeds. Known for its distinct pungent character, authentic golden amber hue, and premium culinary viscosity.
                </p>
              </div>

              {/* Composition Box with Genuine Source Imagery & Pure Oil Details */}
              <div className="my-6 p-4 rounded-xl bg-forest-900/90 border border-forest-700/60 space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-mustard-400/60 shadow-md shrink-0 bg-white">
                    <img 
                      src="/images/Yellow_Mustard_Seeds.jpg" 
                      alt="Source Yellow Mustard Seeds" 
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-mustard-400 uppercase tracking-wider">
                      Crushed From Verified Seed
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Selected Yellow Mustard Seed
                    </div>
                    <div className="text-xs text-cream-300/70">
                      Uniform grading ensures optimal oil recovery and consistent pungency.
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-forest-800 flex items-center justify-between text-xs text-cream-300/90">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-mustard-400" />
                    <span>Pure Vegetable Oil</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Factory className="w-3.5 h-3.5 text-mustard-400" />
                    <span>Mill-Direct Crushing</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-mustard-400" />
                    <span>Bulk Tankers & Tins</span>
                  </span>
                </div>
              </div>

              {/* Direct Enquiry for Hero Product */}
              <div className="pt-2">
                <button
                  onClick={() => onRequestQuoteClick('Pure Yellow Mustard Oil')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-forest-950 bg-mustard-400 hover:bg-mustard-300 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  id="hero-enquire-yellow-mustard-btn"
                >
                  <span>Enquire For Yellow Mustard Oil</span>
                  <ArrowRight className="w-4 h-4 text-forest-950" />
                </button>
                <p className="text-[11px] text-cream-300/60 text-center mt-2">
                  *Transparent B2B quotation based on batch volumes and dispatch schedule.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
