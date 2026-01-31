
import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import aboutDogsImg from '../images/A-Bond-of-Trust.webp';
// @ts-ignore
import examRoomImg from '../images/kitten-exam.webp';
// @ts-ignore
import companionsImg from '../images/Unlikely-Companions-Unbreakable-Bond.webp';
//@ts-ignore
import petdeskImg from '../images/Logo.webp';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Edwards Veterinary Services</h1>
          <p className="text-xl text-brand-light">Trusted Veterinary Care in Tillsonburg, ON for Over 35 Years</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to Edwards Veterinary Services, a privately owned and proudly Canadian animal hospital that has served Tillsonburg and surrounding rural communities for over three decades. As a long-standing pillar in the local farming region, we strive to serve as our community’s complete veterinary resource — always here to provide a familiar face, a helping hand, and a trusted relationship you and your pets can rely on.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={aboutDogsImg}
                alt="Group of happy dogs" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover border-8 border-white"
              />
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-brand mb-6">Our Story: Built on Compassion and Community</h2>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 1989, Edwards Veterinary Services began with a simple mission: to deliver personalized, compassionate, and affordable care to pets in our hometown of Tillsonburg, ON. What started as a modest clinic has grown into a full-service veterinary hospital with advanced diagnostics, dedicated consultation rooms, and a skilled team of veterinary professionals who truly love what they do.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We’re a fun-loving, easy-going, and helpful team that believes the best veterinary care is rooted in honesty, respect, and community spirit. From farm dogs to family cats, exotic pets to senior companions, we’re honoured to care for every generation of your animal family.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-brand pl-6 mb-4">
                "As a private and locally owned business for 35 years, Edwards Veterinary has always strived to provide compassionate, personalized, and affordable care in Tillsonburg and the surrounding areas."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our DVMs, <strong>Dr. Paul Edwards</strong>, <strong>Dr. Haris Aziz</strong>, and <strong>Dr. Shahid Zaman</strong>, are highly qualified and look forward to meeting you.
              </p>
            </div>
            <div className="bg-brand/5 p-8 rounded-3xl border border-brand/10">
               <h3 className="text-xl font-bold text-brand mb-4">Serving Tillsonburg and the Surrounding Areas</h3>
               <p className="text-gray-600 mb-6">We’re proud to be deeply embedded in Tillsonburg and the neighbouring farming communities. Our clients aren’t just appointments — they’re neighbours, friends, and fellow animal lovers.</p>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <span className="text-brand mr-3">🐾</span>
                   <span className="text-gray-700"><strong>Mobile veterinary services</strong> for current clients, making it easier for rural or mobility-restricted pet owners to access quality care.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-brand mr-3">🐾</span>
                   <span className="text-gray-700"><strong>24-hour emergency service</strong> exclusively for our clients, ensuring that your pet’s needs are met no matter the hour.</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <img src={examRoomImg} alt="Clinic Exam Room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <img src={companionsImg} alt="White dog and gray cat hugging each other on grass" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Commitment to Sustainability */}
          <div className="bg-gray-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              We’re proud to support a greener future. Through the Save On Energy Small Business Program, we’ve upgraded to LED lighting and Smart Thermostats, cutting our electricity use by 15%.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-bold text-brand-light">We also reduce waste by using:</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-brand-light" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>Reusable cleaning cloths and towels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-brand-light" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>Sterilizable surgical gowns and tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-brand-light" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span>Filtered water and reusable drinkware</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end">
                <p className="text-brand-light font-bold text-xl italic mb-4">Small changes. Big impact — for pets, people, and the planet.</p>
                <div className="bg-white p-4 rounded-xl">
                  {/* PetDesk Placeholder Logo */}
                  <img 
                  src= {petdeskImg} alt ="PetDesk Logo" className="w-48 h-auto object-contain hover:opacity-80 transition"/>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand/10 rounded-full blur-3xl"></div>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/team" className="bg-brand text-white p-6 rounded-xl text-center font-bold hover:bg-brand-dark transition shadow-md">Meet Our Team</Link>
            <Link to="/gallery" className="bg-brand text-white p-6 rounded-xl text-center font-bold hover:bg-brand-dark transition shadow-md">Photo Gallery</Link>
            <Link to="/testimonials" className="bg-brand text-white p-6 rounded-xl text-center font-bold hover:bg-brand-dark transition shadow-md">Testimonials</Link>
            <Link to="/careers" className="bg-brand text-white p-6 rounded-xl text-center font-bold hover:bg-brand-dark transition shadow-md">Careers</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
