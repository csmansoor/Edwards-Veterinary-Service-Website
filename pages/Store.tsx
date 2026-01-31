import React from 'react';
import { Helmet } from 'react-helmet-async'; // 👈 Added Helmet Import

// @ts-ignore
import medsImg from '../images/petmedication.webp';
// @ts-ignore
import groomingImg from '../images/groomproduct.webp';
// @ts-ignore
import foodImg from '../images/petfood.webp';
// @ts-ignore
import toysImg from '../images/storebanner.webp';
// @ts-ignore
import storeBannerImg from '../images/pet6.webp'; 

const Store: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* 👇 ADD THIS SEO BLOCK 👇 */}
      <Helmet>
        <title>Online Pet Pharmacy & Store | Edwards Veterinary Services</title>
        <meta name="description" content="Shop our online veterinary store for prescription pet food, medication refills, flea & tick prevention, and pet supplies. Local pickup in Tillsonburg available." />
        <link rel="canonical" href="https://gotec.ca/store" />
      </Helmet>
      {/* 👆 SEO BLOCK ENDS 👆 */}
      
      {/* --- NEW PICTURE BANNER --- */}
      {/* Updated Height: h-[500px] for mobile, h-[700px] for desktop */}
      <div 
        className="relative h-[500px] md:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${storeBannerImg})` 
        }}
      >
        {/* Dark Overlay so text is readable */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wide drop-shadow-lg">
            Pet Store
          </h1>
          <p className="text-xl md:text-2xl font-medium mt-4 drop-shadow-md opacity-90">
            Quality care delivered to your doorstep.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#2a7f62] mb-6">Everything Your Pet Needs, Just a Click Away</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our care at Edwards Veterinary Services includes convenient online access to your pet’s medications and everyday essentials through our secure, easy-to-use pet pharmacy. From prescription medications and parasite prevention to specialized diets, food, toys, and wellness products, we make it simple for pet owners in Tillsonburg, ON to get everything their pets need in one trusted place.
            </p>
            <a 
              href="https://www.myvetstore.ca/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#2a7f62] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1e5c47] transition shadow-lg transform hover:scale-105"
            >
              Shop Now
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src={medsImg}
              alt="Pet Medications" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src={groomingImg}
              alt="Grooming Products" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src={foodImg}
              alt="Food" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img 
              src={toysImg}
              alt="Pet entertainment" 
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gray-50 p-10 rounded-3xl mb-20 border border-gray-100">
          <h2 className="text-3xl font-bold text-[#2a7f62] mb-6">Trusted, Convenient Pet Products</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            As a locally owned, community-rooted clinic serving Tillsonburg and surrounding farming areas, we’re proud to offer pharmacy services and general pet products that reflect our commitment to compassion, accessibility, and wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* A Bond of Trust */}
          <div>
            <h3 className="text-2xl font-bold text-[#2a7f62] mb-8 flex items-center">
              <span className="bg-[#2a7f62]/10 p-2 rounded-lg mr-3">🤝</span>
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
                  <span className="text-[#2a7f62] font-bold mr-3">🐾</span>
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
            <h3 className="text-2xl font-bold text-[#2a7f62] mb-8 flex items-center">
              <span className="bg-[#2a7f62]/10 p-2 rounded-lg mr-3">⭐</span>
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
                  <span className="text-[#2a7f62] font-bold mr-3">🐾</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-[#2a7f62]/5 rounded-2xl border border-[#2a7f62]/10 text-center">
               <p className="font-bold text-[#2a7f62] text-lg italic">"Unlikely Companions, Unbreakable Bond"</p>
            </div>
          </div>
        </div>

        {/* Contact/Action Section */}
        <div className="bg-[#2a7f62] text-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Order Online or Contact Us for Assistance</h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Ready to refill your pet’s prescription or explore our pet products? Visit our secure online pet store today for fast, convenient service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <p className="font-bold">Call Us</p>
              <p className="text-white/80">(519) 688-2123</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <p className="font-bold">Location</p>
              <p className="text-white/80">527 Broadway Street, Tillsonburg</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 105.656 5.656l-1.1 1.1"></path></svg>
              </div>
              <p className="font-bold">Order Online</p>
              <p className="text-white/80">MyVetStore Pharmacy</p>
            </div>
          </div>

          <a 
            href="https://www.myvetstore.ca/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2a7f62] px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition shadow-2xl"
          >
            Visit Our Online Pharmacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Store;