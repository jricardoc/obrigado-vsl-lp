export interface CardData {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrailData {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface LearningItem {
  id: string;
  title: string;
  description: string;
}

export interface ResultImage {
  id: string;
  src: string;
  alt: string;
}
