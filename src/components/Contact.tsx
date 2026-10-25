import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertTriangle, Copy, Check } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-cream-50/70 border-b border-cream-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-12 border-b border-cream-300">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-mustard-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-forest-800"></span>
            <span>Commercial Inquiries</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Contact Mill Leadership
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Connect directly with Prime Fresh Oil Mills for commercial rates, supply contracts, sample dispatches, and logistical planning.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 pt-10">
          
          {/* Card 1: Phone */}
          <div className="bg-white p-7 rounded-2xl border border-cream-300 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-mustard-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-forest-950">
                Direct Telephone
              </h3>
              <p className="text-xs text-stone-600">
                Speak directly with the mill management desk for immediate spot rates or contract discussions.
              </p>
            </div>

            <div className="pt-4 border-t border-cream-200 space-y-3">
              <div>
                <a 
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-bold text-forest-900 hover:text-mustard-600 transition-colors block"
                >
                  {COMPANY_DETAILS.phone}
                </a>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                  <Clock className="w-3.5 h-3.5 text-forest-700" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              <a
                href={`https://wa.me/919057292529?text=${encodeURIComponent('Hello Prime Fresh Oil Mills, I am contacting you regarding bulk edible oil and seed procurement.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg text-xs font-bold text-forest-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
                id="whatsapp-contact-link"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                <span>Quick WhatsApp Commercial Query</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white p-7 rounded-2xl border border-cream-300 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-mustard-500 text-forest-950 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-forest-950">
                Commercial Email
              </h3>
              <p className="text-xs text-stone-600">
                Send official tender notices, RFQs, purchase orders, or technical specification inquiries.
              </p>
            </div>

            <div className="pt-4 border-t border-cream-200 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <a 
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-base font-bold text-forest-900 hover:text-mustard-600 transition-colors truncate"
                >
                  {COMPANY_DETAILS.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg hover:bg-cream-200 text-stone-500 hover:text-stone-800 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-stone-500 block">
                Official B2B correspondence desk
              </span>
            </div>
          </div>

          {/* Card 3: Physical Address Placeholder (Explicitly Marked) */}
          <div className="bg-white p-7 rounded-2xl border border-amber-300/80 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center border border-amber-200">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-forest-950">
                Mill & Processing Facility
              </h3>
              <p className="text-xs text-stone-600">
                Factory location and physical dispatch terminal status:
              </p>
            </div>

            <div className="pt-4 border-t border-cream-200 space-y-3">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Address Placeholder</span>
                </div>
                <p className="font-mono text-[11px] text-amber-900 break-words">
                  {COMPANY_DETAILS.addressPlaceholder}
                </p>
              </div>
              <p className="text-[11px] text-stone-500 italic">
                *Physical address not yet confirmed in supplied assets. Unverified locations were deliberately omitted.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
