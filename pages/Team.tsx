import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async'; 
import { DOCTORS, CARE_TEAM } from '../constants';
//@ts-ignore
import teamBanner from '../images/team.webp';

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  
  const loopedTeam = [...CARE_TEAM, ...CARE_TEAM, ...CARE_TEAM];

  // --- THE UNSTOPPABLE ENGINE ---
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 1; // Pixels per frame

    const animate = () => {
      // MASTER RULE: Move ONLY if NO mouse hover AND NO finger touch
      if (!isHovered && !isTouched) {
        const setWidth = container.scrollWidth / 3;

        // If we move into the 3rd set (C), teleport back to 2nd set (B)
        if (container.scrollLeft >= setWidth * 2) {
          container.scrollLeft -= setWidth;
        } 
        // If we swipe backwards into 1st set (A), teleport forward to 2nd set (B)
        else if (container.scrollLeft <= 0) {
          container.scrollLeft += setWidth;
        }

        container.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(animate);
    };

    // START POSITION: Jump to the middle set 
    // DOM is fully sized before jumping
    setTimeout(() => {
        if (container.scrollLeft === 0) {
            container.scrollLeft = container.scrollWidth / 3;
        }
    }, 100);

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isTouched]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 450;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="bg-gray-50 pb-20 overflow-x-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { 
            -ms-overflow-style: none; scrollbar-width: none; 
            overflow-x: auto; -webkit-overflow-scrolling: touch; touch-action: pan-x; 
        }
      `}</style>
      
      <Helmet><title>Our Team | Edwards Veterinary Services</title></Helmet>

      {/* Hero Banner */}
      <section className="relative py-32 md:py-80 text-center bg-cover bg-no-repeat bg-[center_top]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${teamBanner})` }}>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-lg leading-tight relative z-10">MEET OUR TEAM</h1>
      </section>

      {/* Intro Text */}
      <div className="container mx-auto px-4 mt-20 text-center max-w-5xl">
        <h2 className="text-3xl md:text-6xl font-black text-[#008000] uppercase mb-8 tracking-tighter leading-tight">THE TEAM BEHIND YOUR PET’S CARE</h2>
        <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-medium">Dedicated to lifelong health and happiness.</p>
      </div>

      {/* DOCTORS Layout) */}
      <div className="container mx-auto px-4 mt-20">
        <div className="flex items-center justify-center space-x-4 mb-20 text-[#008000]">
          <div className="h-px w-8 md:w-12 bg-current opacity-30"></div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Our Doctors</h2>
          <div className="h-px w-8 md:w-12 bg-current opacity-30"></div>
        </div>
        <div className="space-y-24 mb-32">
          {DOCTORS.map((doc, idx) => (
             <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mx-auto border-b border-gray-100 pb-20">
               <div className="h-[400px] w-full max-w-[350px] md:h-[550px] md:max-w-[400px] shrink-0 overflow-hidden rounded-[2.5rem] shadow-lg"><img src={doc.image} alt={doc.name} className="w-full h-full object-cover" /></div>
               <div className="flex-1 text-center md:text-left"><h3 className="text-3xl md:text-4xl font-black text-[#008000] uppercase mb-4">{doc.name}</h3><p className="text-xl text-gray-700 leading-relaxed">{doc.bio}</p></div>
             </div>
          ))}
        </div>

        {/* ---  INFINITE scroll CARE TEAM CARDS --- */}
        <div className="relative mb-20">
          <div className="flex items-center justify-center space-x-4 mb-16 text-[#008000]">
            <div className="h-px w-8 md:w-12 bg-current opacity-30"></div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Our Care Team</h2>
            <div className="h-px w-8 md:w-12 bg-current opacity-30"></div>
          </div>

          <div className="relative group max-w-[1600px] mx-auto">
            {/* NAVIGATION ARROWS */}
            <button onClick={() => handleManualScroll('left')} className="absolute top-1/2 -left-2 md:-left-16 z-10 transform -translate-y-1/2 p-2 text-black opacity-30 hover:opacity-100 hover:text-[#008000] transition-all"><svg className="w-14 h-14 md:w-28 md:h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg></button>
            <button onClick={() => handleManualScroll('right')} className="absolute top-1/2 -right-2 md:-right-16 z-10 transform -translate-y-1/2 p-2 text-black opacity-30 hover:opacity-100 hover:text-[#008000] transition-all"><svg className="w-14 h-14 md:w-28 md:h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg></button>

            <div 
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsTouched(true)}
              onTouchEnd={() => setIsTouched(false)}
              // UPDATED: Removed 'scroll-smooth' from here to fix mobile glitch
              className="flex overflow-x-auto no-scrollbar gap-6 md:gap-10 pb-12 px-10 md:px-4 touch-pan-x"
            >
              {loopedTeam.map((member, idx) => (
                <div key={idx} className="relative h-[480px] md:h-[550px] w-[280px] md:w-[400px] flex-shrink-0 cursor-pointer shadow-xl rounded-[2.5rem] overflow-hidden group/card border border-gray-100 bg-white">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-6 text-center border-t border-gray-100">
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{member.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;