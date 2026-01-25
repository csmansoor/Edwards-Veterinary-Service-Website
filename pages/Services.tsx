import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* PROFESSIONAL HEADER */}
      <section className="bg-[#2a7f62] py-24 text-white text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
            Our Services
          </h1>
          <div className="h-1.5 w-20 bg-yellow-400 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto px-4 leading-relaxed">
            Providing compassionate, high-standard veterinary care to the Tillsonburg community. 
            From routine wellness to emergency support.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <Link 
              to={`/services/${service.slug}`} 
              key={service.id} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-2"
            >
              {/* IMAGE BANNER (Replaces the Emoji icon) */}
              <div className="h-56 w-full overflow-hidden relative">
                <img 
                  src={service.mainImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Visual tag over the image */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {service.id.replace('-', ' ')}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-3 text-[#2a7f62] leading-tight uppercase tracking-tight group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <div className="mt-auto flex items-center text-[#2a7f62] font-black uppercase tracking-wider text-sm">
                  <span className="border-b-2 border-transparent group-hover:border-yellow-400 transition-all pb-1">
                    Explore Service
                  </span>
                  <svg 
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* EMERGENCY QUICK-LINK CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-yellow-400 rounded-[3rem] p-10 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl font-black text-yellow-900 uppercase mb-4">Emergency After-Hours?</h2>
          <p className="text-xl text-yellow-950 font-bold mb-8 max-w-2xl mx-auto">
            We prioritize our active clients for urgent needs. If you are in a crisis, don't wait.
          </p>
          <Link 
            to="/services/pet-emergency-care" 
            className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#2a7f62] transition-colors inline-block"
          >
            Emergency Info
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;