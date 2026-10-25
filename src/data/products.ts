import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Hero Product (Oil) - Distinguished as Manufactured Oil
  {
    id: 'yellow-mustard-oil',
    name: 'Pure Yellow Mustard Oil',
    category: 'oils',
    categoryLabel: 'Manufactured Oil',
    isHeroFlagship: true,
    isBestseller: true,
    visualForm: 'Extracted Vegetable Oil',
    description: 'Our flagship edible oil, extracted directly from carefully selected yellow mustard seeds. Renowned for its distinctive pungent aroma, vibrant golden tone, and culinary purity.',
    suitability: ['Bulk Edible Oil Packaging', 'Private Label Retailing', 'Commercial Food Processing']
  },
  // 2. Yellow Mustard Seeds
  {
    id: 'yellow-mustard-seeds',
    name: 'Yellow Mustard Seeds',
    category: 'seeds',
    categoryLabel: 'Edible Seeds',
    image: '/images/Yellow_Mustard_Seeds.jpg',
    isBestseller: true,
    visualForm: 'Cleaned Whole Seeds',
    description: 'Cleaned, uniformly graded yellow mustard seeds procured for high-yield oil crushing and spice processing.',
    suitability: ['Oil Crushing Units', 'Spice Grinding & Blending', 'Institutional Wholesale']
  },
  // 3. Yellow Mustard Cake
  {
    id: 'yellow-mustard-cake',
    name: 'Yellow Mustard Cake',
    category: 'cakes',
    categoryLabel: 'De-Oiled Cake',
    image: '/images/Yellow_Mustard_Cake.jpg',
    visualForm: 'De-Oiled Residue Flakes / Slabs',
    description: 'Nutrient-rich residual cake obtained after extracting oil from yellow mustard seeds, suitable for animal feed formulating and agricultural applications.',
    suitability: ['Cattle & Poultry Feed Formulations', 'Organic Soil Enrichment', 'Agri-commodity Processing']
  },
  // 4. Groundnut Seeds
  {
    id: 'groundnut-seeds',
    name: 'Groundnut Seeds (Peanuts)',
    category: 'seeds',
    categoryLabel: 'Edible Seeds',
    image: '/images/Groundnut_Seeds.jpg',
    isBestseller: true,
    visualForm: 'Raw Shelled Kernels',
    description: 'Selected whole groundnut kernels supplied for oil expelling, roasting, confectionery, and food manufacturing applications.',
    suitability: ['Peanut Oil Extraction', 'Snack & Peanut Butter Manufacturing', 'Bulk Commodity Trade']
  },
  // 5. Sesame Seeds Photo 1 (Natural White Sesame)
  {
    id: 'sesame-seeds-natural',
    name: 'Sesame Seeds (Natural Grade)',
    category: 'seeds',
    categoryLabel: 'Edible Seeds',
    image: '/images/Sesame_Seeds_Photo_1.jpg',
    isBestseller: true,
    visualForm: 'Natural Whole Seeds',
    description: 'Natural whole white sesame seeds suitable for direct oil extraction, bakery toppings, tahini, and food processing.',
    suitability: ['Sesame Oil Expelling', 'Bakery & Confectionery', 'Export & FMCG Packing']
  },
  // 6. Sesame Seeds Photo 2 (Cleaned Sesame)
  {
    id: 'sesame-seeds-cleaned',
    name: 'Sesame Seeds (Cleaned Grade)',
    category: 'seeds',
    categoryLabel: 'Edible Seeds',
    image: '/images/Sesame_Seeds_Photo_2.jpg',
    isBestseller: true,
    visualForm: 'Machine-Cleaned Seeds',
    description: 'Carefully sorted and cleaned sesame seeds with minimal foreign matter, ready for commercial processing and culinary packaging.',
    suitability: ['Gourmet Culinary Packaging', 'Commercial Food Ingredients', 'High-purity Oil Pressing']
  },
  // 7. Black Sesame Seeds
  {
    id: 'black-sesame-seeds',
    name: 'Black Sesame Seeds',
    category: 'seeds',
    categoryLabel: 'Edible Seeds',
    image: '/images/Black_Sesame_Seeds.jpg',
    visualForm: 'Whole Black Seeds',
    description: 'Premium black sesame seeds known for distinct nutty intensity and rich oil content, utilized in traditional preparations and specialty oils.',
    suitability: ['Specialty Oil Processing', 'Ayurvedic & Health Formulations', 'Asian Culinary Ingredients']
  },
  // 8. Black Mustard Seeds
  {
    id: 'black-mustard-seeds',
    name: 'Black Mustard Seeds',
    category: 'seeds',
    categoryLabel: 'Edible Seeds',
    image: '/images/Black_Mustard_Seeds.jpg',
    visualForm: 'Cleaned Whole Seeds',
    description: 'Traditional pungent black mustard seeds with high oil concentration, widely used across domestic edible oil crushing and condiment production.',
    suitability: ['Black Mustard Oil Expelling', 'Spice Packaging & Seasonings', 'Pickle & Condiment Manufacturing']
  },
  // 9. Black Mustard Cake
  {
    id: 'black-mustard-cake',
    name: 'Black Mustard Cake',
    category: 'cakes',
    categoryLabel: 'De-Oiled Cake',
    image: '/images/Black_Mustard_Cake.jpg',
    visualForm: 'De-Oiled Residue Flakes / Slabs',
    description: 'Residual de-oiled cake remaining after pressing black mustard seeds, high in nitrogen and organic matter for cattle feed and fertilizer blends.',
    suitability: ['Compound Cattle Feed', 'Organic Nitrogenous Fertilizer', 'Bio-enrichment Substrates']
  }
];

export const COMPANY_DETAILS = {
  name: 'Prime Fresh Oil Mills',
  phone: '+91 90572 92529',
  email: 'Puneet2garg@gmail.com',
  addressPlaceholder: '[Business / Factory Address Pending Confirmation — Registered Industrial Hub, India]',
  businessScope: 'Edible seeds, oils and de-oiled cakes manufacturing and wholesale supply',
  bestsellers: ['Yellow Mustard Oil', 'Groundnut Seeds', 'Sesame Seeds and Sesame Oil'],
  enquiryProcess: [
    {
      step: '01',
      title: 'Enquiry Submission',
      desc: 'Submit your product requirements, required volumes, and delivery timeline through our quotation portal.'
    },
    {
      step: '02',
      title: 'Commercial Discussion',
      desc: 'Our sales team reviews raw material batch availability, confirms specifications, and shares competitive B2B quotation terms.'
    },
    {
      step: '03',
      title: 'Sample Evaluation',
      desc: 'For private-label and FMCG clients, representative product or oil samples can be dispatched for laboratory testing.'
    },
    {
      step: '04',
      title: 'Dispatch & Logistics',
      desc: 'Upon commercial sign-off, bulk orders are packed and dispatched directly from our mill facility to your destination.'
    }
  ]
};
