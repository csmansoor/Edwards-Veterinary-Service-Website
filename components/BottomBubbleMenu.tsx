import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BottomBubbleMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      className={`fixed z-[9999] transition-all duration-500 ease-in-out transform
        /* MOBILE: Bottom center */
        bottom-4 left-1/2 -translate-x-1/2 
        /* DESKTOP: Bottom right */
        md:bottom-8 md:right-8 md:left-auto md:translate-x-0
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
    >
      {/* Horizontal Layout (Perpendicular) */}
      <div className="flex flex-row items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-2xl">
        
        {/* --- Book Appointment --- */}
        <Link
          to="/appointment"
          className="flex items-center gap-1.5 bg-[#1abc9c] hover:bg-[#16a085] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg transition-all active:scale-95 hover:-translate-y-1"
        >
          <span className="text-xs md:text-base">📅</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Book Appt
          </span>
        </Link>

        {/* --- New Clients --- */}
        <Link
          to="/about"
          className="flex items-center gap-1.5 bg-[#3498db] hover:bg-[#2980b9] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg transition-all active:scale-95 hover:-translate-y-1"
        >
          <span className="text-xs md:text-base">👤</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            New Clients
          </span>
        </Link>

        {/* --- Call Now --- */}
        <a
          href="tel:5196882123"
          className="flex items-center gap-1.5 bg-[#2ecc71] hover:bg-[#27ae60] text-white px-3 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg transition-all active:scale-95 hover:-translate-y-1"
        >
          <span className="text-xs md:text-base">📞</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Call
          </span>
        </a>
        
      </div>
    </div>
  );
};

export default BottomBubbleMenu;