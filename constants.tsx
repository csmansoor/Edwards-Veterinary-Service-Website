import React from 'react';
import { Service, TeamMember, BlogPost } from './types';
import Testimonial from './pages/Testimonials';
// Importing local images
// @ts-ignore
import drpaul from './images/paul.jpg';
// @ts-ignore
import kella from './images/kella.jpg';
// @ts-ignore
import josie from './images/josie.jpg';
// @ts-ignore
import aziz from './images/aziz.jpg';
// @ts-ignore
import shahid from './images/shahid.jpg';
// @ts-ignore
import wendy from './images/wendy.jpg';
// @ts-ignore
import keyla from './images/keyla.jpg';

export const SERVICES: Service[] = [
  {
    id: 'wellness',
    slug: 'pet-wellness-care',
    title: 'Pet Wellness Care',
    icon: '🏥',
    description: 'From annual exams and parasite prevention to tailored vaccination schedules, we focus on early detection and long-term wellness.',
    tagline: 'The foundation of lifelong health',
    ctaText: 'Learn More About Pet Wellness Care',
    mainImage:'https://media.istockphoto.com/id/2222963156/photo/veterinarian-examining-a-cat-with-stethoscope-in-clinic.webp?a=1&b=1&s=612x612&w=0&k=20&c=vtigdKbJ2-RM--yl9xPEX7xwNrsfbuOJTTkv3qRxkOQ=',
    secondaryImage:'https://media.istockphoto.com/id/2160576555/photo/veterinarian-examining-happy-dog-during-routine-checkup.webp?a=1&b=1&s=612x612&w=0&k=20&c=q9QkYc_mRUU9N7hob__lXUhBJS4G4_b_EpANHtnAriE=',
    thirdImage:'https://plus.unsplash.com/premium_photo-1661962400362-e6aea4885bb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwd2VsbG5lc3MlMjBjYXJlJTIwY2xpbmljYWx8ZW58MHx8MHx8fDA%3D',
    section1Heading: 'LIFELONG WELLNESS STARTS HERE',
    section1Subheading: 'Preventive Pet Care in Tillsonburg, ON',
    section1Description: 'Routine preventive care is the key to your pet’s long, healthy life. Partner with our team at Edwards Veterinary Services for comprehensive pet wellness care in Tillsonburg, ON, to support your pet through every life stage.',
    section2Heading: 'What to Expect at a Wellness Appointment',
    section2Subheading: 'We focus on proactive, personalized care to keep your pet healthy, happy, and thriving.',
    yellowBanners: [
      { title: 'Initial Assessment', description: 'We begin with a conversation about your pet’s habits, nutrition, and any recent changes.' },
      { title: 'Physical Exam', description: 'We check eyes, ears, heart, lungs, skin, joints, and other systems for early signs of concern.' },
      { title: 'Vaccinations', description: 'We review your pet’s vaccination history and administer any necessary boosters.' },
      { title: 'Parasite Control', description: 'We evaluate for fleas, ticks, and internal parasites, and recommend ongoing prevention.' }
    ],
    section3Heading: 'Annual Pet Checkups & Preventive Care',
    section3Subheading: 'Our wellness visits typically include:',
    section3List: ['Full physical examination', 'Weight and body condition assessment', 'Vaccination updates', 'Parasite screening and prevention', 'Dental health evaluation', 'Nutrition and diet recommendations'],
    section3Description: 'Through routine pet wellness exams, we can detect early signs of illness and provide proactive care.',
    section4Heading: 'Why Pet Wellness Exams Matter',
    section4Description: 'Preventive care isn’t just for avoiding illness — it’s about building a long, comfortable life for your pet. Regular wellness visits:',
    section4Bullets: [
      'Catch early warning signs of disease before they become serious',
      'Help manage chronic conditions more effectively',
      'Keep vaccinations and parasite prevention on schedule',
      'Strengthen the bond between your pet and veterinary team'
    ]
  },
  {
    id: 'surgery',
    slug: 'pet-soft-tissue-surgery',
    title: 'Pet Soft Tissue Surgery',
    icon: '✂️',
    description: 'Our experienced veterinarians perform a range of soft tissue surgeries using modern techniques and careful monitoring from our comprehensive in-house suite.',
    tagline: 'Safe, effective surgical care tailored to your pet’s needs',
    ctaText: 'Schedule a Surgical Consultation',
    mainImage: 'https://images.unsplash.com/photo-1727830968495-ea2798aaee35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBldCUyMHN1cmdlcnklMjBjbGluaWNhbHxlbnwwfHwwfHx8MA%3D%3D',
    secondaryImage: 'https://images.unsplash.com/photo-1758206523735-079e56f2faf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwc3VyZ2VyeSUyMGNsaW5pY2FsfGVufDB8fDB8fHww',
    thirdImage: 'https://media.istockphoto.com/id/92213089/photo/veterinary-dentistry.webp?a=1&b=1&s=612x612&w=0&k=20&c=ow7apjUJ61rBm8sDQxYR3wuFtMkhAzRdjyrTO2ocTYY=',
    section1Heading: 'EXPERT SURGICAL CARE FOR YOUR PET',
    section1Subheading: 'Soft Tissue Surgery in Tillsonburg, ON',
    section1Description: 'When your pet needs surgery, you want the highest standard of care. Our team provides safe, precise soft tissue procedures using modern techniques.',
    section2Heading: 'Safety & Comfort During Surgery',
    section2Subheading: 'Your pet’s safety is our number one priority during every procedure.',
    yellowBanners: [
      { title: 'Pre-Op Bloodwork', description: 'We screen internal organ function to ensure your pet is ready for anesthesia.' },
      { title: 'Continuous Monitoring', description: 'A dedicated technician monitors heart rate, oxygen, and blood pressure.' },
      { title: 'Pain Management', description: 'Advanced protocols ensure your pet wakes up comfortable and pain-free.' },
      { title: 'Sterile Environment', description: 'We maintain hospital-grade sterilization to ensure the best possible outcomes.' }
    ],
    section3Heading: 'Surgical Services We Provide',
    section3Subheading: 'Our surgical suite is equipped for variety of procedures:',
    section3List: ['Spay and Neuter', 'Mass/Tumor removals', 'Abdominal surgery', 'Laceration repair', 'Bladder stone removal'],
    section3Description: 'We focus on minimally invasive techniques whenever possible to speed up recovery.',
    section4Heading: 'Post-Operative Support',
    section4Description: 'Healing continues long after the surgery is over. We support you with:',
    section4Bullets: [
      'Detailed home care and medication instructions',
      'Tailored pain management for the recovery period',
      'Follow-up appointments to monitor healing progress',
      'Direct access to our team for recovery questions'
    ]
  },
  {
    id: 'dentistry',
    slug: 'pet-dentistry',
    title: 'Pet Dentistry',
    icon: '🦷',
    description: 'We offer professional dental cleanings, digital dental X-rays, and oral surgery to address tooth pain, infection, and long-term dental health.',
    tagline: 'Healthy teeth mean a healthier, happier pet',
    ctaText: 'Discover Our Pet Dental Services',
    mainImage: 'https://plus.unsplash.com/premium_photo-1663040637726-fbfa797696a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBldCUyMGRlbnRpc3RvcnklMjBjbGluaWNhbHxlbnwwfHwwfHx8MA%3D%3D',
    secondaryImage: 'https://images.unsplash.com/photo-1740410728872-cea63dd27621?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBldCUyMGRlbnRpc3RvcnklMjBjbGluaWNhbHxlbnwwfHwwfHx8MA%3D%3D',
    thirdImage: 'https://plus.unsplash.com/premium_photo-1663040486740-60e41b8fd1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBldCUyMGRlbnRpc3Rvcnl8ZW58MHx8MHx8fDA%3D',
    section1Heading: 'ORAL HEALTH IS OVERALL HEALTH',
    section1Subheading: 'Pet Dentistry in Tillsonburg, ON',
    section1Description: 'Dental disease is one of the most common issues in pets. We provide comprehensive dental care to prevent heart, liver, and kidney complications.',
    section2Heading: 'What Happens During a Dental Visit?',
    section2Subheading: 'Professional dental care requires more than just a quick brush.',
    yellowBanners: [
      { title: 'Oral Examination', description: 'We check for loose teeth, gum inflammation, and hidden infection.' },
      { title: 'Scaling & Polishing', description: 'Removal of plaque and tartar from above and below the gumline.' },
      { title: 'Digital Dental X-Rays', description: 'Essential for seeing what is happening beneath the gums.' },
      { title: 'Safe Extractions', description: 'If a tooth is causing pain, we perform careful extractions with local nerve blocks.' }
    ],
    section3Heading: 'Complete Dental Care',
    section3Subheading: 'Our dental suite features professional equipment including:',
    section3List: ['Ultrasonic scaling', 'Dental polishing', 'High-speed drills for oral surgery', 'Digital radiography', 'Fluoride treatments'],
    section3Description: 'We treat every dental case with a focus on eliminating pain and infection.',
    section4Heading: 'Maintaining the Smile at Home',
    section4Description: 'Prevention starts in your living room. We help you with:',
    section4Bullets: [
      'Instruction on how to brush your pet’s teeth',
      'Recommendations for dental diets and treats',
      'Early detection of bad breath or chewing issues',
      'Customized dental health plans for seniors'
    ]
  },
  {
    id: 'puppy-kitten',
    slug: 'puppy-kitten-care',
    title: 'Puppy & Kitten Care',
    icon: '🐾',
    description: 'We provide early-life care, including exams, vaccines, nutritional advice, and deworming to help your young pets grow strong and healthy.',
    tagline: 'Get your new family member off to a great start',
    ctaText: 'Explore Our Puppy & Kitten Programs',
    mainImage: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBjYXJlJTIwY2xpbmljYWx8ZW58MHx8MHx8fDA%3D',
    secondaryImage: 'https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHB1cHB5JTIwY2FyZSUyMGNsaW5pY2FsfGVufDB8fDB8fHww',
    thirdImage: 'https://plus.unsplash.com/premium_photo-1702598829265-5c375ee8e9e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHB1cHB5JTIwY2FyZSUyMGNsaW5pY2FsfGVufDB8fDB8fHww',
    section1Heading: 'THE BEST START FOR YOUR NEW BEST FRIEND',
    section1Subheading: 'Pediatric Pet Care in Tillsonburg, ON',
    section1Description: 'The first few months of a pet’s life are the most critical for development. We guide you through the process of building a strong immune system.',
    section2Heading: 'Your New Pet’s First Visits',
    section2Subheading: 'We make the first visit fun and informative for both you and your pet.',
    yellowBanners: [
      { title: 'Developmental Exams', description: 'We monitor growth, heart health, and joint development.' },
      { title: 'Immunity Building', description: 'Core vaccinations specifically timed for maximum protection.' },
      { title: 'Parasite Screening', description: 'Testing for intestinal parasites common in young pets.' },
      { title: 'Nutrition Advice', description: 'Getting the calories and nutrients right for rapid growth.' }
    ],
    section3Heading: 'The Puppy & Kitten Roadmap',
    section3Subheading: 'Essential milestones for your pet include:',
    section3List: ['Initial vaccine series', 'Microchipping', 'Spay or Neuter consultations', 'Behavioral health foundations', 'Fecal analysis'],
    section3Description: 'Our goal is to ensure your pet enters adulthood healthy and happy.',
    section4Heading: 'Supporting Your Journey',
    section4Description: 'Becoming a pet parent can be overwhelming. We offer guidance on:',
    section4Bullets: [
      'House training and socialization tips',
      'Safe chew toys and enrichment',
      'Preventing common "mischief" injuries',
      'Establishing a lifelong veterinary bond'
    ]
  },
  {
    id: 'exotic',
    slug: 'exotic-pet-care',
    title: 'Exotic Pet Care',
    icon: '🦜',
    description: 'We treat various exotic pets at our clinic, including birds, reptiles, and small mammals. Our team has experience handling their unique care needs.',
    tagline: 'Trusted care for unique companions',
    ctaText: 'Learn More About Exotic Pet Services',
    mainImage: 'https://media.istockphoto.com/id/1369649907/photo/a-veterinarian-is-checking-the-health-of-a-lovebird-forpus-bird-physical-examination.webp?a=1&b=1&s=612x612&w=0&k=20&c=At_w5P9ZgzjwDqxsJVZnGo_WBgr4-8anb_bPwV7z9yk=',
    secondaryImage: 'https://media.istockphoto.com/id/1451147165/photo/vetenerian-holding-a-bearded-dragon.webp?a=1&b=1&s=612x612&w=0&k=20&c=M7H1l_dKyAerurdjMsjLSMAtpw-tg8q6aOJ8xoL6XVE=',
    thirdImage: 'https://plus.unsplash.com/premium_photo-1663050689215-e2f4f493811c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGV4b3RpYyUyMHBldCUyMGNhcmV8ZW58MHx8MHx8fDA%3D',
    section1Heading: 'COMPASSIONATE CARE FOR UNIQUE COMPANIONS',
    section1Subheading: 'Exotic Veterinary Medicine in Tillsonburg, ON',
    section1Description: 'Exotic pets have specialized biological and husbandry needs. Our team is trained to care for your unique feathered, scaled, or pocket-sized friends.',
    section2Heading: 'Species-Specific Expertise',
    section2Subheading: 'We understand that a rabbit is not a small dog and a parrot is not a cat.',
    yellowBanners: [
      { title: 'Husbandry Reviews', description: 'Checking diet, lighting, and habitat to prevent common illnesses.' },
      { title: 'Avian Exams', description: 'Specialized beak, wing, and health checks for birds.' },
      { title: 'Small Mammals', description: 'Dental and digestive care for rabbits, ferrets, and rodents.' },
      { title: 'Reptile Health', description: 'Monitoring scales, hydration, and nutritional status.' }
    ],
    section3Heading: 'Services for Exotic Pets',
    section3Subheading: 'We provide a wide range of exotic diagnostics:',
    section3List: ['Beak and nail trims', 'Wing clipping', 'Species-specific bloodwork', 'Habitat consultations', 'Nutritional guidance'],
    section3Description: 'Proper care for exotic pets starts with understanding their natural environment.',
    section4Heading: 'Why Choose Us for Exotics?',
    section4Description: 'Not all clinics treat exotic animals. We provide:',
    section4Bullets: [
      'Experience with diverse animal species',
      'Low-stress handling for fragile exotic pets',
      'Education on environmental enrichment',
      'Specialized diagnostic equipment'
    ]
  },
  {
    id: 'grooming',
    slug: 'pet-grooming',
    title: 'Pet Grooming',
    icon: '🛁',
    description: 'Whether your pet needs a sedated groom, medical bath, or regular hygiene maintenance, we offer grooming services in a low-stress environment.',
    tagline: 'Comfort-focused grooming for health and hygiene',
    ctaText: 'Book a Grooming Appointment',
    mainImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200',
    secondaryImage: 'https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=1200',
    thirdImage: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?q=80&w=1200',
    section1Heading: 'HYGIENE IS A HEALTH PRIORITY',
    section1Subheading: 'Professional Grooming in Tillsonburg, ON',
    section1Description: 'Grooming is about more than just a haircut. It is a vital part of maintaining skin health, comfort, and general hygiene for your pet.',
    section2Heading: 'A Gentle Touch for Every Pet',
    section2Subheading: 'Our grooming services are designed to be low-stress and medically sound.',
    yellowBanners: [
      { title: 'Medical Baths', description: 'Specialized shampoos for skin allergies, infections, or pests.' },
      { title: 'Nail & Ear Care', description: 'Proper trimming and cleaning to prevent infections.' },
      { title: 'Hygiene Trims', description: 'Keeping sensitive areas clean and comfortable for your pet.' },
      { title: 'Sedated Grooming', description: 'Available for highly anxious pets under veterinary supervision.' }
    ],
    section3Heading: 'Our Grooming Offerings',
    section3Subheading: 'We offer specialized services for dogs and cats:',
    section3List: ['De-shedding treatments', 'Anal gland expression', 'Flea baths', 'Matted coat removal', 'Drying with low-heat'],
    section3Description: 'We focus on health-based grooming to keep your pet comfortable year-round.',
    section4Heading: 'The Veterinary Advantage',
    section4Description: 'Why groom at a veterinary clinic?',
    section4Bullets: [
      'Early detection of skin lumps or parasites by trained staff',
      'Safe environment for pets with medical conditions',
      'Veterinary supervision for senior or anxious pets',
      'Professional-grade hypoallergenic products'
    ]
  },
  {
    id: 'lab',
    slug: 'in-house-lab',
    title: 'Pet In-House & Referral Lab',
    icon: '🔬',
    description: 'Our in-house lab provides quick results for bloodwork, urinalysis, and other essential tests. We also collaborate with referral labs for advanced diagnostics.',
    tagline: 'Accurate diagnostics without the wait',
    ctaText: 'Find Out More About Our Lab Services',
    mainImage: 'https://plus.unsplash.com/premium_photo-1676325102346-7f0f536d1f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D',
    secondaryImage: 'https://images.unsplash.com/photo-1582719298866-977ee81c87d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBsYWJ8ZW58MHx8MHx8fDA%3Dh',
    thirdImage: 'https://plus.unsplash.com/premium_photo-1661374890961-0e69d1c30e14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1lZGljYWwlMjBsYWJ8ZW58MHx8MHx8fDA%3D',
    section1Heading: 'SCIENCE-DRIVEN DIAGNOSTICS',
    section1Subheading: 'Laboratory Services in Tillsonburg, ON',
    section1Description: 'When your pet is ill, we don’t want to wait days for answers. Our in-house laboratory allows us to get vital data within minutes.',
    section2Heading: 'The Diagnostic Advantage',
    section2Subheading: 'Advanced testing helps us look deeper than a physical exam allows.',
    yellowBanners: [
      { title: 'Blood Chemistry', description: 'Evaluating liver, kidney, and pancreas function instantly.' },
      { title: 'Complete Blood Count', description: 'Checking for infection, anemia, and hydration levels.' },
      { title: 'Urinalysis', description: 'Detecting urinary tract infections or early kidney changes.' },
      { title: 'Fecal Analysis', description: 'Screening for internal parasites and digestive health.' }
    ],
    section3Heading: 'In-House vs Referral Lab',
    section3Subheading: 'We utilize a two-tier approach to laboratory testing:',
    section3List: ['Same-day emergency blood panels', 'Routine wellness screening', 'Specialized endocrine testing', 'Biopsy and histopathology', 'Culture and sensitivity tests'],
    section3Description: 'Our laboratory partners ensure we have access to the most advanced testing available.',
    section4Heading: 'Why We Recommend Lab Work',
    section4Description: 'Diagnostic testing is a window into your pet’s health. It helps us:',
    section4Bullets: [
      'Establish a healthy baseline for future comparison',
      'Detect silent illnesses before symptoms appear',
      'Ensure anesthesia is safe before surgery',
      'Monitor the effectiveness of long-term medications'
    ]
  },
  {
    id: 'xray',
    slug: 'pet-x-ray',
    title: 'Pet X-Ray',
    icon: '📸',
    description: 'We use digital radiography to quickly and effectively assess injuries, internal conditions, and dental concerns.',
    tagline: 'Clear answers with advanced imaging',
    ctaText: 'Read About Our Imaging Services',
    mainImage: 'https://plus.unsplash.com/premium_photo-1663133428083-63c20842d53e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIweCUyMHJheXxlbnwwfHwwfHx8MA%3D%3D',
    secondaryImage: 'https://plus.unsplash.com/premium_photo-1661963606290-34deef08c3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIweCUyMHJheXxlbnwwfHwwfHx8MA%3D%3D',
    thirdImage: 'https://plus.unsplash.com/premium_photo-1702599226134-941aac13ce56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIweCUyMHJheXxlbnwwfHwwfHx8MA%3D%3D',
    section1Heading: 'ADVANCED DIGITAL RADIOGRAPHY',
    section1Subheading: 'Veterinary Imaging in Tillsonburg, ON',
    section1Description: 'Digital X-rays are a non-invasive way to get clear answers about your pet’s internal health, bones, and organs.',
    section2Heading: 'Fast, Clear, and Safe',
    section2Subheading: 'Digital imaging is safer and faster than traditional film X-rays.',
    yellowBanners: [
      { title: 'Bone & Joint Imaging', description: 'Identifying fractures, arthritis, or growth concerns.' },
      { title: 'Chest Radiographs', description: 'Evaluating the heart and lungs for signs of disease.' },
      { title: 'Abdominal Views', description: 'Checking for foreign bodies, stones, or organ changes.' },
      { title: 'Instant Results', description: 'Images are ready for review by our doctors immediately.' }
    ],
    section3Heading: 'When is an X-Ray Needed?',
    section3Subheading: 'X-rays are an essential tool for diagnosing many conditions:',
    section3List: ['Limping or mobility issues', 'Chronic coughing', 'Vomiting or digestive distress', 'Post-injury assessment', 'Dental root evaluation'],
    section3Description: 'We use high-definition digital sensors to ensure the highest image quality.',
    section4Heading: 'The Benefits of Digital Tech',
    section4Description: 'Our digital radiography system provides several advantages:',
    section4Bullets: [
      'Lower radiation exposure for your pet',
      'Enhanced detail through digital manipulation',
      'Easy sharing with board-certified specialists',
      'Faster processing reduces stress for the animal'
    ]
  },
  {
    id: 'nutrition',
    slug: 'pet-nutritional-counselling',
    title: 'Pet Nutritional Counselling',
    icon: '🥣',
    description: 'From weight management to special dietary needs, we’ll help you develop a plan that supports your pet’s overall health.',
    tagline: 'Tailored nutrition for pets at every life stage',
    ctaText: 'Schedule a Nutrition Consultation',
    mainImage: 'https://media.istockphoto.com/id/2209000320/photo/veterinarian-examines-cats-eating-habits-and-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=EonJeciCXahZaIjb_D79RFAaymK-tBVxgIW82zk4oX8=',
    secondaryImage: 'https://media.istockphoto.com/id/2207537408/photo/cat-nutrition-after-surgery.webp?a=1&b=1&s=612x612&w=0&k=20&c=eWLOCw5h6kGKGMDLNvq0762ntKCfqgHR9CjXVXMQ-jU=',
    thirdImage: 'https://media.istockphoto.com/id/2234704502/photo/veterinary-care-for-playful-kittens-enjoying-milk-in-a-clinic-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=Opzji6Fks5q_EjS-BuXx_ysIZrDViJ8CbAIkCATaE7E=',
    section1Heading: 'NUTRITION IS THE FOUNDATION OF HEALTH',
    section1Subheading: 'Nutritional Support in Tillsonburg, ON',
    section1Description: 'Every pet is unique, and so are their dietary needs. We provide science-based nutrition advice to support your pet’s specific health goals.',
    section2Heading: 'Weight and Disease Management',
    section2Subheading: 'Food is medicine. We help you choose the right fuel for your pet.',
    yellowBanners: [
      { title: 'Weight Programs', description: 'Personalized plans to help your pet reach a healthy body condition.' },
      { title: 'Prescription Diets', description: 'Support for kidney disease, allergies, and digestive issues.' },
      { title: 'Life-Stage Diets', description: 'Adjusting nutrients for puppies, kittens, and seniors.' },
      { title: 'Supplements', description: 'Guidance on joint, skin, and digestive supplements.' }
    ],
    section3Heading: 'How We Analyze Nutrition',
    section3Subheading: 'Our nutritional assessments include:',
    section3List: ['Body condition scoring', 'Caloric need calculations', 'Ingredient review', 'Allergy testing support', 'Treat and snack audits'],
    section3Description: 'A small change in diet can make a massive difference in quality of life.',
    section4Heading: 'Why Trust a Vet for Food Advice?',
    section4Description: 'The pet food market is full of marketing. We offer:',
    section4Bullets: [
      'Evidence-based recommendations, not trends',
      'Integration with your pet’s medical records',
      'Monitoring of weight and blood markers',
      'Diets backed by veterinary clinical trials'
    ]
  },
  {
    id: 'mobile',
    slug: 'pet-mobile-services',
    title: 'Pet Mobile Services',
    icon: '🚐',
    description: 'Available to current clients only, we feature a mobile veterinary unit to conveniently deliver our services right in the comfort of home.',
    tagline: 'Bringing our care to your door',
    ctaText: 'Get Details About Mobile Services',
    mainImage: 'https://media.istockphoto.com/id/1369495211/photo/dog-grooming-tutorial-vlog.webp?a=1&b=1&s=612x612&w=0&k=20&c=36BgABI3Oun9-1vtBR9REmdDEO-iFS39DcK8zynOcLc=',
    secondaryImage: 'https://apurrfectgroomer.com/wp-content/uploads/2018/02/27628677_1785241378212997_6085241599818113248_o.jpg',
    thirdImage:'https://jmfamily.com/wp-content/uploads/Aussie-Pet-Mobile-4.jpg',
    section1Heading: 'WE BRING THE CLINIC TO YOUR DOOR',
    section1Subheading: 'Mobile Veterinary Unit in Tillsonburg, ON',
    section1Description: 'For busy families or pets that find the clinic stressful, our Mobile Veterinary Unit provides a convenient alternative for comprehensive care.',
    section2Heading: 'The Comfort of Home',
    section2Subheading: 'Stress-free care for pets in their natural environment.',
    yellowBanners: [
      { title: 'At-Home Wellness', description: 'Physical exams and vaccines done in your living room.' },
      { title: 'Multi-Pet Convenience', description: 'Care for all your pets in one easy home visit.' },
      { title: 'Anxious Pet Support', description: 'Ideal for pets that struggle with car rides or waiting rooms.' },
      { title: 'Quality Time', description: 'Longer appointments with more time for questions.' }
    ],
    section3Heading: 'Services Offered via Mobile',
    section3Subheading: 'Our mobile unit is equipped for:',
    section3List: ['Physical examinations', 'Vaccination boosters', 'Blood and urine collection', 'Parasite prevention', 'Quality of life assessments'],
    section3Description: 'Currently available exclusively for our active clinic clients.',
    section4Heading: 'Is Mobile Right for You?',
    section4Description: 'Mobile services are a great fit for:',
    section4Bullets: [
      'Senior pets with limited mobility',
      'Families with multiple animals',
      'Cats that are difficult to crate',
      'Clients with limited transportation'
    ]
  },
  {
    id: 'emergency',
    slug: 'pet-emergency-care',
    title: 'Pet Emergency Care',
    icon: '🚨',
    description: 'For current clients, we offer 24-hour emergency support and mobile veterinary services, bringing our care to your doorstep when your pet needs it most.',
    tagline: 'Convenient and reliable care when it matters most',
    ctaText: 'More About Emergency Care',
    mainImage: 'https://plus.unsplash.com/premium_photo-1677166331830-c5b00ec76c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBldCUyMGVtZXJnZW5jeSUyMGNhcmV8ZW58MHx8MHx8fDA%3D',
    secondaryImage: 'https://plus.unsplash.com/premium_photo-1664300971660-f119896a8c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwZW1lcmdlbmN5JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    thirdImage:'https://www.ovrs.com/blog/wp-content/uploads/2018/09/OVRS-ER-shutterstock_743948878.jpg',
    section1Heading: 'READY FOR LIFE’S UNEXPECTED MOMENTS',
    section1Subheading: 'Urgent & Emergency Care in Tillsonburg, ON',
    section1Description: 'In a medical crisis, every second matters. We provide rapid intervention and stabilization for our established clients when they need us most.',
    section2Heading: 'Triage and Stabilization',
    section2Subheading: 'Our team is trained to handle critical situations with speed and skill.',
    yellowBanners: [
      { title: 'Emergency Diagnostics', description: 'Fast-track bloodwork and imaging to find the problem.' },
      { title: 'Pain Stabilization', description: 'Immediate comfort protocols for trauma or severe illness.' },
      { title: 'Critical Monitoring', description: 'Constant oversight of heart and lung function.' },
      { title: 'Fluid Therapy', description: 'IV support to stabilize hydration and blood pressure.' }
    ],
    section3Heading: 'Emergency Capabilities',
    section3Subheading: 'We are equipped to manage critical cases including:',
    section3List: ['Toxin ingestion', 'Difficulty breathing', 'Trauma and injuries', 'Sudden collapse', 'Seizure management'],
    section3Description: 'If your pet is in crisis, call us immediately.',
    section4Heading: 'Emergency Care Philosophy',
    section4Description: 'We believe in proactive, compassionate emergency medicine:',
    section4Bullets: [
      'Prioritizing established clients for urgent needs',
      'Clear communication during stressful moments',
      'Coordination with specialist referral centers',
      'Follow-up care during recovery'
    ]
  },
  {
    id: 'end-of-life',
    slug: 'pet-end-of-life-care',
    title: 'Pet End-of-Life Care',
    icon: '🌈',
    description: 'We provide in-clinic and at-home euthanasia, helping you say goodbye with dignity, love, and peace of mind.',
    tagline: 'Compassionate support through difficult decisions',
    ctaText: 'Learn More About End-of-Life Services',
    mainImage: 'https://jeffersonanimalhospitals.com/wp-content/uploads/2024/05/pain-management.jpg',
    secondaryImage: 'https://www.animalcarectr.com/services/_images/end_of_life.jpg',
    thirdImage: 'https://www.carecredit.com/sites/cc/image/end-of-life-pet-care.jpg',
    section1Heading: 'A COMPASSIONATE GOODBYE',
    section1Subheading: 'End-of-Life Care in Tillsonburg, ON',
    section1Description: 'Saying goodbye is the hardest part of being a pet parent. We are here to support you through this difficult journey with dignity and love.',
    section2Heading: 'Peaceful Transitions',
    section2Subheading: 'Our goal is to ensure your pet’s final moments are comfortable and calm.',
    yellowBanners: [
      { title: 'Quality of Life Reviews', description: 'Helping you assess when it is time to say goodbye.' },
      { title: 'In-Home Options', description: 'A peaceful transition in the comfort of home.' },
      { title: 'Private Room', description: 'Dedicated clinic space for families to have privacy.' },
      { title: 'Aftercare Support', description: 'Handling cremation and memorialization with care.' }
    ],
    section3Heading: 'Support Services',
    section3Subheading: 'We provide various ways to honor your pet:',
    section3List: ['Palliative pain management', 'Humane euthanasia', 'Cremation services', 'Paw print keepsakes', 'Grief support resources'],
    section3Description: 'Every decision is made with your pet’s comfort at the center.',
    section4Heading: 'Why Choose Us for This Journey?',
    section4Description: 'We provide more than just medical services; we provide heart:',
    section4Bullets: [
      'Experienced staff who treat every pet like family',
      'Flexible options to suit your family’s needs',
      'Focus on pain-free, stress-free protocols',
      'Respectful handling of aftercare'
    ]
  },
  {
    id: 'urgent-care',
    slug: 'pet-same-day-urgent-care',
    title: 'Pet Same-Day Urgent Care',
    icon: '⚡',
    description: 'For non-life-threatening cases that still require immediate treatment, we offer same-day urgent care to get your pets back on their paws.',
    tagline: 'Expert help, available right away',
    ctaText: 'Learn More About Urgent Care',
    mainImage: 'https://plus.unsplash.com/premium_photo-1663047756170-0bec0113645e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwdXJnZW50JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    secondaryImage: 'https://plus.unsplash.com/premium_photo-1663050701598-4e75c3175eae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwdXJnZW50JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    thirdImage: 'https://plus.unsplash.com/premium_photo-1663040617958-4cba2ab2e496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwdXJnZW50JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    section1Heading: 'FAST CARE FOR PRESSING NEEDS',
    section1Subheading: 'Same-Day Veterinary Care in Tillsonburg, ON',
    section1Description: 'Ear infections, minor wounds, and sudden illness don’t always wait for an appointment. We offer same-day slots to get your pet feeling better fast.',
    section2Heading: 'Bridging the Gap',
    section2Subheading: 'Urgent care for when it’s not an emergency, but can’t wait.',
    yellowBanners: [
      { title: 'Squeeze-In Slots', description: 'Reserved time daily for pets with urgent health issues.' },
      { title: 'Rapid Assessment', description: 'Focused exams to address specific problems quickly.' },
      { title: 'On-Site Pharmacy', description: 'Get the medications your pet needs before you leave.' },
      { title: 'Flexible Care', description: 'Addressing new concerns as they arise.' }
    ],
    // Assuming the following structure based on previous data provided
    section3Heading: 'Common Urgent Care Needs',
    section3Subheading: 'We address various non-emergency concerns:',
    section3List: ['Ear and skin infections', 'Minor lacerations', 'Sudden vomiting or diarrhea', 'Urinary tract issues', 'Eye discharge or redness'],
    section3Description: 'Our same-day service ensures your pet gets professional help when they need it most.',
    section4Heading: 'Why Choose Urgent Care?',
    section4Description: 'When your regular vet is booked, our urgent care provides:',
    section4Bullets: [
      'Peace of mind for uncomfortable symptoms',
      'Faster relief for your pet',
      'Prevention of minor issues becoming major emergencies',
      'Convenient same-day scheduling'
    ]
  }
];

