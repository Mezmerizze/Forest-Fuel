
export interface Variant {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: string;
}

export interface ExtractionStep {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  focusBoost: string;
  avatar: string;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  benefit: string;
  icon: string;
}
