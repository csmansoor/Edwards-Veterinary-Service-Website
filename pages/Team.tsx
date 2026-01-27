import React, { useState, useRef } from 'react';
import { DOCTORS, CARE_TEAM } from '../constants';
//@ts-ignore
import teamBanner from '../images/team.jpg';

// --- DOCTOR CARD COMPONENT ---
const DoctorCard = ({ doc }: { doc: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // UPDATED: Added 'justify-center', 'max-w-5xl', and 'mx-auto' to center the card content
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mb-20 max-w-5xl mx-auto">
      
      {/* --- FLIP CARD (LEFT) --- */}
      <div 
        className="relative h-[550px] w-[350px] md:w-[400px] shrink-0 cursor-pointer group [perspective:1000px]"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
          
          {/* --- FRONT SIDE (Image Only) --- */}
          <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[2.5rem] shadow-lg border border-gray-100 bg-white">
            <img 
              src={doc.image} 
              alt={doc.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* --- BACK SIDE (Bio Only) --- */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#2a7f62] rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center text-white shadow-xl">
            <div className="w-12 h-1 bg-white/30 mb-6 rounded-full"></div>
            <div className="overflow-y-auto max-h-[450px] custom-scrollbar px-2">
              <p className="text-sm leading-relaxed font-medium whitespace-pre-line">
                {doc.bio}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- NAME SECTION (RIGHT) --- */}
      <div className="flex-1 text-center md:text-left">
        {/* UPDATED: Changed text color to Black and reduced size */}
        <h3 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight leading-tight">
          {doc.name}
        </h3>
      </div>
    </div>
  );
};

// --- CARE TEAM FLIP CARD COMPONENT ---
const CareTeamCard = ({ member }: { member: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[550px] w-[350px] md:w-[400px] flex-shrink-0 cursor-pointer group [perspective:1000px] snap-center"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[2.5rem] shadow-lg border border-gray-100 bg-white">
          <div className="h-full w-full relative">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 text-center border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{member.name}</h3>
            </div>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#2a7f62] rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center text-white shadow-xl">
          <h3 className="text-2xl font-black uppercase mb-2">{member.name}</h3>
          <div className="w-12 h-1 bg-white/30 mb-6 rounded-full"></div>
          <div className="overflow-y-auto max-h-[350px] custom-scrollbar">
            <p className="text-sm leading-relaxed font-medium whitespace-pre-line">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  // --- SCROLL LOGIC ---
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollToTeam = () => {
    const element = document.getElementById('our-doctors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 pb-20 overflow-x-hidden">
      
      {/* --- HEADER SECTION --- */}
      <section 
        className="relative py-60 md:py-96 text-center bg-cover bg-no-repeat bg-[center_top]"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${teamBanner})` }}
      >
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-start pt-10 md:pt-20">
          <h1 className="text-5xl md:text-7xl font-black mb-10 text-white uppercase tracking-tighter drop-shadow-lg">
            MEET OUR TEAM
          </h1>
          <button 
            onClick={scrollToTeam}
            className="bg-[#2a7f62] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#2a7f62] transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Get To Know Us
          </button>
        </div>
      </section>

      {/* --- INTRO TEXT SECTION --- */}
      <div className="container mx-auto px-4 mt-20 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a7f62] uppercase mb-6 tracking-tight">
          MEET THE TEAM BEHIND YOUR PET’S CARE
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="text-[#2a7f62] font-bold">Edwards Veterinary Services</span>, our passionate and skilled team is dedicated to supporting your pet’s lifelong health and happiness. As a privately owned and operated hospital, we take pride in building personal connections with the families we serve. We’re excited to welcome you and your companion, and we can’t wait to get to know you both better.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-20 max-w-[1600px]">
        
        {/* --- DOCTORS SECTION --- */}
        <div id="our-doctors" className="mb-32">
          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="h-px w-12 bg-[#2a7f62]"></div>
            <h2 className="text-4xl font-bold text-[#2a7f62] uppercase tracking-tighter">Our Doctors</h2>
            <div className="h-px w-12 bg-[#2a7f62]"></div>
          </div>
          <div className="space-y-12">
            {DOCTORS.map((doc, idx) => (
              <DoctorCard key={`doc-${idx}`} doc={doc} />
            ))}
          </div>
        </div>

        {/* --- CARE TEAM SECTION WITH ARROWS --- */}
        <div className="relative pb-12">
          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="h-px w-12 bg-[#2a7f62]"></div>
            <h2 className="text-4xl font-bold text-[#2a7f62] uppercase tracking-tighter">Our Care Team</h2>
            <div className="h-px w-12 bg-[#2a7f62]"></div>
          </div>

          {/* Left Arrow (Outside, Black) */}
          <div className="absolute top-1/2 -left-8 md:-left-16 z-20 transform -translate-y-1/2">
            <button 
              onClick={() => scroll('left')} 
              className="p-2 text-black opacity-50 hover:opacity-100 active:opacity-100 transition-opacity duration-200 focus:outline-none drop-shadow-lg"
            >
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          </div>

          {/* Right Arrow (Outside, Black) */}
          <div className="absolute top-1/2 -right-8 md:-right-16 z-20 transform -translate-y-1/2">
            <button 
              onClick={() => scroll('right')} 
              className="p-2 text-black opacity-50 hover:opacity-100 active:opacity-100 transition-opacity duration-200 focus:outline-none drop-shadow-lg"
            >
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 px-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CARE_TEAM.map((member, idx) => (
              <CareTeamCard key={`care-${idx}`} member={member} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;