
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover brightness-[0.4]"
            poster="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1920"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-dog-running-in-the-grass-on-a-sunny-day-226-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Expert Care for Your Best Friends
            </h1>
            <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
              Welcome to Edwards Veterinary Services. We provide compassionate, modern medical care for dogs, cats, and exotic animals in Tillsonburg.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/appointment" className="bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition shadow-lg text-center transform hover:scale-105">
                Book an Appointment
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition shadow-lg text-center transform hover:scale-105">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://dashboard.animaltrust.org.uk/uploads/Owen_Story_5327ca244c.png" 
                alt="Happy dogs outdoors" 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-brand mb-6">Your Trusted Community Vet</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Edwards Veterinary Services, we believe every pet deserves personalized attention and the highest standard of medical care. Our team is dedicated to providing excellence in medicine while keeping a warm, friendly atmosphere for your pets.
            </p>
            <Link to="/about" className="text-brand font-bold flex items-center hover:translate-x-2 transition group">
              Learn more about our story
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Facility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto italic">527 Broadway St, Tillsonburg (Across from the movie theatre)</p>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src="https://edwardsvet.ca/wp-content/uploads/2025/05/Edwards-Veterinary-Services-Building-Exterior.jpg" 
              alt="The modern interior of our veterinary clinic" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

{/* Services CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#2a7f62] uppercase tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Specialized care for every tail, claw, and feather.
            </p>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm max-w-4xl mx-auto transform hover:shadow-md transition-all">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
              Explore our full range of <br className="hidden md:block" /> 
              veterinary care and medical services
            </h3>
            
            <Link 
              to="/services" 
              className="inline-block bg-[#2a7f62] text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-black transition-all shadow-xl uppercase tracking-widest transform hover:scale-105 active:scale-95"
            >
              View All Services
            </Link>

            <div className="mt-12 flex justify-center gap-6 text-4xl opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span>🏥</span>
              <span>✂️</span>
              <span>🦷</span>
              <span>🦜</span>
              <span>🚐</span>
            </div>
          </div>
        </div>
      </section>

      {/* Put your next sections (Doctors, Testimonials, etc.) here */}

    </div> // This closes the main return div
  ); // This closes the return statement
}; // This closes the Home component function

export default Home;
