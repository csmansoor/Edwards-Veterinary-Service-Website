
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
            <h2 className="text-3xl font-bold text-brand mb-6">Everything Your Pet Needs, Just a Click Away</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our care at Edwards Veterinary Services includes convenient online access to your pet’s medications and everyday essentials through our secure, easy-to-use pet pharmacy. From prescription medications and parasite prevention to specialized diets, food, toys, and wellness products, we make it simple for pet owners in Tillsonburg, ON to get everything their pets need in one trusted place.
            </p>
            <a 
              href="https://www.myvetstore.ca/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition shadow-lg transform hover:scale-105"
            >
              Shop Now
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Pet Medications" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://media.istockphoto.com/id/1392917123/photo/woman-giving-tincture-to-cat-at-home-closeup.jpg?s=612x612&w=0&k=20&c=qv_MxA2Wx3zKqdiIywvlk4TP-UkfUoe57Q-u1SZfktY=" 
              alt="Grooming Products" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JGf9yOlz4RVkvXrc641zEGlJIgq9LF7ihw&s" 
              alt="Food" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-04/240429-pet-week-dog-toys-oo-social-d26e9a.jpg" 
              alt="Pet intertainment " 
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
            href="https://www.myvetstore.ca/home" 
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
