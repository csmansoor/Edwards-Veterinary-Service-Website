
import React from 'react';
import { Link } from 'react-router-dom';

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
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200" 
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
              <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=1200" alt="Clinic Exam Room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200" alt="White dog and gray cat hugging each other on grass" className="w-full h-full object-cover" />
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
                  <img src="data:image/png;base64,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" alt="PetDesk logo" className="h-12 w-auto grayscale" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150x50?text=PetDesk+Logo"; }} />
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
