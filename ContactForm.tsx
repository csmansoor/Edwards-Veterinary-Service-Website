import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section className="bg-white">
      <div 
        className="relative py-24 bg-cover bg-center text-center text-white overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80')` 
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-lg">
              <span className="text-[#2a7f62] text-4xl font-bold">🐾</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Schedule Your Pet's Visit Today
          </h2>
          <p className="text-lg md:text-xl mb-6 font-medium leading-relaxed">
            Whether you're seeking preventive care, surgery, diagnostics, or mobile veterinary services in Tillsonburg, we're here to support every step of your pet's health journey.
          </p>
          <p className="italic mb-10 opacity-90 text-lg">
            Experience the Edwards Veterinary Services difference.
          </p>
          <Link 
            to="/appointment" 
            className="inline-block bg-[#2a7f62] hover:bg-[#1e5c47] text-white font-black py-4 px-12 rounded-md uppercase transition-all shadow-xl text-lg"
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center pt-24 mb-16">
        <h2 className="text-5xl font-black text-[#2a7f62] uppercase tracking-tight">
          Have a Question?
        </h2>
        <p className="text-[#2a7f62] font-black text-2xl mt-2 italic">Contact Us</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="text-[#2a7f62] text-4xl">📱</div>
            <div>
              <h3 className="font-black text-[#2a7f62] uppercase text-xl mb-1">Contact Us</h3>
              <p className="text-black text-lg font-bold">Phone: <span className="text-[#2a7f62]">(519) 688-2123</span></p>
              <p className="text-black text-lg font-medium">Email: frontdesk.edwardsvs@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-[#2a7f62] text-4xl">📍</div>
            <div>
              <h3 className="font-black text-[#2a7f62] uppercase text-xl mb-1">Our Address</h3>
              <p className="text-black text-lg font-bold">527 Broadway St</p>
              <p className="text-black text-lg">Tillsonburg, ON N4G 3S8</p>
              <p className="text-gray-500 italic mt-1">(Located across from the movie theatre)</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-[#2a7f62] text-4xl">🕒</div>
            <div>
              <h3 className="font-black text-[#2a7f62] uppercase text-xl mb-1">Hours</h3>
              <div className="text-black space-y-1 text-lg font-medium">
                <p>Monday: 8 AM – 5 PM</p>
                <p>Tuesday: 8 AM – 6 PM</p>
                <p>Wed – Fri: 8 AM – 5 PM</p>
                <p>Saturday: 8 AM – 1 PM</p>
                <p>Sunday: <span className="text-red-600 font-bold uppercase">Closed</span></p>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-red-600 text-4xl">⚠️</div> 
            <div>
              <h3 className="font-black text-[#2a7f62] uppercase text-xl mb-1">Emergency Services</h3>
              <p className="text-black text-lg leading-relaxed">
                We provide 24/7 emergency care for existing clients. Please call us directly if your pet needs urgent care.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f1c40f] p-10 rounded-2xl shadow-xl min-h-[600px] flex flex-col justify-center">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name *" className="w-full p-4 rounded-lg outline-none text-lg border-none" required />
              <input type="text" placeholder="Last Name *" className="w-full p-4 rounded-lg outline-none text-lg border-none" required />
            </div>
            <input type="email" placeholder="Email Address *" className="w-full p-4 rounded-lg outline-none text-lg border-none" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-lg outline-none text-lg border-none" />
            <textarea rows={6} placeholder="How can we help you? *" className="w-full p-4 rounded-lg outline-none text-lg border-none" required></textarea>
            <button type="submit" className="bg-[#2a7f62] text-white font-black uppercase px-12 py-5 rounded-lg hover:bg-[#1e5c47] transition-all w-full text-xl shadow-lg">
              Submit Form
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white bg-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.955513689445!2d-80.7303358!3d42.8632168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882db834927289b5%3A0x6a10065094200424!2s527%20Broadway%2C%20Tillsonburg%2C%20ON%20N4G%203S8!5e0!3m2!1sen!2sca!4v1715800000000!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;