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
    longDescription: `Prevention is the key to a long, healthy life. Our wellness exams go beyond a simple checkup. 

We perform a nose-to-tail physical assessment, review nutritional needs, and customize a vaccination schedule specifically for your pet's environment and lifestyle.`,
    image: 'https://www.ferapets.com/cdn/shop/articles/588881756395.png?v=1713379199',
    icon: '🏥',
    slug: 'pet-wellness-care'
  },
  {
    id: '2',
    title: 'Soft Tissue Surgery',
    description: 'Expert surgical care for non-bone related procedures.',
    longDescription: `From routine procedures to life-saving mass removals, our surgical suite is equipped with advanced technology. 

We prioritize pain management and safety, ensuring your pet is closely monitored by a dedicated technician from the moment they arrive until they are back in your arms.`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASbq2b42YEz-D64f4OArUDlTK_u9tFSCNNg&s',
    icon: '✂️',
    slug: 'pet-surgery'
  },
  {
    id: '3',
    title: 'Pet Dentistry',
    description: 'Professional dental cleaning and oral health care.',
    longDescription: `Did you know dental health can affect your pet's heart and kidneys? 

Our professional dental cleanings include scaling, polishing, and digital X-rays to find hidden problems below the gumline, ensuring your pet stays pain-free.`,
    image: 'https://raleighncvet.com/wp-content/uploads/2018/08/raleigh-vet-dentstry-animal-dentist-falls-village-vet-hospital.jpg',
    icon: '🦷',
    slug: 'pet-dentistry'
  },
  {
    id: '4',
    title: 'Puppy & Kitten Care',
    description: 'Getting your new family member off to the best start.',
    longDescription: `Start your newest family member on the right paw. 

We provide a comprehensive "welcome" package including initial screenings, core vaccinations, and behavioral advice to help your puppy or kitten grow into a healthy, happy adult.`,
    image: 'https://cdcssl.ibsrv.net/ibimg/smb/908x586_80/webmgr/0o/c/y/4t.jpg.webp?7e1d466118be0a9052a0b4f40a1c7cc3',
    icon: '🐾',
    slug: 'puppy-kitten-care'
  },
  {
    id: '5',
    title: 'Exotic Pet Care',
    description: 'Specialized medical attention for unique animal companions.',
    longDescription: `Rabbits, guinea pigs, and reptiles require very specific care. 

Our team understands the unique biology and husbandry needs of exotic pets, offering specialized exams and habitat advice to keep your unique friend thriving.`,
    image: 'https://www.fallsroad.com/files/baltimore-exotic-2.jpg',
    icon: '🐢',
    slug: 'exotic-pet-care'
  },
  {
    id: '6',
    title: 'Pet Grooming',
    description: 'Pampering your pets while keeping them clean and comfortable.',
    longDescription: `Professional grooming is about more than just looking good; it's about skin health and hygiene. 

We offer therapeutic baths, breed-specific clips, and gentle handling to make sure your dog leaves looking and feeling refreshed.`,
    image: 'https://plus.unsplash.com/premium_photo-1663012822996-ba7e04f3627a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: '🛁',
    slug: 'pet-grooming'
  },
  {
    id: '7',
    title: 'Cat Grooming',
    description: 'Specialized pampering for our feline friends.',
    longDescription: `Cats require a very different approach to grooming. 

Our low-stress grooming techniques help manage shedding and mats while keeping your cat calm and safe throughout the process.`,
    image: 'https://cdn.shopify.com/s/files/1/0012/1749/5111/files/cat_getting_a_haircut_from_cat_groomer_480x480.jpg?v=1720617901',
    icon: '🐈',
    slug: 'cat-grooming'
  }
];
export const DOCTORS: TeamMember[] = [
  {
    id: 'd1', 
    name: 'Dr. Paul Edwards',
    role: 'Veterinarian',
    bio: 'Dr. Edwards graduated from the Ontario Veterinary College in 1985 and has been practicing in Tillsonburg ever since. ',
    image: drpaul
  },
  {
    id: 'd2',
    name: 'Dr. Haris Aziz',
    role: 'Veterinarian',
    bio: 'Bio coming soon.',
    image: aziz
  },
  {
    id: 'd3',
    name: 'Dr. Shahid Zaman',
    role: 'Veterinarian',
    bio: 'Bio coming soon.',
    image: shahid
  },
   
];

export const CARE_TEAM: TeamMember[] = [
  {
    id: 'c1',
    name: 'Josie Edwards',
    role: 'Practice Management',
    bio: 'Josie has been with Edwards Veterinary since its beginnings in 1993 as the office administrator. She graduated from St. Clair College’s Animal Health Technician program in 1980 and worked in London and Tillsonburg',
    image: josie // Reusing img10 or you can add more imports
  },
   {
    id: 'c2',
    name: 'Kayla McClure (RVT)',
    role: 'Practice Management',
    bio: 'She graduated from the Northern College veterinary technician program in 2022. That same year, she passed her board exam and became a Registered Veterinary Technician. She went back to school and received her bachelor’s, became a certified wildlife rehabilitator, and registered as a veterinary technologist in 2023.',
    image: keyla
  },
   {
    id: 'c1',
    name: 'Kelly Britton (Reception)',
    role: 'Practice Management',
    bio: 'Since joining, Kelly has loved working at Edwards Veterinary Services. Her focus is on providing care and compassion to pets and their owners. She takes pride in greeting our clients and ensuring a friendly, respectful environment that helps everyone feel welcome.',
    image: kella // Reusing img10 or you can add more imports
   },
    {
    id: 'c1',
    name: ' Wendy V.(Technician)',
    role: 'tech',
    bio: 'Wendy grew up in Tillsonburg and had a love for animals at an early age. Her many pets included cats, dogs, rabbits, birds, hamsters, and horses.',
    image: wendy // Reusing img10 or you can add more imports
   }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'r1',
    name: 'Mansoor',
    text: 'The team saved my cat Pablo after a scary accident.',
    rating: 5
  },
  {
    id: 'r2',
    name: 'John Doe',
    text: 'The best vet clinic in the city.',
    rating: 5
  },
   {
    id: 'r2',
    name: ' Ammad',
    text: 'No words my experience was great!.',
    rating: 5
  },
   {
    id: 'r2',
    name: 'Sonia',
    text: 'Its far from my place but it was worth it bringing my pet here.',
    rating: 4
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Seasonal Allergies in Dogs: What Every Pet Parent Should Know',
    excerpt: `Is your pup scratching more than usual? Learn how to spot the subtle signs of seasonal allergies, 
    what triggers them, and how you can provide relief to keep your furry friend comfortable and happy all year round.`,
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200' // Image of a dog sniffing flowers
  },
  {
    id: 'b2',
    title: 'The Importance of Prebiotics and Probiotics in Dogs & Cat Food',
    excerpt: `Prebiotics (food for good bacteria) and probiotics (live beneficial bacteria) are crucial for dog and cat health, supporting a balanced gut microbiome that strengthens the immune system (70% of which is in the gut), improves digestion, and enhances nutrient absorption, leading to better stools, skin, coat, and even mood, especially vital after antibiotics or for digestive issues, though consulting a vet is key for tailored use. `,
    date: 'Jan 20, 2024',
    image: 'https://iandloveandyou.com/cdn/shop/articles/Pet-Food-Prebiotics-and-Probiotics_ba26be98-0361-46fb-a8af-2cf4418db9c7.jpg?v=1741835334&width=2800' // Image of a dog getting teeth checked
  }
];