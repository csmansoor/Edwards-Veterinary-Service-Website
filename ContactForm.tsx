import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// @ts-ignore
import contactBannerImg from './images/contactBanner.webp';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus('sending');

    // --- YOUR CONTACT FORM KEYS ---
    const SERVICE_ID = 'service_2oxre08';
    const TEMPLATE_ID = 'template_cionnhi'; 
    const PUBLIC_KEY = 'wlh8iAtcVqHPFFMf1';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Success:', result.text);
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.log('Error:', error.text);
          setStatus('error');
      });
  };

  return (
    <section className="bg-white" id="contact">
      {/* Banner Section */}
      <div 
        className="relative py-24 bg-cover bg-center text-center text-white overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactBannerImg})` 
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-lg">
              <span className="text-[#008000] text-4xl font-bold">🐾</span>
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
            to="https://app.petdesk.com/request-appointment/edwards-veterinary-services?placeGUID=bc716089-33b5-43a3-a9be-0aee8a4721b8" 
            className="inline-block bg-[#008000] hover:bg-[#006400] text-white font-black py-4 px-12 rounded-md uppercase transition-all shadow-xl text-lg"
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* Split Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: Contact Form */}
          <div className="lg:w-3/5 p-8 md:p-12">
            <h2 className="text-3xl font-black text-gray-800 mb-2 uppercase">Get in touch</h2>
            <p className="text-gray-500 mb-8 font-medium">We'll get back to you as soon as possible.</p>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name *" 
                className="w-full p-4 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-[#008000] transition-colors" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                className="w-full p-4 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-[#008000] transition-colors" 
                required 
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                className="w-full p-4 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-[#008000] transition-colors" 
              />
              <textarea 
                name="message" 
                rows={5} 
                placeholder="How can we help you? *" 
                className="w-full p-4 bg-gray-50 rounded-lg outline-none border border-gray-200 focus:border-[#008000] transition-colors" 
                required
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-[#008000] text-white font-black uppercase px-10 py-4 rounded-lg hover:bg-[#006400] transition-all shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg font-bold border border-green-200">
                  ✅ Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg font-bold border border-red-200">
                  ❌ Failed to send. Please call us directly.
                </div>
              )}
            </form>
          </div>

          {/* Right Side: Contact Info (Green Sidebar) */}
          <div className="lg:w-2/5 bg-[#008000] p-8 md:p-12 text-white flex flex-col justify-between">
            <div className="space-y-10">
              <h2 className="text-3xl font-black uppercase mb-4">Contact us</h2>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Address</h4>
                  <p className="opacity-90 leading-snug">527 Broadway St<br />Tillsonburg, ON N4G 3S8</p>
                  <p className="text-sm italic mt-1 text-white/70">Across from the movie theatre</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">📞</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Phone / Text</h4>
                  <p className="opacity-90">(519) 688-2123</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">✉️</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <p className="opacity-90 break-all">frontdesk.edwardsvs@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">🕒</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Hours</h4>
                  <div className="text-sm opacity-90 grid grid-cols-[80px_1fr] gap-y-1">
                    <span>Mon</span>      <span>8am - 5pm</span>
                    <span>Tue</span>      <span>8am - 6pm</span>
                    <span>Wed-Fri</span>  <span>8am - 5pm</span>
                    <span>Sat.</span>     <span>8am - 1pm</span>
                    <span className="font-bold text-red-300 uppercase">Sun</span> <span className="font-bold text-red-300 uppercase">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">Emergency</p>
              {/*  Updated text and increased font size to text-lg */}
              <p className="text-lg leading-relaxed italic">
                24/7 emergency veterinary care for existing clients.<br />
                New clients are welcome to our Urgent Care during regular business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Full Width & Taller */}
      <div className="w-full h-[650px] pb-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.263529369932!2d-80.73059002343242!3d42.97274097114251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c35a666e85717%3A0xc3f8e5b6164f815!2s527%20Broadway%20St%2C%20Tillsonburg%2C%20ON%20N4G%203S8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
          width="100%" 
          height="150%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          className="block"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;