import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BottomBubbleMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the slide-in after 200px of scrolling
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
      className={`fixed right-6 z-[9999] transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'bottom-6 opacity-100 translate-y-0' 
          : '-bottom-20 opacity-0 translate-y-10'
      }`}
    >
      {/* Main White Container Pill */}
      <div className="bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-100 flex items-center gap-2">
        
        {/* Book Appointment - Teal */}
        <Link
          to="/appointment"
          className="flex items-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white px-4 py-2 rounded-full transition-colors duration-200"
        >
          <span className="text-sm">📅</span>
          <span className="text-sm font-bold tracking-tight whitespace-nowrap">Book Appointment</span>
        </Link>

        {/* New Clients - Blue */}
        <Link
          to="/about"
          className="flex items-center gap-2 bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-full transition-colors duration-200"
        >
          <span className="text-sm">👤</span>
          <span className="text-sm font-bold tracking-tight whitespace-nowrap">New Clients</span>
        </Link>

        {/* Call Now - Green */}
        <a
          href="tel:5196882123"
          className="flex items-center gap-2 bg-[#2ecc71] hover:bg-[#27ae60] text-white px-4 py-2 rounded-full transition-colors duration-200"
        >
          <span className="text-sm">📞</span>
          <span className="text-sm font-bold tracking-tight whitespace-nowrap">Call Now</span>
        </a>
        
      </div>
    </div>
  );
};

export default BottomBubbleMenu;