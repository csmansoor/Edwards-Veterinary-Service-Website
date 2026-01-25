import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm';
import BottomBubbleMenu from './BottomBubbleMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border-2 border-brand/10">
            <img
              src="data:image/png;base64,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" // Replace with your actual logo path
              alt="Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image is missing
                e.currentTarget.src = 'https://via.placeholder.com/150';
              }}
            />
          </div>
          <div>
            <span className="text-xl font-bold text-brand block leading-none">Edwards</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Veterinary Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center font-medium">
          <Link to="/" className="hover:text-brand transition">Home</Link>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-brand transition py-2">
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Our Story</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Our Team</Link>
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Photo Gallery</Link>
              <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Testimonials</Link>
              <Link to="/careers" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Careers</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-brand transition py-2">
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/services" className="block px-4 py-2 font-bold text-brand hover:bg-brand hover:text-white transition">View All Services</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-brand transition py-2">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/forms" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Forms</Link>
              <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">FAQs</Link>
              <Link to="/payments" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Payment Options</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Blog</Link>
            </div>
          </div>

          <Link to="/store" className="hover:text-brand transition">Online Store</Link>
          <Link to="/appointment" className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-dark transition transform hover:scale-105 shadow-md">
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
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-brand/20">
                <Link to="/about" onClick={toggleMenu} className="text-gray-700 font-medium">Our Story</Link>
                <Link to="/team" onClick={toggleMenu} className="text-gray-700 font-medium">Our Team</Link>
                <Link to="/gallery" onClick={toggleMenu} className="text-gray-700 font-medium">Photo Gallery</Link>
                <Link to="/testimonials" onClick={toggleMenu} className="text-gray-700 font-medium">Testimonials</Link>
                <Link to="/careers" onClick={toggleMenu} className="text-gray-700 font-medium">Careers</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Services</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-brand/20">
                <Link to="/services" onClick={toggleMenu} className="text-brand font-bold">View All Services</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-black text-gray-900 uppercase text-xs tracking-widest">Resources</p>
              <div className="flex flex-col space-y-3 pl-4 border-l-2 border-brand/20">
                <Link to="/forms" onClick={toggleMenu} className="text-gray-700 font-medium">Forms</Link>
                <Link to="/faqs" onClick={toggleMenu} className="text-gray-700 font-medium">FAQs</Link>
                <Link to="/payments" onClick={toggleMenu} className="text-gray-700 font-medium">Payment Options</Link>
                <Link to="/blog" onClick={toggleMenu} className="text-gray-700 font-medium">Blog</Link>
              </div>
            </div>

            <Link to="/store" onClick={toggleMenu} className="text-xl font-bold border-b pb-2 text-gray-900">Online Store</Link>
            <Link to="/appointment" onClick={toggleMenu} className="bg-brand text-white text-center py-4 rounded-xl font-bold shadow-lg">
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
          <div className="bg-brand w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
          <span className="text-xl font-bold">Edwards Veterinary</span>
        </div>
        <p className="text-gray-400 text-sm">Providing compassionate, high-quality veterinary care.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Quick Links</h4>
        <ul className="space-y-3 text-gray-400">
          <li><Link to="/about" className="hover:text-brand transition">About Us</Link></li>
          <li><Link to="/services" className="hover:text-brand transition">Our Services</Link></li>
          <li><Link to="/contact" className="hover:text-brand transition">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Contact</h4>
        <p className="text-gray-400 text-sm">527 Broadway St, Tillsonburg<br />(519) 688-2123</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Hours</h4>
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