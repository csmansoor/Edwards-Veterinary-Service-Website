import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* 1. GREEN CONTACT BAR (Both links now styled as buttons) */}
      <div className="bg-[#2a7f62] text-white py-2 px-4">
        <div className="container mx-auto flex justify-center md:justify-end gap-4 text-sm font-bold items-center">
          
          {/* CONTACT US BUTTON */}
          <a 
            href="tel:5196882123" 
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-all border border-white/30 shadow-sm"
          >
            <span>📞</span>
            <span>Contact Us</span>
          </a>

          {/* EMAIL US BUTTON */}
          <a 
            href="mailto:frontdesk.edwardsvs@gmail.com" 
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-all border border-white/30 shadow-sm"
          >
            <span>✉️</span>
            <span>Email Us</span>
          </a>
          
        </div>
      </div>

      {/* 2. YELLOW BOOKING BAR */}
      <div className="bg-[#f1c40f] py-2 border-b border-gray-100">
        <div className="container mx-auto text-center">
          <Link 
            to="/appointment" 
            className="text-black font-black uppercase text-xs tracking-widest hover:opacity-70 transition-opacity"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-brand w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
          <div>
            <span className="text-xl font-bold text-brand block leading-none">Edwards</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Veterinary Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center font-medium">
          <Link to="/" className="hover:text-brand transition">Home</Link>
          
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 hover:text-brand transition"
              onMouseEnter={() => setActiveDropdown('about')}
              onClick={() => toggleDropdown('about')}
            >
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Our Story</Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Our Team</Link>
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Photo Gallery</Link>
              <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Testimonials</Link>
              <Link to="/careers" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Careers</Link>
            </div>
          </div>

          <div className="relative group">
            <button 
              className="flex items-center space-x-1 hover:text-brand transition"
              onMouseEnter={() => setActiveDropdown('services')}
              onClick={() => toggleDropdown('services')}
            >
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <Link to="/services/pet-wellness-care" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Wellness Care</Link>
              <Link to="/services/pet-surgery" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Soft Tissue Surgery</Link>
              <Link to="/services/pet-dentistry" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Dentistry</Link>
              <Link to="/services/puppy-kitten-care" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Puppy & Kitten Care</Link>
              <Link to="/services/exotic-pet-care" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Exotic Pet Care</Link>
              <Link to="/services/pet-grooming" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Pet Grooming</Link>
              <hr className="my-1 border-gray-100" />
              <Link to="/services" className="block px-4 py-2 font-bold text-brand hover:bg-brand hover:text-white transition">View All Services</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-brand transition">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
              <Link to="/forms" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Online Forms</Link>
              <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">FAQs</Link>
              <Link to="/payments" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Payment Options</Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-gray-50 hover:text-brand">Pet Health Blog</Link>
            </div>
          </div>

          <Link to="/store" className="hover:text-brand transition">Online Store</Link>
          <Link to="/contact" className="hover:text-brand transition">Contact</Link>
          
          <Link to="/appointment" className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-dark transition transform hover:scale-105 shadow-md">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-lg font-medium border-b pb-2">Home</Link>

            <div className="space-y-2">
              <p className="font-bold text-gray-400 uppercase text-xs">About</p>
              <Link to="/about" onClick={toggleMenu} className="block pl-4">Our Story</Link>
              <Link to="/team" onClick={toggleMenu} className="block pl-4">Our Team</Link>
              <Link to="/gallery" onClick={toggleMenu} className="block pl-4">Photo Gallery</Link>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-gray-400 uppercase text-xs">Services</p>
              <Link to="/services" onClick={toggleMenu} className="block pl-4 font-medium text-brand">All Services</Link>
              <Link to="/services/pet-wellness-care" onClick={toggleMenu} className="block pl-4">Wellness Care</Link>
              <Link to="/services/pet-surgery" onClick={toggleMenu} className="block pl-4">Surgery</Link>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-gray-400 uppercase text-xs">Resources</p>
              <Link to="/forms" onClick={toggleMenu} className="block pl-4">Online Forms</Link>
              <Link to="/faqs" onClick={toggleMenu} className="block pl-4">FAQs</Link>
              <Link to="/payments" onClick={toggleMenu} className="block pl-4">Payment Options</Link>
              <Link to="/blog" onClick={toggleMenu} className="block pl-4">Pet Health Blog</Link>
            </div>
            <Link to="/store" onClick={toggleMenu} className="text-lg font-medium border-b pb-2">Online Store</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-lg font-medium border-b pb-2">Contact</Link>
            <Link to="/appointment" onClick={toggleMenu} className="bg-brand text-white text-center py-3 rounded-lg font-bold">Book Appointment</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-brand w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">E</div>
            <span className="text-xl font-bold">Edwards Veterinary</span>
          </div>
          <p className="text-gray-400 text-sm">
            Providing compassionate, high-quality veterinary care for pets in our community.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" className="hover:text-brand transition"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.06-1.277-.262-2.148-.558-2.913-.306-.788-.718-1.459-1.384-2.126C21.058.935 20.39.527 19.601.222 18.835.132 17.965.072 16.687.014 15.367.014 14.958 0 12 0z"/></svg></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/about" className="hover:text-brand transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand transition">Our Services</Link></li>
            <li><Link to="/team" className="hover:text-brand transition">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition">Contact Us</Link></li>
            <li><Link to="/appointment" className="hover:text-brand transition">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>527 Broadway St<br />Tillsonburg, ON N4G 3S8<br /><span className="text-xs italic">(Across from movie theatre)</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>(519) 688-2123</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="truncate">frontdesk.edwardsvs@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Hours</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li className="flex justify-between"><span>Mon:</span><span>8 AM – 5 PM</span></li>
            <li className="flex justify-between"><span>Tue:</span><span>8 AM – 6 PM</span></li>
            <li className="flex justify-between"><span>Wed – Fri:</span><span>8 AM – 5 PM</span></li>
            <li className="flex justify-between"><span>Sat:</span><span>8 AM – 1 PM</span></li>
            <li className="flex justify-between"><span>Sun:</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Edwards Veterinary Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <ContactForm />

      <Footer />
    </div>
  );
};