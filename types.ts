export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  tagline: string;
  ctaText: string;
  
  // Images
  mainImage: string;
  secondaryImage: string;
  thirdImage: string;
  
  // Section 1: Intro
  section1Heading: string;
  section1Subheading: string;
  section1Description: string;
  
  // Section 2: What to expect
  section2Heading: string;
  section2Subheading: string;
  yellowBanners: ServiceFeature[];
  
  // Section 3: Detailed list
  section3Heading: string;
  section3Subheading: string;
  section3List: string[];
  section3Description: string;
  
  // Section 4: Why it matters
  section4Heading: string;
  section4Description: string;
  section4Bullets: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
