
import { FeatureCard, Variant, ExtractionStep, Testimonial, Ingredient } from './types';

export const VARIANTS: Variant[] = [
  { id: 'VIRD-01', name: 'Forest Focus', price: '$4.99', image: './product-images/Forest focus.png' },
  { id: 'VIRD-02', name: 'Nordic Berry', price: '$5.99', image: './product-images/Nordic Berry.png' },
  { id: 'VIRD-03', name: 'Glacial Electrolyte', price: '$6.49', image: './product-images/Glacial Electrolyte.png' },
  { id: 'VIRD-04', name: 'Adaptogen Energy', price: '$6.99', image: './product-images/Adaptogen Energy.png' },
  { id: 'VIRD-05', name: 'Night Repair', price: '$5.49', image: './product-images/Night Repair.png' },
];

export const FEATURES: FeatureCard[] = [
  {
    id: 'MOD-A',
    title: 'Chlorophyll Boost',
    description: 'Advanced bioavailability mimics blood oxygenation. Our proprietary moss extract increases cellular respiration by up to 24% in clinical trials.',
    metric: '98%',
    metricLabel: 'O2 Saturation',
    icon: 'bloodtype'
  },
  {
    id: 'MOD-B',
    title: 'Zero Crash',
    description: 'Slow-release nutrient delivery system. Unlike synthetic caffeine, our lichen-based adaptogens provide a steady 6-hour energy arc.',
    metric: '6 HRS',
    metricLabel: 'Release Cycle',
    icon: 'speed'
  },
  {
    id: 'MOD-C',
    title: 'Sustainable Growth',
    description: 'Grown, not brewed. Cultivated in vertical geo-thermal labs using 90% less water than traditional energy crops.',
    metric: '-90%',
    metricLabel: 'Water Usage',
    icon: 'spa'
  }
];

export const EXTRACTION_STEPS: ExtractionStep[] = [
  { id: '01', title: 'Cryo-Harvesting', description: 'Harvested at -5°C to lock in phytonutrients immediately upon collection from volcanic bedrock.' },
  { id: '02', title: 'Sonic Separation', description: 'Ultrasonic waves gently separate impurities without heat, preserving 99.9% of active enzymes.' },
  { id: '03', title: 'Cellular Activation', description: 'The final concentrate is hyper-oxygenated to ensure rapid absorption and immediate energy release.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'REP-001',
    name: 'Dr. Aris Thorne',
    role: 'Neuro-Surgeon',
    content: "In high-stakes environments, focus is non-negotiable. Forest Fuel provides a sustained cognitive clarity that synthetic alternatives simply cannot match. It feels like natural biological overclocking.",
    focusBoost: '+32% FOCUS',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&fit=crop'
  },
  {
    id: 'REP-002',
    name: 'Elena Vance',
    role: 'Quant Architect',
    content: "The 6-hour release cycle is exactly what I needed for deep work blocks. No jitters, no afternoon crash. Just pure, oxygenated flow state from start to finish.",
    focusBoost: '+28% FLOW',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&fit=crop'
  },
  {
    id: 'REP-003',
    name: 'Marcus Chen',
    role: 'Precision Pilot',
    content: "When reaction times matter, every millisecond counts. This isn't just an energy drink; it's a critical component of my performance stack. The moss-based extraction is a game changer.",
    focusBoost: '+15ms REFLEX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop'
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'ING-01',
    name: 'Icelandic Moss',
    scientificName: 'Cetraria islandica',
    description: 'A resilient lichen from the Arctic highlands, rich in polysaccharides and lichenin.',
    benefit: 'Cellular Longevity',
    icon: 'eco'
  },
  {
    id: 'ING-02',
    name: 'Liquid Chlorophyll',
    scientificName: 'Sodium Copper Chlorophyllin',
    description: 'Derived from volcanic-rich flora to maximize oxygen carrying capacity in the bloodstream.',
    benefit: 'Oxygen Saturation',
    icon: 'opacity'
  },
  {
    id: 'ING-03',
    name: 'Arctic Rhodiola',
    scientificName: 'Rhodiola rosea',
    description: 'Potent adaptogen sourced from sub-zero altitudes to combat oxidative stress.',
    benefit: 'Cognitive Stamina',
    icon: 'psychology'
  },
  {
    id: 'ING-04',
    name: 'Volcanic Minerals',
    scientificName: 'Magnesium / Zinc Complex',
    description: 'Deep-earth trace minerals filtered through basalt layers for peak metabolic function.',
    benefit: 'Metabolic Balance',
    icon: 'landscape'
  },
  {
    id: 'ING-05',
    name: 'Bio-Vitamin B12',
    scientificName: 'Methylcobalamin',
    description: 'High-purity bioactive form of B12 for direct neural support without synthetic fillers.',
    benefit: 'Neural Firing',
    icon: 'bolt'
  },
  {
    id: 'ING-06',
    name: 'Glacial H2O',
    scientificName: 'Pure Hydrogen Matrix',
    description: 'Filtered through 1000-year-old glacial silt for unparalleled hydration purity.',
    benefit: 'Systemic Flush',
    icon: 'water_drop'
  }
];
