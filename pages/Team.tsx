import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async'; 
import { DOCTORS, CARE_TEAM } from '../constants';
//@ts-ignore
import teamBanner from '../images/team.webp';

// --- CONTINUOUS NON-STOP AUTO SCROLL HOOK ---
const useAutoScroll = (
  ref: React.RefObject<HTMLDivElement | null>, 
  isHovered: boolean, 
  speed: number = 1
): void => {
  useEffect(() => {
    const scrollContainer = ref.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollContainer && !isHovered) {
        // 1. Logic for Seamless Reset:
        // singleSetWidth is the width of one "CARE_TEAM" array
        const singleSetWidth = scrollContainer.scrollWidth / 3;

        // If user scrolls past the middle set (into the 3rd set), 
        // snap back to the same relative position in the middle set.
        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft -= singleSetWidth;
        } 
        
        // 2. Continuous movement
        scrollContainer.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // 3. START IN THE MIDDLE: Essential for the loop to work immediately
    // Wrap in a small timeout to ensure DOM has calculated scrollWidth
    const timer = setTimeout(() => {
        if (scrollContainer) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        }
    }, 100);

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => {
        cancelAnimationFrame(animationFrameId);
        clearTimeout(timer);
    };
  }, [isHovered, speed, ref]); 
};

// --- STATIC DOCTOR CARD ---
const DoctorCard = ({ doc }: { doc: any }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mb-20 max-w-6xl mx-auto px-4">
      <div className="relative h-[400px] w-full max-w-[350px] md:h-[550px] md:max-w-[400px] shrink-0 overflow-hidden rounded-[2.5rem] shadow-lg border border-gray-100 bg-white">
        <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center md:text-left flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-black text-[#008000] uppercase tracking-tight leading-tight mb-4 md:-mt-10">
          {doc.name}
        </h3>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium whitespace-pre-line">
            {doc.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- CARE TEAM CARD (Keeps Flip) ---
const CareTeamCard = ({ member }: { member: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[500px] md:h-[550px] w-[280px] md:w-[400px] flex-shrink-0 cursor-pointer group [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[2.5rem] shadow-lg border border-gray-100 bg-white">
          <div className="h-full w-full relative">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 text-center border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{member.name}</h3>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#008000] rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center text-white shadow-xl">
          <h3 className="text-2xl font-black uppercase mb-2">{member.name}</h3>
          <div className="w-12 h-1 bg-white/30 mb-6 rounded-full"></div>
          <div className="overflow-y-auto max-h-[350px] no-scrollbar">
            <p className="text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Triple the list for smooth infinite scrolling
  const infiniteCareTeam = [...CARE_TEAM, ...CARE_TEAM, ...CARE_TEAM];

  useAutoScroll(scrollRef, isHovered, 1);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 480;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollToTeam = () => {
    const element = document.getElementById('our-doctors');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 pb-20 overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Team | Edwards Veterinary Services</title>
      </Helmet>
      
      {/* Header Section */}
      <section className="relative py-32 md:py-80 text-center bg-cover bg-no-repeat bg-[center_top]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${teamBanner})` }}>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-black mb-10 text-white uppercase tracking-tighter drop-shadow-lg leading-tight">MEET OUR TEAM</h1>
          <button onClick={scrollToTeam} className="bg-[#008000] text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#008000] transition-all shadow-lg">Get To Know Us</button>
        </div>
      </section>

      {/* Intro Section */}
      <div className="container mx-auto px-4 mt-20 md:mt-32 max-w-5xl text-center">
        <h2 className="text-3xl md:text-6xl font-black text-[#008000] uppercase mb-8 md:mb-12 tracking-tighter leading-tight">MEET THE TEAM BEHIND <br className="hidden md:block" /> YOUR PET’S CARE</h2>
        <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
          At <span className="text-[#008000] font-bold">Edwards Veterinary Services</span>, our passionate and skilled team is dedicated to supporting your pet’s lifelong health and happiness.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div id="our-doctors" className="mb-32">
          <div className="flex items-center justify-center space-x-4 mb-20">
            <div className="h-px w-8 md:w-12 bg-[#008000]"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#008000] uppercase tracking-tighter text-center">Our Doctors</h2>
            <div className="h-px w-8 md:w-12 bg-[#008000]"></div>
          </div>
          <div className="space-y-24">
            {DOCTORS.map((doc, idx) => (
              <DoctorCard key={`doc-${idx}`} doc={doc} />
            ))}
          </div>
        </div>

        {/* Care Team Section - Optimized for Continuous Loop */}
        <div className="relative pb-12 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="h-px w-8 md:w-12 bg-[#008000]"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#008000] uppercase tracking-tighter text-center">Our Care Team</h2>
            <div className="h-px w-8 md:w-12 bg-[#008000]"></div>
          </div>

          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-8 px-4 no-scrollbar scroll-smooth touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {infiniteCareTeam.map((member, idx) => (
              <CareTeamCard key={`care-${idx}`} member={member} />
            ))}
          </div>

          {/* Large Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -left-4 md:-left-16 z-30 transform -translate-y-1/2 p-2 text-black opacity-40 hover:opacity-100 hover:text-[#008000] transition-all duration-300"
          >
            <svg className="w-14 h-14 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -right-4 md:-right-16 z-30 transform -translate-y-1/2 p-2 text-black opacity-40 hover:opacity-100 hover:text-[#008000] transition-all duration-300"
          >
            <svg className="w-14 h-14 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;