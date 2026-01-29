import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm';
import BottomBubbleMenu from './BottomBubbleMenu';
// @ts-ignore
import logoimg from '../images/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* --- LOGO SECTION --- */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoimg} 
            alt="Edwards Veterinary Services" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center font-medium">
          <Link to="/" className="hover:text-[#2a7f62] transition">Home</Link>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#2a7f62] transition py-2">
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Our Story</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Our Team</Link>
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Photo Gallery</Link>
              <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Testimonials</Link>
              <Link to="/careers" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Careers</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#2a7f62] transition py-2">
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/services" className="block px-4 py-2 font-bold text-[#2a7f62] hover:bg-[#2a7f62] hover:text-white transition">View All Services</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#2a7f62] transition py-2">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/forms" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Forms</Link>
              <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">FAQs</Link>
              <Link to="/payments" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Payment Options</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#2a7f62]">Blog</Link>
            </div>
          </div>

          <Link to="/store" className="hover:text-[#2a7f62] transition">Online Store</Link>
          <Link to="/appointment" className="bg-[#2a7f62] text-white px-6 py-2 rounded-full hover:bg-[#1e5c46] transition transform hover:scale-105 shadow-md">
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden p-2 text-gray-600 focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-6 pb-24">
            <Link to="/" onClick={toggleMenu} className="text-xl font-bold border-b pb-2 text-gray-900">Home</Link>
            
            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">About Us</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#2a7f62]/20">
                <Link to="/about" onClick={toggleMenu} className="text-gray-700 font-medium">Our Story</Link>
                <Link to="/team" onClick={toggleMenu} className="text-gray-700 font-medium">Our Team</Link>
                <Link to="/gallery" onClick={toggleMenu} className="text-gray-700 font-medium">Photo Gallery</Link>
                <Link to="/testimonials" onClick={toggleMenu} className="text-gray-700 font-medium">Testimonials</Link>
                <Link to="/careers" onClick={toggleMenu} className="text-gray-700 font-medium">Careers</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Services</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#2a7f62]/20">
                <Link to="/services" onClick={toggleMenu} className="text-[#2a7f62] font-bold">View All Services</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Resources</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#2a7f62]/20">
                <Link to="/forms" onClick={toggleMenu} className="text-gray-700 font-medium">Forms</Link>
                <Link to="/faqs" onClick={toggleMenu} className="text-gray-700 font-medium">FAQs</Link>
                <Link to="/payments" onClick={toggleMenu} className="text-gray-700 font-medium">Payment Options</Link>
                <Link to="/blog" onClick={toggleMenu} className="text-gray-700 font-medium">Blog</Link>
              </div>
            </div>

            <Link to="/store" onClick={toggleMenu} className="text-xl font-bold border-b pb-2 text-gray-900">Online Store</Link>
            <Link to="/appointment" onClick={toggleMenu} className="bg-[#2a7f62] text-white text-center py-4 rounded-xl font-bold shadow-lg">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          {/* Footer Logo: Simple Text for now, or you can use image here too */}
          <div className="bg-[#2a7f62] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
          <span className="text-xl font-bold">Edwards Veterinary</span>
        </div>
        <p className="text-gray-400 text-sm">Providing compassionate, high-quality veterinary care.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#2a7f62] pl-3">Quick Links</h4>
        <ul className="space-y-3 text-gray-400">
          <li><Link to="/about" className="hover:text-[#2a7f62] transition">About Us</Link></li>
          <li><Link to="/services" className="hover:text-[#2a7f62] transition">Our Services</Link></li>
          <li><Link to="/contact" className="hover:text-[#2a7f62] transition">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#2a7f62] pl-3">Contact</h4>
        <p className="text-gray-400 text-sm">527 Broadway St, Tillsonburg<br />(519) 688-2123</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#2a7f62] pl-3">Hours</h4>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>Mon-Fri: 8 AM – 5 PM</li>
          <li>Sat: 8 AM – 1 PM</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Edwards Veterinary Services.</p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <BottomBubbleMenu />
      <main className="flex-grow">{children}</main>
      <ContactForm />
      <Footer />
    </div>
  );
};