export const DOCTORS: TeamMember[] = [
  { id: 'd1', name: 'Dr. Paul Edwards', role: 'Veterinarian', bio: 'Dr. Edwards graduated from the Ontario Veterinary College in 1985 and has been practicing in Tillsonburg ever since.', image: drpaul },
  { id: 'd2', name: 'Dr. Haris Aziz', role: 'Veterinarian', bio: 'Bio coming soon.', image: aziz },
  { id: 'd3', name: 'Dr. Shahid Zaman', role: 'Veterinarian', bio: 'Bio coming soon.', image: shahid },
];

export const CARE_TEAM: TeamMember[] = [
  { id: 'c1', name: 'Josie Edwards', role: 'Practice Management', bio: 'Josie has been with Edwards Veterinary since its beginnings in 1993.', image: josie },
  { id: 'c2', name: 'Kayla McClure (RVT)', role: 'Practice Management', bio: 'Graduated Northern College 2022.', image: keyla },
  { id: 'c3', name: 'Kelly Britton (Reception)', role: 'Practice Management', bio: 'Focus on providing care and compassion.', image: kella },
  { id: 'c4', name: 'Wendy V.(Technician)', role: 'tech', bio: 'Wendy grew up in Tillsonburg with a love for animals.', image: wendy }
];
export interface Testimonial {
  id: string;
  name: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'r1',
    name: 'Scott A.',
    text: 'Edwards Vet was great. They took us on as new clients while most veterinary clinics are not taking on new clients, and they looked after our kitty. Very happy to get our cats looked after!!'
  },
  {
    id: 'r2',
    name: 'Sheila P.',
    text: 'We chose Edward’s Vet when we first moved to Tillsonburg a few months ago and couldn’t be happier. Our two girls (10+/14+) have been given excellent care by all of the staff, and I trust their expert advice. This clinic offers services that go above and beyond, and we appreciate everything they have done to give our girls the healthiest life they can have! I highly recommend that you consider checking out Edward’s Vet for your family pets!'
  },
  {
    id: 'r3',
    name: 'Belinda C.',
    text: 'Excellent service, kind-hearted staff. I know my boy Blue is always in good hands at Edwards. Thank you for taking such good care of our baby boy Blue.'
  },
  {
    id: 'r4',
    name: 'Diane H.',
    text: 'I have nothing but praise for Edwards. They treat you kindly and adore treating your pets. I had an emergency in the middle of the night, and I truly felt that they went above and beyond for my girl. If you want quality, compassionate care for your babies, I highly recommend them.'
  },
  {
    id: 'r5',
    name: 'Linda V.',
    text: 'The staff at Edward’s is very friendly, and they take the time to make sure my puppy Gizmo is given the best experience at his vet visits. I find them professional and knowledgeable about what is best for your pet.'
  },
  {
    id: 'r6',
    name: 'Laurel B.',
    text: 'Edwards’ staff are compassionate and understanding of their patients and their families. I am an authorized wildlife custodian, and for decades, Edwards has tended to the various injured wildlife and our unreleasable educational skunks.'
  },
  {
    id: 'r7',
    name: 'Patricia W.',
    text: 'Always take such good care of my baby. They try to calm and reassure her, no matter what they are doing to her that day.'
  },
  {
    id: 'r8',
    name: 'Melina G.',
    text: 'We are not regular clients, but we had a minor emergency with our dog and her ears. Regardless, the staff squeezed us in and were prompt, extremely friendly, and kind. They quickly diagnosed her issue and were able to provide a treatment plan. The charge was extremely reasonable, all things considered. Can’t thank them enough!! Highly recommend this clinic.'
  },
  {
    id: 'r9',
    name: 'Nicole N.',
    text: 'I contacted Edwards Clinic as I was seeking a local vet that offered dental X-rays, knowing my pup needed some teeth extracted. I was able to get an initial exam booked quickly, and Dr. Haris assured me that the surgery would meet my requirements while staying close to my budget. They were also able to get my dog in quickly for the surgery, while I had been told a 1-3 months wait at other clinics. On surgery day, my pup went in early, and I was able to pick him up near the end of the day. He had seven teeth removed in total, and two teeth had hidden issues that only an X-ray could show. Dr. Haris took time to show me the X-rays and explain why the teeth were pulled, which I appreciated. The clinic provided care instructions and followed up the following day to ask how my dog was recovering.'
  },
  {
    id: 'r10',
    name: 'Laura S.',
    text: 'I absolutely love this office, and the staff are incredible! They always make us feel welcome and go above and beyond with everything they do. Just knowing there are 24-hour emergency services available makes us feel better, especially now that our dogs are 10+. I don’t want someone looking at them/treating them who has never seen them before and does not know their history. I also love the smaller office feel as one of our dogs gets very stressed when we have to go to a bigger office with dogs, cats and people everywhere.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Seasonal Allergies in Dogs',
    excerpt: 'Is your pup scratching more than usual?',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'b2',
    title: 'Prebiotics and Probiotics',
    excerpt: 'Supporting a balanced gut microbiome.',
    date: 'Jan 20, 2024',
    image: 'https://iandloveandyou.com/cdn/shop/articles/Pet-Food-Prebiotics-and-Probiotics_ba26be98-0361-46fb-a8af-2cf4418db9c7.jpg?v=1741835334&width=2800'
  }
];