import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BottomBubbleMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed right-4 md:right-6 z-[9999] transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'bottom-6 opacity-100 translate-y-0' 
          : '-bottom-20 opacity-0 translate-y-10'
      }`}
    >
      {/* Container: flex-col for stacking on mobile, items-end to keep it right-aligned */}
      <div className="flex flex-col items-end gap-3">
        
        {/* Book Appointment - Teal (Top Bubble) */}
        <Link
          to="/appointment"
          className="flex items-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white px-4 py-2.5 rounded-full shadow-lg transition-transform active:scale-95"
        >
          <span className="text-sm">📅</span>
          <span className="text-xs md:text-sm font-bold tracking-tight">Book Appointment</span>
        </Link>

        {/* New Clients - Blue (Middle Bubble) */}
        <Link
          to="/about"
          className="flex items-center gap-2 bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2.5 rounded-full shadow-lg transition-transform active:scale-95"
        >
          <span className="text-sm">👤</span>
          <span className="text-xs md:text-sm font-bold tracking-tight">New Clients</span>
        </Link>

        {/* Call Now - Green (Bottom Bubble) */}
        <a
          href="tel:5196882123"
          className="flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-white px-4 py-2.5 rounded-full shadow-lg transition-transform active:scale-95"
        >
          <span className="text-sm">📞</span>
          <span className="text-xs md:text-sm font-bold tracking-tight">Call Now</span>
        </a>
        
      </div>
    </div>
  );
};

export default BottomBubbleMenu;