import React, { useState, useEffect } from 'react';

const FloatingMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show menu after scrolling down 200 pixels
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[9999] flex h-12 font-bold text-white text-[10px] md:text-sm shadow-xl transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0'
      }`}
    >
      {/* 1. Book Appointment */}
      <a 
        href="#/appointment" 
        className="flex-1 bg-blue-600 hover:bg-[#1e5c47] flex items-center justify-center uppercase tracking-tighter md:tracking-wider text-center px-1 transition-colors"
      >
        Book Appointment
      </a>

      {/* 2. Call Now */}
      <div className="flex-[1.5] bg-[#ff0000] flex items-center justify-center uppercase tracking-tighter md:tracking-wider px-2 text-center border-x border-white/20">
        Call Now (519) 688-2123
      </div>

      {/* 3. New Clients */}
      <a 
        href="#/#our-story" 
        className="flex-1 bg-[#f1c40f] hover:bg-[#d4ac0d] text-black flex items-center justify-center uppercase tracking-tighter md:tracking-wider text-center px-1 transition-colors"
      >
        New Clients
      </a>
    </div>
  );
};

export default FloatingMenu;