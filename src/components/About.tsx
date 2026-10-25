import React from 'react';
import { COMPANY_DETAILS } from '../data/products';
import { ShieldCheck, ClipboardCheck, Truck, Droplets, CheckCircle, HelpCircle, FileText } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#faf8f3] border-b border-cream-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-mustard-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-forest-800"></span>
            <span>Business Scope & Procurement Roadmap</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            About Prime Fresh Oil Mills
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Prime Fresh Oil Mills is an edible oil processing and agricultural commodity supplier based in India. We supply wholesale edible seeds, freshly milled vegetable oils, and nutrient-dense de-oiled cakes directly to edible oil brands, food manufacturers, and institutional distributors.
          </p>
        </div>

        {/* Business Pillars (Verified Scope Only) */}
        <div className="grid md:grid-cols-3 gap-6 pt-12">
          
          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-forest-900 text-mustard-400 flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-forest-950">
              Core Oil Crushing
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Our hero manufactured specialty is pure Yellow Mustard Oil, recognized for its pungent aroma profile and golden clarity. We also handle sesame oil extraction for commercial food and seasoning manufacturers.
            </p>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-2 border-t border-cream-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Zero adulteration policy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Bulk tankers, drums, and custom packaging</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-mustard-500 text-forest-950 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-forest-950">
              Selected Seed Sourcing
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We supply whole, graded oilseeds including Yellow Mustard Seeds, Black Mustard Seeds, Natural and Machine-Cleaned Sesame Seeds, and Shelled Groundnut Kernels directly to commercial users.
            </p>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-2 border-t border-cream-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Uniform cleaning and grading</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Optimized for commercial expelling yield</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-cream-300 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-200 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-forest-950">
              Agri By-Products & Cakes
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Our de-oiled cakes (Yellow Mustard Cake and Black Mustard Cake) preserve valuable proteins and organic nutrients, serving as foundational inputs for compound cattle feed and organic soil enhancement.
            </p>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-2 border-t border-cream-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Rich protein & nitrogen source</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>Bulk bag packaging for agro-industries</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4-Step Procurement Workflow for B2B Clients */}
        <div className="mt-16 bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-mustard-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl space-y-3 mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-mustard-400">
              Straightforward Commercial Journey
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-cream-50">
              How the Mill Enquiry & Procurement Works
            </h3>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              We understand corporate procurement cycles. Here is our direct 4-stage process to evaluate requirements, provide quotation terms, and coordinate supply.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_DETAILS.enquiryProcess.map((step) => (
              <div 
                key={step.step}
                className="bg-forest-900/80 border border-forest-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-mustard-400/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-editorial text-mustard-400">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center text-forest-300">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-cream-100">
                    {step.title}
                  </h4>
                  <p className="text-xs text-cream-300/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-mustard-400" />
              <span>Verified manufacturer disclosure: Specifications and sample evaluation conducted on active mill stock.</span>
            </div>
            <a 
              href="#quote" 
              className="px-4 py-2 rounded-lg bg-mustard-400 hover:bg-mustard-300 text-forest-950 font-bold transition-colors"
            >
              Start Quotation Enquiry
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
