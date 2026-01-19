
import React from 'react';

const Store: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-brand py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pet Health Store</h1>
          <p className="text-xl text-brand-light">Quality care delivered to your doorstep.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand mb-6">Easy Online Access to Your Pet’s Medications</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our care at Edwards Veterinary Services includes convenient access to your pet’s medication through our secure, easy-to-use online pet pharmacy. Our pharmacy features prescription medications, parasite prevention, specialized diets, and more for pets in Tillsonburg, ON.
            </p>
            <a 
              href="https://www.myvetstore.ca/edwardsvet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition shadow-lg transform hover:scale-105"
            >
              Shop MyVetStore Now
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=400" 
              alt="Pet Medications" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" 
              alt="Happy Cat" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" 
              alt="Dog Health" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1591768793355-74d7c80b0e17?auto=format&fit=crop&q=80&w=400" 
              alt="Dental Care Pet" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gray-50 p-10 rounded-3xl mb-20 border border-gray-100">
          <h2 className="text-3xl font-bold text-brand mb-6">Trusted, Convenient Pet Products</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            As a locally owned, community-rooted clinic serving Tillsonburg and surrounding farming areas, we’re proud to offer pharmacy services and general pet products that reflect our commitment to compassion, accessibility, and wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* A Bond of Trust */}
          <div>
            <h3 className="text-2xl font-bold text-brand mb-8 flex items-center">
              <span className="bg-brand/10 p-2 rounded-lg mr-3">🤝</span>
              A Bond of Trust
            </h3>
            <ul className="space-y-4">
              {[
                "Prescription medications for chronic conditions and short-term treatments",
                "Flea, tick, and heartworm preventatives",
                "Prescription diets tailored for medical needs",
                "Refill reminders and auto-ship options",
                "Direct shipping to your home or local pickup"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-brand font-bold mr-3">🐾</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 italic">
              You’ll never have to question the source or quality of your pet’s medications — we provide only veterinary-approved, authentic products.
            </p>
          </div>

          {/* Why Choose Our Online Store */}
          <div>
            <h3 className="text-2xl font-bold text-brand mb-8 flex items-center">
              <span className="bg-brand/10 p-2 rounded-lg mr-3">⭐</span>
              Why Choose Our Online Pet Store?
            </h3>
            <ul className="space-y-4">
              {[
                "Peace of mind with accurate, vet-reviewed prescriptions",
                "Competitive pricing with the safety of regulated products",
                "Simplified refills for long-term medications",
                "Personalized support from our in-house veterinary team",
                "Secure ordering through a trusted local provider"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-brand font-bold mr-3">🐾</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-brand/5 rounded-2xl border border-brand/10 text-center">
               <p className="font-bold text-brand text-lg italic">"Unlikely Companions, Unbreakable Bond"</p>
            </div>
          </div>
        </div>

        {/* Contact/Action Section */}
        <div className="bg-brand text-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Order Online or Contact Us for Assistance</h2>
          <p className="text-brand-light text-xl mb-10 max-w-2xl mx-auto">
            Ready to refill your pet’s prescription or explore our pet products? Visit our secure online pet store today for fast, convenient service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <p className="font-bold">Call Us</p>
              <p className="text-brand-light">(519) 688-2123</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <p className="font-bold">Location</p>
              <p className="text-brand-light">527 Broadway Street, Tillsonburg</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 105.656 5.656l-1.1 1.1"></path></svg>
              </div>
              <p className="font-bold">Order Online</p>
              <p className="text-brand-light">MyVetStore Pharmacy</p>
            </div>
          </div>

          <a 
            href="https://www.myvetstore.ca/edwardsvet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition shadow-2xl"
          >
            Visit Our Online Pharmacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Store;
