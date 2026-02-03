import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm';
import BottomBubbleMenu from './BottomBubbleMenu';
// @ts-ignore
import logoimg from '../images/Logo.webp';

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
        <nav className="hidden lg:flex space-x-6 items-center font-medium">
          <Link to="/" className="hover:text-[#008000] transition">Home</Link>
          
          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#008000] transition py-2">
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Our Story</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Our Team</Link>
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Photo Gallery</Link>
              <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Testimonials</Link>
              <Link to="/careers" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Careers</Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#008000] transition py-2">
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/services" className="block px-4 py-2 font-bold text-[#008000] hover:bg-[#008000] hover:text-white transition">View All Services</Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-[#008000] transition py-2">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/forms" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Forms</Link>
              <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">FAQs</Link>
              <Link to="/payments" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Payment Options</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#008000]">Blog</Link>
            </div>
          </div>

          {/* Online Store Button (Desktop) */}
          <Link to="/store" className="bg-[#008000] text-white px-6 py-2 rounded-full hover:bg-green-800 transition transform hover:scale-105 shadow-md whitespace-nowrap">
            Online Store
          </Link>
          
          {/* Book Now Button (Desktop) - EXTERNAL LINK */}
          <a 
            href="https://app.petdesk.com/request-appointment/edwards-veterinary-services?placeGUID=bc716089-33b5-43a3-a9be-0aee8a4721b8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#008000] text-white px-6 py-2 rounded-full hover:bg-green-800 transition transform hover:scale-105 shadow-md whitespace-nowrap"
          >
            Book Now
          </a>
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
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#008000]/20">
                <Link to="/about" onClick={toggleMenu} className="text-gray-700 font-medium">Our Story</Link>
                <Link to="/team" onClick={toggleMenu} className="text-gray-700 font-medium">Our Team</Link>
                <Link to="/gallery" onClick={toggleMenu} className="text-gray-700 font-medium">Photo Gallery</Link>
                <Link to="/testimonials" onClick={toggleMenu} className="text-gray-700 font-medium">Testimonials</Link>
                <Link to="/careers" onClick={toggleMenu} className="text-gray-700 font-medium">Careers</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Services</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#008000]/20">
                <Link to="/services" onClick={toggleMenu} className="text-[#008000] font-bold">View All Services</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Resources</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#008000]/20">
                <Link to="/forms" onClick={toggleMenu} className="text-gray-700 font-medium">Forms</Link>
                <Link to="/faqs" onClick={toggleMenu} className="text-gray-700 font-medium">FAQs</Link>
                <Link to="/payments" onClick={toggleMenu} className="text-gray-700 font-medium">Payment Options</Link>
                <Link to="/blog" onClick={toggleMenu} className="text-gray-700 font-medium">Blog</Link>
              </div>
            </div>

            {/* --- MOBILE BUTTONS --- */}
            <div className="flex flex-col space-y-4 mt-6 items-start">
              <Link to="/store" onClick={toggleMenu} className="bg-[#008000] text-white text-center w-auto px-10 py-2 rounded-full font-bold shadow-md hover:bg-green-800 transition">
                Online Store
              </Link>
              
              {/* FIXED: Mobile Link now points to PetDesk */}
              <a 
                href="https://app.petdesk.com/request-appointment/edwards-veterinary-services?placeGUID=bc716089-33b5-43a3-a9be-0aee8a4721b8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu} 
                className="bg-[#008000] text-white text-center w-auto px-10 py-2 rounded-full font-bold shadow-md hover:bg-green-800 transition"
              >
                Book Appointment
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Column 1: Logo & Tagline */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          {/* Footer Logo */}
          <div className="bg-[#008000] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
          <span className="text-xl font-bold">Edwards Veterinary</span>
        </div>
        <p className="text-gray-400 text-sm">Providing compassionate, high-quality veterinary care.</p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#008000] pl-3">Quick Links</h4>
        <ul className="space-y-3 text-gray-400">
          <li><Link to="/about" className="hover:text-[#008000] transition">About Us</Link></li>
          <li><Link to="/services" className="hover:text-[#008000] transition">Our Services</Link></li>
          <li><Link to="/contact" className="hover:text-[#008000] transition">Contact Us</Link></li>
        </ul>
      </div>

      {/* Column 3: Contact Info */}
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#008000] pl-3">Contact</h4>
        <p className="text-gray-400 text-sm">527 Broadway St, Tillsonburg<br />(519) 688-2123</p>
      </div>

      {/* Column 4: Social Media */}
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-[#008000] pl-3">Follow us on social media</h4>
        <div className="flex space-x-4">
          <a 
            href="https://www.facebook.com/share/1DsMN5SS4a/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            {/* Facebook Icon SVG */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
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