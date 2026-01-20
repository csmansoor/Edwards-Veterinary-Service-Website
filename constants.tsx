import React from 'react';
import { Service, TeamMember, Testimonial, BlogPost } from './types';

// Importing local images from the ./images folder
import drpaul from './images/paul.jpg';
import kella from './images/kella.jpg';
import josie from './images/josie.jpg';
import aziz from './images/aziz.jpg';
import shahid from './images/shahid.jpg';
import wendy from './images/wendy.jpg';
import keyla from './images/keyla.jpg';


export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Pet Wellness Care',
    description: 'Comprehensive annual exams and preventative treatments.',
    longDescription: 'Our wellness care program is designed to keep your pet healthy throughout their life.',
    image: drpaul,
    icon: '🏥',
    slug: 'pet-wellness-care'
  },
  {
    id: '2',
    title: 'Soft Tissue Surgery',
    description: 'Expert surgical care for non-bone related procedures.',
    longDescription: 'Our experienced veterinarians perform a wide range of soft tissue surgeries.',
    image: kella,
    icon: '✂️',
    slug: 'pet-surgery'
  },
  {
    id: '3',
    title: 'Pet Dentistry',
    description: 'Professional dental cleaning and oral health care.',
    longDescription: 'Oral health is vital to your pet\'s overall well-being.',
    image: josie,
    icon: '🦷',
    slug: 'pet-dentistry'
  },
  {
    id: '4',
    title: 'Puppy & Kitten Care',
    description: 'Getting your new family member off to the best start.',
    longDescription: 'The first few months of life are critical for growth and development.',
    image: aziz,
    icon: '🐾',
    slug: 'puppy-kitten-care'
  },
  {
    id: '5',
    title: 'Exotic Pet Care',
    description: 'Specialized medical attention for unique animal companions.',
    longDescription: 'We treat more than just dogs and cats!',
    image: shahid,
    icon: '🐢',
    slug: 'exotic-pet-care'
  },
  {
    id: '6',
    title: 'Pet Grooming',
    description: 'Pampering your pets while keeping them clean and comfortable.',
    longDescription: 'Our professional grooming services help your pet look and feel their best.',
    image: wendy,
    icon: '🛁',
    slug: 'pet-grooming'
  },
   {
    id: '7',
    title: 'Cat Grooming',
    description: 'Pampering your cat while keeping them clean and comfortable.',
    longDescription: 'Our professional grooming services help your pet look and feel their best.',
    image: keyla,
    icon: '🛁',
    slug: 'cat-grooming'
  },
];

export const DOCTORS: TeamMember[] = [
  {
    id: 'd1', 
    name: 'Dr. Paul Edwards',
    role: 'Veterinarian',
    bio: 'Dr. Edwards graduated from the Ontario Veterinary College in 1985.',
    image: drpaul
  },
  {
    id: 'd2',
    name: 'Dr. Haris Aziz',
    role: 'Veterinarian',
    bio: 'Dr. Aziz brings a wealth of knowledge and a gentle touch to our clinic.',
    image: aziz
  },
  {
    id: 'd3',
    name: 'Dr. Shahid Zaman',
    role: 'Veterinarian',
    bio: 'Dr. Zaman is passionate about diagnostic imaging and internal medicine.',
    image: shahid
  },
   
   {
    id: 'd5',
    name: 'Kayla ',
    role: 'Veterinarian',
    bio: 'Dr. Zaman is passionate about diagnostic imaging and internal medicine.',
    image: keyla
  },
  
];

export const CARE_TEAM: TeamMember[] = [
  {
    id: 'c1',
    name: 'Josie Edwards',
    role: 'Practice Management',
    bio: 'Josie is the heart of our administrative operations.',
    image: josie // Reusing img10 or you can add more imports
  },
   {
    id: 'c2',
    name: 'Kella Britton',
    role: 'Veterinarian',
    bio: 'Dr. Zaman is passionate about diagnostic imaging and internal medicine.',
    image: kella
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'r1',
    name: 'Emily Watson',
    text: 'The team saved my cat Luna after a scary accident.',
    rating: 5
  },
  {
    id: 'r2',
    name: 'John Doe',
    text: 'The best vet clinic in the city.',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Seasonal Allergies in Dogs',
    excerpt: 'Is your pup scratching more than usual?',
    date: 'Oct 12, 2023',
    image: aziz  // Reusing img1 as an example
  }
];