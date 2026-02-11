import React from 'react';
import { Helmet } from 'react-helmet-async'; 

const Careers: React.FC = () => {
  const openings = [
    { title: 'Registered Veterinary Technician', type: 'Full-Time', description: 'Seeking a compassionate RVT to join our surgical and wellness team.' },
    { title: 'Veterinary Receptionist', type: 'Part-Time', description: 'The first point of contact for our valued clients. Excellent communication skills required.' }
  ];

  return (
    <div className="bg-white pb-20">
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Careers & Veterinary Jobs in Tillsonburg | Edwards Veterinary Services</title>
        <meta name="description" content="Join our team! Edwards Veterinary Services is hiring in Tillsonburg, ON." />
        <link rel="canonical" href="https://gotec.ca/careers" />
      </Helmet>
      
      {/* BANNER: Balanced scaling */}
      <section className="bg-[#008000] py-12 md:py-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic drop-shadow-lg leading-tight">
          Join Our Team
        </h1>
        <p className="text-lg md:text-2xl text-green-50 font-medium opacity-95 max-w-3xl mx-auto leading-relaxed">
          Build your career in compassionate veterinary medicine.
        </p>
      </section>

      <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-black text-[#008000] mb-10 md:mb-14 uppercase tracking-tight text-center md:text-left">
          Current Openings
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          {openings.map((job, i) => (
            <div key={i} className="bg-gray-50 p-6 md:p-10 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <span className="text-xs md:text-sm font-black text-[#008000] bg-[#008000]/10 px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 inline-block">
                  {job.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                  {job.title}
                </h3>
                <p className="text-base md:text-xl text-gray-600 mt-3 font-medium leading-relaxed">
                  {job.description}
                </p>
              </div>
              
              <button className="w-full md:w-auto bg-[#008000] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#006400] transition-all shadow-lg active:scale-95 text-sm md:text-base">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* HOW TO APPLY BOX */}
        <div className="mt-20 md:mt-32 bg-[#008000] text-white p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
          {/*  background circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">How to Apply</h2>
            <p className="text-lg md:text-2xl text-green-50 mb-10 leading-relaxed font-medium">
              We are always looking for passionate animal lovers to join our family. Even if we don't have a specific opening that fits your skills right now, feel free to send us your resume!
            </p>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center space-x-5 bg-white/10 p-6 rounded-3xl border border-white/20">
                <div className="bg-white text-[#008000] p-4 rounded-2xl shadow-lg shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-xs md:text-sm text-green-200 mb-1">Email Resumes to:</p>
                  <p className="text-xl md:text-2xl font-bold break-all">frontdesk.edwardsvs@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;