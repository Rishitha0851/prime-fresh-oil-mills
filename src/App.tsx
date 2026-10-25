import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { ProcurementCalculator } from './components/ProcurementCalculator';
import { QuoteForm } from './components/QuoteForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteFormData } from './types';

export function App() {
  const [quoteFormData, setQuoteFormData] = useState<QuoteFormData>({
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    phoneNumber: '',
    productOfInterest: 'Pure Yellow Mustard Oil',
    estimatedQuantity: '',
    quantityUnit: 'Metric Tons (MT)',
    isSampleRequest: false,
    additionalRequirements: ''
  });

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteClick = (productName?: string) => {
    if (productName) {
      setQuoteFormData(prev => ({ ...prev, productOfInterest: productName }));
    }
    scrollToQuote();
  };

  const handleSelectProductForQuote = (productName: string) => {
    setQuoteFormData(prev => ({ ...prev, productOfInterest: productName }));
    scrollToQuote();
  };

  const handleTransferEstimatorToQuote = (
    productName: string, 
    quantity: string, 
    unit: string, 
    notes: string
  ) => {
    setQuoteFormData(prev => ({
      ...prev,
      productOfInterest: productName,
      estimatedQuantity: quantity,
      quantityUnit: unit,
      additionalRequirements: notes
    }));
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3] text-stone-900 selection:bg-mustard-200 selection:text-forest-950">
      {/* Navigation */}
      <Navbar onRequestQuoteClick={() => handleRequestQuoteClick()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onExploreClick={scrollToProducts} 
          onRequestQuoteClick={handleRequestQuoteClick} 
        />

        {/* 2. Product Catalog Section */}
        <Products 
          onSelectProductForQuote={handleSelectProductForQuote} 
        />

        {/* 3. About / Why Choose Us Section */}
        <About />

        {/* 4. Bonus Feature: B2B Procurement Planner / Estimator */}
        <ProcurementCalculator 
          onTransferToQuote={handleTransferEstimatorToQuote} 
        />

        {/* 5. Request a Quote Section */}
        <QuoteForm 
          formData={quoteFormData} 
          setFormData={setQuoteFormData} 
        />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;
