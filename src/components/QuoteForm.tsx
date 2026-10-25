import React, { useState } from 'react';
import { QuoteFormData, FormErrors } from '../types';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Sparkles, Building, User, Mail, Phone, ShoppingBag, FileSpreadsheet, Info } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/products';

interface QuoteFormProps {
  formData: QuoteFormData;
  setFormData: React.Dispatch<React.SetStateAction<QuoteFormData>>;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionPayload, setSubmissionPayload] = useState<QuoteFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please provide a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+()-\s]{8,18}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid telephone/mobile number';
    }

    if (!formData.productOfInterest) {
      newErrors.productOfInterest = 'Please select a product of interest';
    }

    if (!formData.estimatedQuantity.trim()) {
      newErrors.estimatedQuantity = 'Estimated volume/quantity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmissionPayload({ ...formData });
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionPayload(null);
    setFormData({
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
    setErrors({});
  };

  return (
    <section id="quote" className="py-20 bg-forest-950 text-white relative overflow-hidden scroll-mt-24">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-mustard-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & B2B Procurement Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mustard-400">
              <span className="w-2 h-2 rounded-full bg-mustard-400"></span>
              <span>Commercial Quotation Gateway</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight">
              Request a B2B Quotation
            </h2>

            <p className="text-cream-200/80 text-base leading-relaxed">
              Whether you are an established edible oil brand looking for steady bulk supply, an FMCG processor, or a regional private label, our mill sales desk evaluates requirements directly based on active crushing batches.
            </p>

            <div className="bg-forest-900/90 rounded-2xl p-6 border border-forest-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-mustard-300">
                What to Expect Upon Submission:
              </h4>
              
              <div className="space-y-3 text-xs sm:text-sm text-cream-300/90">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-mustard-400 text-forest-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <p>Batch availability and crushing schedules verified for your product choice.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-mustard-400 text-forest-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <p>Transparent commercial rate quote provided ex-mill or with delivery terms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-mustard-400 text-forest-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <p>Sample batch dispatch coordination available for qualifying laboratory evaluations.</p>
                </div>
              </div>

              <div className="pt-3 border-t border-forest-800 text-xs text-cream-400">
                Direct phone inquiries: <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="text-mustard-300 font-semibold hover:underline">{COMPANY_DETAILS.phone}</a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-forest-900/40 border border-forest-800/60 text-xs text-cream-300/70 flex items-start gap-3">
              <Info className="w-4 h-4 text-mustard-400 shrink-0 mt-0.5" />
              <span>
                Demonstration Notice: Per challenge guidelines, form submissions are validated in the frontend browser environment and do not transmit data to an external server.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-stone-900 rounded-3xl p-7 sm:p-10 shadow-2xl border border-cream-300">
              
              {submitted && submissionPayload ? (
                /* Clear demonstration success state */
                <div className="py-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="text-center space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Frontend Demonstration Verified
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-forest-950">
                      Quotation Form Validated Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                      Thank you, <strong className="text-forest-950">{submissionPayload.contactPerson}</strong>. Your quotation enquiry structure has been verified with all required fields.
                    </p>
                  </div>

                  {/* Demonstration payload review */}
                  <div className="bg-cream-100/80 rounded-2xl p-5 border border-cream-300 text-xs space-y-2.5">
                    <div className="font-bold text-forest-950 uppercase tracking-wider border-b border-cream-200 pb-1.5 flex items-center justify-between">
                      <span>Submitted Enquiry Summary:</span>
                      <span className="text-[10px] text-stone-500 font-normal">Mock Frontend State</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 text-stone-700">
                      <div><strong className="text-stone-900">Company:</strong> {submissionPayload.companyName}</div>
                      <div><strong className="text-stone-900">Email:</strong> {submissionPayload.businessEmail}</div>
                      <div><strong className="text-stone-900">Phone:</strong> {submissionPayload.phoneNumber}</div>
                      <div><strong className="text-stone-900">Product:</strong> {submissionPayload.productOfInterest}</div>
                      <div><strong className="text-stone-900">Volume:</strong> {submissionPayload.estimatedQuantity} {submissionPayload.quantityUnit}</div>
                      <div><strong className="text-stone-900">Sample Requested:</strong> {submissionPayload.isSampleRequest ? 'Yes' : 'No'}</div>
                    </div>
                    {submissionPayload.additionalRequirements && (
                      <div className="pt-2 border-t border-cream-200 text-stone-600">
                        <strong className="text-stone-900">Requirements:</strong> {submissionPayload.additionalRequirements}
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>eCell Challenge Evaluation Notice:</strong> This submission was handled completely on the frontend as per requirement. No email or database operation was executed. For real inquiries, the owner can be contacted at <strong>{COMPANY_DETAILS.email}</strong>.
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-forest-950 bg-mustard-400 hover:bg-mustard-300 transition-colors shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
                    id="submit-another-quote-btn"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Submit Another Demonstration Enquiry</span>
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-cream-200 pb-4">
                    <h3 className="font-editorial text-2xl font-bold text-forest-950">
                      B2B Quotation Form
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Please enter your institutional details to receive a customized volume quotation.
                    </p>
                  </div>

                  {/* Company Name & Contact Person */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="companyName" className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-forest-700" />
                        <span>Company / Business Name *</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Edibles Pvt Ltd"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.companyName 
                            ? 'border-red-400 focus:ring-red-500' 
                            : 'border-cream-300 focus:ring-forest-600 focus:border-forest-600'
                        }`}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                      />
                      {errors.companyName && (
                        <p id="companyName-error" className="text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contactPerson" className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-forest-700" />
                        <span>Contact Person Name *</span>
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.contactPerson 
                            ? 'border-red-400 focus:ring-red-500' 
                            : 'border-cream-300 focus:ring-forest-600 focus:border-forest-600'
                        }`}
                        aria-invalid={!!errors.contactPerson}
                        aria-describedby={errors.contactPerson ? 'contactPerson-error' : undefined}
                      />
                      {errors.contactPerson && (
                        <p id="contactPerson-error" className="text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.contactPerson}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Email & Phone Number */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="businessEmail" className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-forest-700" />
                        <span>Business Email *</span>
                      </label>
                      <input
                        id="businessEmail"
                        type="email"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="procurement@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.businessEmail 
                            ? 'border-red-400 focus:ring-red-500' 
                            : 'border-cream-300 focus:ring-forest-600 focus:border-forest-600'
                        }`}
                        aria-invalid={!!errors.businessEmail}
                        aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
                      />
                      {errors.businessEmail && (
                        <p id="businessEmail-error" className="text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.businessEmail}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phoneNumber" className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-forest-700" />
                        <span>Phone / Mobile Number *</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.phoneNumber 
                            ? 'border-red-400 focus:ring-red-500' 
                            : 'border-cream-300 focus:ring-forest-600 focus:border-forest-600'
                        }`}
                        aria-invalid={!!errors.phoneNumber}
                        aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                      />
                      {errors.phoneNumber && (
                        <p id="phoneNumber-error" className="text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Product of Interest */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="productOfInterest" className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-forest-700" />
                        <span>Product of Interest *</span>
                      </label>
                      {formData.productOfInterest && (
                        <span className="text-[11px] font-semibold text-forest-800 bg-mustard-100 px-2 py-0.5 rounded border border-mustard-200">
                          Active Selection
                        </span>
                      )}
                    </div>
                    <select
                      id="productOfInterest"
                      value={formData.productOfInterest}
                      onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm font-medium text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-forest-600"
                    >
                      <optgroup label="Manufactured Oils">
                        <option value="Pure Yellow Mustard Oil">Pure Yellow Mustard Oil (Hero Product)</option>
                      </optgroup>
                      <optgroup label="Edible Seeds">
                        <option value="Yellow Mustard Seeds">Yellow Mustard Seeds</option>
                        <option value="Groundnut Seeds (Peanuts)">Groundnut Seeds (Peanuts)</option>
                        <option value="Sesame Seeds (Natural Grade)">Sesame Seeds (Natural Grade)</option>
                        <option value="Sesame Seeds (Cleaned Grade)">Sesame Seeds (Cleaned Grade)</option>
                        <option value="Black Sesame Seeds">Black Sesame Seeds</option>
                        <option value="Black Mustard Seeds">Black Mustard Seeds</option>
                      </optgroup>
                      <optgroup label="De-Oiled Cakes">
                        <option value="Yellow Mustard Cake">Yellow Mustard Cake</option>
                        <option value="Black Mustard Cake">Black Mustard Cake</option>
                      </optgroup>
                      <optgroup label="Other">
                        <option value="Custom Bulk Order">Custom Bulk / Mixed Order</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Estimated Quantity & Unit */}
                  <div className="space-y-1.5">
                    <label htmlFor="estimatedQuantity" className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-forest-700" />
                      <span>Estimated Quantity / Volume *</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="estimatedQuantity"
                        type="text"
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        placeholder="e.g. 10 or 25"
                        className={`w-36 px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.estimatedQuantity 
                            ? 'border-red-400 focus:ring-red-500' 
                            : 'border-cream-300 focus:ring-forest-600 focus:border-forest-600'
                        }`}
                        aria-invalid={!!errors.estimatedQuantity}
                        aria-describedby={errors.estimatedQuantity ? 'estimatedQuantity-error' : undefined}
                      />
                      <select
                        value={formData.quantityUnit}
                        onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
                        className="flex-1 px-3 py-2.5 rounded-xl border border-cream-300 text-sm font-medium text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
                        aria-label="Quantity Unit"
                      >
                        <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                        <option value="Quintals (100 kg)">Quintals (Qtl)</option>
                        <option value="Litres (Bulk)">Litres (Bulk Oil)</option>
                        <option value="15-Litre Tins">15-Litre Tins</option>
                        <option value="200-Litre Barrels">200-Litre Barrels</option>
                        <option value="50-kg Bags">50-kg Bags</option>
                      </select>
                    </div>
                    {errors.estimatedQuantity && (
                      <p id="estimatedQuantity-error" className="text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.estimatedQuantity}</span>
                      </p>
                    )}
                  </div>

                  {/* Sample Request Checkbox */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      id="isSampleRequest"
                      type="checkbox"
                      checked={formData.isSampleRequest}
                      onChange={(e) => setFormData({ ...formData, isSampleRequest: e.target.checked })}
                      className="w-4 h-4 rounded text-forest-700 focus:ring-forest-600 border-cream-300"
                    />
                    <label htmlFor="isSampleRequest" className="text-xs text-stone-700 font-medium select-none cursor-pointer">
                      We would like to request an initial evaluation sample for laboratory / quality testing.
                    </label>
                  </div>

                  {/* Additional Requirements */}
                  <div className="space-y-1.5">
                    <label htmlFor="additionalRequirements" className="text-xs font-bold text-stone-800 block">
                      Additional Requirements / Delivery Schedule (Optional)
                    </label>
                    <textarea
                      id="additionalRequirements"
                      rows={3}
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                      placeholder="Specify packaging type, target delivery destination, dispatch urgency, or custom labeling requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm text-stone-900 bg-cream-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-forest-950 bg-gradient-to-r from-mustard-400 via-mustard-500 to-mustard-400 hover:from-mustard-300 hover:to-mustard-400 shadow-md hover:shadow-lg transition-all active:scale-[0.99] border border-mustard-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard-600 focus-visible:ring-offset-2"
                      id="submit-quote-form-btn"
                    >
                      <Send className="w-4 h-4 text-forest-950" />
                      <span>Submit Quotation Request</span>
                    </button>
                    <p className="text-[11px] text-stone-500 text-center mt-2.5">
                      Submissions are processed in accordance with B2B commercial confidentiality standards.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
