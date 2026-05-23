export interface Service {
  id: string;
  title: string;
  category: 'drilling' | 'solar' | 'water' | 'piping';
  description: string;
  longDescription: string;
  specs: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface CalculatorState {
  hasBorehole: boolean;
  depthEst: number; // in meters (40 - 120m typical in Zimbabwe)
  pumpType: 'solar' | 'ac' | 'none';
  hasSolarSystem: boolean; // e.g. 6.2KVA solar system
  tankSize: 'none' | '2500L' | '5000L' | '10000L';
  tankStandHeight: 'none' | '2m' | '3m' | '4m' | '6m';
  needsSurvey: boolean;
  pipingLength: number; // in meters
}
