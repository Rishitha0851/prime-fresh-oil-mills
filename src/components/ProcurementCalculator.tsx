import React, { useState } from 'react';
import { Calculator, ArrowDownCircle, Check, HelpCircle, Package, Truck, Sparkles } from 'lucide-react';

interface ProcurementCalculatorProps {
  onTransferToQuote: (productName: string, quantity: string, unit: string, notes: string) => void;
}

export const ProcurementCalculator: React.FC<ProcurementCalculatorProps> = ({ onTransferToQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState('Pure Yellow Mustard Oil');
  const [volume, setVolume] = useState('15');
  const [unit, setUnit] = useState('Metric Tons (MT)');
  const [packagingType, setPackagingType] = useState('Bulk Road Tanker');
  const [frequency, setFrequency] = useState('One-time Commercial Order');

  const handleApplyToForm = () => {
    const notes = `Packaging Preference: ${packagingType} | Supply Cadence: ${frequency} | Requesting formal commercial pricing and batch analysis report.`;
    onTransferToQuote(selectedProduct, volume, unit, notes);
    
    // Smooth scroll down to quote form
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-16 bg-cream-100/70 border-b border-cream-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-cream-300 p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mustard-200/30 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-cream-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mustard-700">
                <Calculator className="w-4 h-4 text-mustard-600" />
                <span>B2B Procurement Planner (Bonus Feature)</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                Configure Your Supply Parameters
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Estimate volume metrics and standard industrial packaging before initiating formal quotation review.
              </p>
            </div>
            <div className="self-start md:self-auto bg-forest-900 text-mustard-300 px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instantly Prefills Quotation Form</span>
            </div>
          </div>

          {/* Form Interactive Controls */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            
            {/* 1. Product Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-forest-950 uppercase tracking-wider block">
                1. Product Line
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest-600"
              >
                <option value="Pure Yellow Mustard Oil">Pure Yellow Mustard Oil (Hero Product)</option>
                <option value="Yellow Mustard Seeds">Yellow Mustard Seeds</option>
                <option value="Groundnut Seeds (Peanuts)">Groundnut Seeds (Peanuts)</option>
                <option value="Sesame Seeds (Natural Grade)">Sesame Seeds (Natural Grade)</option>
                <option value="Sesame Seeds (Cleaned Grade)">Sesame Seeds (Cleaned Grade)</option>
                <option value="Black Sesame Seeds">Black Sesame Seeds</option>
                <option value="Black Mustard Seeds">Black Mustard Seeds</option>
                <option value="Yellow Mustard Cake">Yellow Mustard Cake</option>
                <option value="Black Mustard Cake">Black Mustard Cake</option>
              </select>
              <p className="text-[11px] text-stone-500">Milled or screened directly at plant</p>
            </div>

            {/* 2. Target Volume */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-forest-950 uppercase tracking-wider block">
                2. Target Batch Volume
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-24 px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest-600"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="flex-1 px-3 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest-600"
                >
                  <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                  <option value="Quintals (100 kg)">Quintals (Qtl)</option>
                  <option value="Litres (Bulk)">Litres (Bulk)</option>
                  <option value="15-Litre Tins">15-Litre Tins</option>
                  <option value="50-kg Bags">50-kg Bags</option>
                </select>
              </div>
              <p className="text-[11px] text-stone-500">Scalable to contract specifications</p>
            </div>

            {/* 3. Packaging Format */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-forest-950 uppercase tracking-wider block">
                3. Preferred Packaging
              </label>
              <select
                value={packagingType}
                onChange={(e) => setPackagingType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest-600"
              >
                <option value="Bulk Road Tanker">Bulk Dedicated Road Tanker</option>
                <option value="200-Litre Food Grade Barrels">200-L Food Grade Barrels / Drums</option>
                <option value="15-Litre / 15-Kg Commercial Tins">15-L / 15-Kg Commercial Metal Tins</option>
                <option value="50-kg Multiwall PP / Jute Bags">50-kg Multiwall PP / Jute Bags (Seeds/Cakes)</option>
                <option value="Custom Private Label Packing">Custom Private Label Packaging</option>
              </select>
              <p className="text-[11px] text-stone-500">Matches institutional unloading setups</p>
            </div>

            {/* 4. Delivery Cadence */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-forest-950 uppercase tracking-wider block">
                4. Supply Cadence
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50 text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-forest-600"
              >
                <option value="One-time Commercial Order">One-time Commercial Order</option>
                <option value="Monthly Standing Order Contract">Monthly Standing Contract</option>
                <option value="Quarterly Scheduled Supply">Quarterly Scheduled Supply</option>
                <option value="Spot Market Procurement">Spot Market Procurement</option>
              </select>
              <p className="text-[11px] text-stone-500">Flexible contract durations</p>
            </div>

          </div>

          {/* Action Callout & Summary */}
          <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cream-50 p-4 rounded-2xl">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
              <Package className="w-5 h-5 text-forest-800 shrink-0" />
              <div>
                <span className="font-bold text-forest-950">Configured: </span>
                <span>{volume} {unit} of {selectedProduct} ({packagingType})</span>
              </div>
            </div>

            <button
              onClick={handleApplyToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-forest-950 bg-mustard-400 hover:bg-mustard-300 shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
              id="apply-estimator-to-quote-btn"
            >
              <span>Transfer to Quotation Form</span>
              <ArrowDownCircle className="w-4 h-4 text-forest-950" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
