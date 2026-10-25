export type ProductCategory = 'seeds' | 'oils' | 'cakes';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  image?: string;
  isHeroFlagship?: boolean;
  isBestseller?: boolean;
  description: string;
  suitability: string[];
  visualForm: string; // e.g. "Processed Oil", "Raw Seed", "De-Oiled Cake Slab"
}

export interface QuoteFormData {
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  productOfInterest: string;
  estimatedQuantity: string;
  quantityUnit: string;
  isSampleRequest: boolean;
  additionalRequirements: string;
}

export interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  businessEmail?: string;
  phoneNumber?: string;
  productOfInterest?: string;
  estimatedQuantity?: string;
}
