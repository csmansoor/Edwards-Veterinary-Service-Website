import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Forms: React.FC = () => {
  const formLinks = [
    { title: 'New Client Form', description: 'Fill this out if you are visiting us for the first time.', slug: 'new-client' },
    { title: 'Prescription Refill', description: 'Request a refill for your pet\'s current medication.', slug: 'prescription' },
    { title: 'Surgery Consent', description: 'Digital consent form for scheduled surgical procedures.', slug: 'surgery' }
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Online Patient Forms | Edwards Veterinary Services</title>
        <meta name="description" content="Access our online veterinary forms for new clients, prescription refills, and surgical consent." />
      </Helmet>

      {/* BANNER: Size kept the same, text size increased */}
      <section className="bg-[#008000] py-20 text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic drop-shadow-xl">
          Online Forms
        </h1>
        <p className="text-xl md:text-3xl opacity-95 font-medium max-w-3xl mx-auto leading-tight">
          Save time by completing your paperwork before your visit.
        </p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {formLinks.map((f) => (
            <div key={f.slug} className="bg-white p-10 rounded-[2.5rem] shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* INCREASED: Title size */}
              <h3 className="text-2xl md:text-3xl font-black text-[#008000] mb-4 uppercase tracking-tight">
                {f.title}
              </h3>
              
              {/* INCREASED: Description size */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                {f.description}
              </p>
              
              <Link 
                to={`/appointment?type=${f.slug}`} 
                className="inline-block bg-[#008000] text-white px-8 py-3 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95"
              >
                Open Form
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;