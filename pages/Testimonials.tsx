import React from 'react';
import { Helmet } from 'react-helmet-async'; 
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20 pt-24">
      
      <Helmet>
        <title>Client Reviews & Testimonials | Edwards Veterinary Services</title>
        <meta name="description" content="Read reviews from pet owners in Tillsonburg. See why our clients trust Edwards Veterinary Services for their pets' wellness, surgery, and emergency care." />
        <link rel="canonical" href="https://gotec.ca/testimonials" />
      </Helmet>
      

      {/* Header Section */}
      {/* CHANGE: Background to #008000 */}
      <section className="bg-[#008000] py-20 text-white text-center">
        <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">Client Testimonials</h1>
        <p className="text-xl opacity-90 font-medium">Hear from the families we serve in Tillsonburg.</p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
      
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="break-inside-avoid bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
            
              {/* CHANGE: Quote color to #008000 */}
              <span className="text-6xl text-[#008000] opacity-20 leading-none mb-[-20px]">“</span>
              
              <p className="text-gray-700 text-lg italic mb-8 leading-relaxed relative z-10">
                {t.text}
              </p>
              
              <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-gray-50">
                {/* CHANGE: Avatar bg and text to #008000 */}
                <div className="w-12 h-12 bg-[#008000]/10 rounded-full flex items-center justify-center text-[#008000] font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-400">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        {/* CHANGE: Box bg, border, and text to #008000 */}
        <div className="mt-20 text-center bg-[#008000]/5 p-12 rounded-3xl border border-[#008000]/10">
          <h3 className="text-2xl font-bold text-[#008000] mb-4">Want to share your experience?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We value your feedback and would love to hear how we helped your pet. Your stories inspire us every day.
          </p>
          {/* CHANGE: Button bg to #008000 */}
          <a 
            href="https://g.page/review" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#008000] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition shadow-lg uppercase tracking-widest"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;