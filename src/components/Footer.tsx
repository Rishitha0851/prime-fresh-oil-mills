import React from 'react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/products';
import { Droplets, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-forest-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-900">
          
          {/* Column 1: Company Profile (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 flex items-center justify-center text-mustard-400 border border-forest-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <span className="font-editorial text-xl font-bold tracking-tight text-white block">
                  PRIME FRESH
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-mustard-400 block -mt-1">
                  Oil Mills
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-sm">
              Bulk manufacturing, oilseed processing, and commercial supply of Yellow Mustard Oil, edible seeds (mustard, sesame, groundnut), and protein-rich de-oiled cakes for industrial B2B clients.
            </p>

            <div className="pt-2 text-xs text-cream-400/80 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-mustard-400 shrink-0" />
              <span>Verified manufacturer profile — Built for eCell Qualification Challenge.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mustard-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Product Catalog</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Procurement Estimator</a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">Request a Quote</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Manufactured & Supplied Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mustard-300">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li className="font-semibold text-white">Pure Yellow Mustard Oil</li>
              <li>Yellow Mustard Seeds</li>
              <li>Groundnut Seeds (Peanuts)</li>
              <li>Natural White Sesame Seeds</li>
              <li>Cleaned Sesame Seeds</li>
              <li>Black Sesame Seeds</li>
              <li>Black Mustard Seeds</li>
              <li>Yellow & Black Mustard Cakes</li>
            </ul>
          </div>

          {/* Column 4: Contact & Mill Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-mustard-300">
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs text-cream-300/80">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-mustard-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-mustard-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors truncate">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-cream-400">
                  Address pending verification (placeholder retained in contact section)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} Prime Fresh Oil Mills. All rights reserved. B2B Industrial Web Portal.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cream-300 hover:text-mustard-300 transition-colors p-2 rounded-lg hover:bg-forest-900"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
