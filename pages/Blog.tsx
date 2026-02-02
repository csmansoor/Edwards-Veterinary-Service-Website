import React from 'react';
import { Helmet } from 'react-helmet-async'; // 👈 Added Helmet Import
import { BLOG_POSTS } from '../constants';

// @ts-ignore
import blogBannerImg from '../images/pet3.webp'; 
// @ts-ignore
import diseaseSectionImg from '../images/pet4.webp'; 
// @ts-ignore
import wellnessSectionImg from '../images/pet5.webp'; 

const Blog: React.FC = () => {

  // Function to smooth scroll to the reading section
  const scrollToRead = () => {
    const section = document.getElementById('reading-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 pb-20">
     
      <Helmet>
        <title>Veterinary Blog & Pet Health Tips | Edwards Veterinary Services</title>
        <meta name="description" content="Read expert veterinary advice, pet health tips, and clinic news from Edwards Veterinary Services in Tillsonburg. Learn about disease prevention, wellness, and more." />
        <link rel="canonical" href="https://gotec.ca/blog" />
      </Helmet>
      
      
      {/* --- BANNER SECTION --- */}
      <div 
        className="relative h-[400px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${blogBannerImg})` 
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide drop-shadow-lg">
            Veterinary Blog
          </h1>
          <p className="text-xl md:text-2xl font-medium mt-4 mb-8 drop-shadow-md opacity-90">
            Expert advice for a happy, healthy pet.
          </p>
          
          <button 
            onClick={scrollToRead}
            className="bg-[#2a7f62] hover:bg-[#1e5c47] text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wider transition-all shadow-lg transform hover:scale-105"
          >
            Start Reading
          </button>
        </div>
      </div>

      {/* --- BLOG POSTS GRID --- */}
      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-64 md:h-96 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8 flex-grow">
                <span className="text-[#2a7f62] font-bold text-sm uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4 group-hover:text-[#2a7f62] transition">{post.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEW READING SECTION --- */}
      <div id="reading-section" className="container mx-auto px-4 mt-24 max-w-5xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-t-8 border-[#2a7f62]">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 uppercase mb-4">
              Pet Health Tips & Veterinary News
            </h2>
            <div className="h-1 w-24 bg-[#2a7f62] mx-auto"></div>
          </div>

          {/* Article Block 1: Disease Info */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            
            {/* REMOVED 'sticky top-8' HERE - Image will now stay static */}
            <div className="w-full md:w-1/2">
               <img 
                 src={diseaseSectionImg} 
                 alt="Pet Health Check" 
                 className="rounded-2xl shadow-lg w-full h-auto object-cover"
               />
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-[#2a7f62] mb-3">Understanding Common Pet Diseases</h3>
              <p className="text-gray-600 leading-relaxed">
                Detecting early signs of illness is key to your pet's longevity. Unlike humans, our pets cannot tell us when they are feeling unwell, often hiding their pain until the condition has advanced. Common issues like dental disease, diabetes, and arthritis can often be managed effectively if caught early, preventing long-term suffering.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is vital for pet owners to remain vigilant for subtle changes in behavior. Watch for variations in appetite, energy levels, or water consumption, as these are often the first indicators of underlying issues such as kidney disease or metabolic disorders. Even a small change, like hesitating to jump on the couch, can signal the onset of joint pain.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Regular diagnostics play a crucial role in this puzzle. Annual bloodwork and physical exams allow us to establish a "baseline" for your pet's health. By comparing year-over-year results, we can spot trends—such as slowly elevating liver enzymes—before they become full-blown emergencies, saving you money and saving your pet from stress.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Finally, prevention is always better than cure. Staying up to date with vaccinations, heartworm testing, and parasite control creates a shield against many preventable diseases. If you ever suspect something is "off" with your companion, never hesitate to call us. You know your pet better than anyone, and your intuition is a powerful diagnostic tool.
              </p>
            </div>
          </div>

          {/* Article Block 2: Wellness Pillars */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            
            
            <div className="w-full md:w-1/2">
               <img 
                 src={wellnessSectionImg} 
                 alt="Pet Wellness" 
                 className="rounded-2xl shadow-lg w-full h-auto object-cover"
               />
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#2a7f62] mb-3">The Pillars of Pet Wellness</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wellness goes beyond just vaccinations. It includes proper nutrition, weight management, and parasite prevention. Keeping your pet at a healthy weight is the single most effective way to extend their lifespan.
              </p>
              
              <ul className="list-disc list-outside ml-4 text-gray-600 space-y-4">
                <li>
                  <strong>Proper Nutrition</strong> – Providing a balanced, age-appropriate diet to support growth, energy, and overall health.
                </li>
                <li>
                  <strong>Regular Veterinary Care</strong> – Routine checkups, vaccinations, and early disease detection to keep pets healthy.
                </li>
                <li>
                  <strong>Exercise & Physical Activity</strong> – Daily movement to maintain a healthy weight, strong muscles, and mental stimulation.
                </li>
                <li>
                  <strong>Preventive Care</strong> – Parasite control, dental care, and vaccinations to prevent common illnesses.
                </li>
                <li>
                  <strong>Mental & Emotional Well-Being</strong> – Social interaction, playtime, and a stress-free environment for emotional health.
                </li>
                <li>
                  <strong>Hygiene & Grooming</strong> – Regular grooming, bathing, and nail trimming to prevent skin and coat problems.
                </li>
                <li>
                  <strong>Safe & Comfortable Living Environment</strong> – Clean shelter, fresh water, and a secure space to rest and relax.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Blog;