import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface NavbarProps {
  onRequestQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Why Choose Us', href: '#about' },
    { label: 'B2B Estimator', href: '#estimator' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a 
        href="#products" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forest-900 focus:text-mustard-300 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-mustard-400 text-xs font-bold"
      >
        Skip to Product Catalog
      </a>

      {/* Top B2B Announcement Strip */}
      <div className="bg-forest-950 text-cream-200 text-xs py-2 px-4 border-b border-forest-900/60 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-mustard-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">Prime Fresh Oil Mills</span>
            <span className="hidden md:inline text-forest-400">|</span>
            <span className="hidden md:inline text-cream-300/80">Bulk Manufacturing of Edible Oils, Seeds & De-Oiled Cakes</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-cream-200 hover:text-mustard-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-mustard-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-forest-700">|</span>
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-cream-200 hover:text-mustard-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-mustard-400" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#faf8f3]/95 backdrop-blur-md shadow-md shadow-forest-950/5 border-b border-cream-300' 
            : 'bg-[#faf8f3] border-b border-cream-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Clean Text-based Branding */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 rounded-lg p-1">
              <div className="w-11 h-11 rounded-xl bg-forest-900 flex items-center justify-center text-mustard-400 shadow-md border border-forest-800 group-hover:bg-forest-800 transition-colors">
                <svg className="w-6 h-6 transform group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  {/* Stylized drop + leaf emblem */}
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  <circle cx="12" cy="14" r="3" fill="#faf8f3" opacity="0.3"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-forest-950 leading-none group-hover:text-forest-800 transition-colors">
                  PRIME FRESH
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-mustard-700 mt-1">
                  Oil Mills
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-forest-900 hover:bg-cream-200/60 rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Request a Quote CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onRequestQuoteClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-forest-950 bg-gradient-to-r from-mustard-400 to-mustard-500 hover:from-mustard-300 hover:to-mustard-400 active:scale-[0.98] shadow-sm hover:shadow transition-all border border-mustard-400/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard-500 focus-visible:ring-offset-2"
                id="nav-request-quote-btn"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-forest-950" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onRequestQuoteClick}
                className="px-3 py-1.5 rounded text-xs font-semibold text-forest-950 bg-mustard-400 hover:bg-mustard-300"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-forest-900 hover:bg-cream-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-cream-300 bg-[#faf8f3] px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-stone-800 hover:bg-cream-200/80 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-cream-300 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuoteClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-forest-950 bg-mustard-400 hover:bg-mustard-300 shadow-sm"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="bg-cream-100 p-3 rounded-lg border border-cream-300/80 text-xs space-y-1.5 text-stone-700">
                <div className="flex items-center gap-2 font-medium text-forest-900">
                  <Phone className="w-3.5 h-3.5 text-mustard-600" />
                  <span>Direct Sales: {COMPANY_DETAILS.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-mustard-600" />
                  <span>{COMPANY_DETAILS.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
