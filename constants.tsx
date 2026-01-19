
import React from 'react';
import { Service, TeamMember, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pet Wellness Care',
    description: 'Comprehensive annual exams and preventative treatments.',
    longDescription: 'Our wellness care program is designed to keep your pet healthy throughout their life. We offer comprehensive physical exams, vaccinations tailored to your pet\'s lifestyle, parasite prevention, and early disease detection screening.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200',
    icon: '🏥',
    slug: 'pet-wellness-care'
  },
  {
    id: '2',
    title: 'Soft Tissue Surgery',
    description: 'Expert surgical care for non-bone related procedures.',
    longDescription: 'Our experienced veterinarians perform a wide range of soft tissue surgeries, from routine spays and neuters to more complex procedures like mass removals and gastrointestinal surgery.',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200',
    icon: '✂️',
    slug: 'pet-surgery'
  },
  {
    id: '3',
    title: 'Pet Dentistry',
    description: 'Professional dental cleaning and oral health care.',
    longDescription: 'Oral health is vital to your pet\'s overall well-being. We provide professional dental cleanings under anesthesia, digital dental X-rays, and extractions when necessary to keep your pet\'s smile bright and healthy.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200',
    icon: '🦷',
    slug: 'pet-dentistry'
  },
  {
    id: '4',
    title: 'Puppy & Kitten Care',
    description: 'Getting your new family member off to the best start.',
    longDescription: 'The first few months of life are critical for growth and development. We offer specialized packages for puppies and kittens that include a series of wellness exams, core vaccinations, deworming, and nutritional counseling.',
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=1200',
    icon: '🐾',
    slug: 'puppy-kitten-care'
  },
  {
    id: '5',
    title: 'Exotic Pet Care',
    description: 'Specialized medical attention for unique animal companions.',
    longDescription: 'We treat more than just dogs and cats! Our veterinarians provide medical care and husbandry advice for rabbits, guinea pigs, hamsters, ferrets, and certain avian and reptilian species.',
    image: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=1200',
    icon: '🐢',
    slug: 'exotic-pet-care'
  },
  {
    id: '6',
    title: 'Pet Grooming',
    description: 'Pampering your pets while keeping them clean and comfortable.',
    longDescription: 'Our professional grooming services help your pet look and feel their best. We offer bathing, brushing, hair trimming, nail clipping, and ear cleaning for all breeds.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1200',
    icon: '🛁',
    slug: 'pet-grooming'
  }
];

export const DOCTORS: TeamMember[] = [
  {
    id: 'd1',
    name: 'Dr. Paul Edwards',
    role: 'Veterinarian',
    bio: 'Dr. Edwards graduated from the Ontario Veterinary College in 1985 and has been practicing in Tillsonburg ever since.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'd2',
    name: 'Dr. Haris Aziz',
    role: 'Veterinarian',
    bio: 'Dr. Aziz brings a wealth of knowledge and a gentle touch to our clinic. He has a special interest in feline medicine.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'd3',
    name: 'Dr. Shahid Zaman',
    role: 'Veterinarian',
    bio: 'Dr. Zaman is passionate about diagnostic imaging and internal medicine. He believes in proactive, preventative care.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400'
  }
];

export const CARE_TEAM: TeamMember[] = [
  {
    id: 'c1',
    name: 'Josie Edwards',
    role: 'Practice Management',
    bio: 'Josie is the heart of our administrative operations, ensuring that the clinic runs smoothly.',
    image: 'https://images.unsplash.com/photo-1591946614421-1fbf5218f7c9?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c2',
    name: 'Kayla McClure (RVT)',
    role: 'Registered Veterinary Technician',
    bio: 'Dedicated to providing high-level nursing care and assisting in surgery with precision.',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c3',
    name: 'Kella Britton',
    role: 'Client Care Representative',
    bio: 'Kella is likely the first friendly face you\'ll see. She makes every client experience positive.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c4',
    name: 'Wendy V.',
    role: 'Veterinary Assistant',
    bio: 'Wendy provides essential support to our medical team and ensures patients are comfortable.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'r1',
    name: 'Emily Watson',
    text: 'The team saved my cat Luna after a scary accident. I couldn\'t be more grateful for their specialized care.',
    rating: 5
  },
  {
    id: 'r2',
    name: 'John Doe',
    text: 'The best vet clinic in the city. Professional, clean, and they genuinely care about animals.',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Seasonal Allergies in Dogs',
    excerpt: 'Is your pup scratching more than usual? Learn how to spot the signs of seasonal allergies.',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600'
  }
];
