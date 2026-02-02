import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; 

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white">
      
      <Helmet>
        <title>Contact Us | Edwards Veterinary Services</title>
        <meta name="description" content="Visit us at 527 Broadway St, Tillsonburg. Call (519) 688-2123 to book an appointment. 24-hour emergency care available for current clients." />
        <link rel="canonical" href="https://gotec.ca/contact" />
      </Helmet>
      

      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Location</p>
                    <p className="text-gray-600 leading-tight">527 Broadway St</p>
                    <p className="text-gray-600 leading-tight">Tillsonburg, ON N4G 3S8</p>
                    <p className="text-gray-400 text-sm mt-1 italic font-medium">Located across from the movie theatre</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Phone</p>
                    <p className="text-gray-600">(519) 688-2123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand/10 p-3 rounded-lg text-brand">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <p className="text-gray-600">frontdesk.edwardsvs@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Section */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-brand/10 p-2 rounded-lg text-brand">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand">Clinic Hours</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between border-b border-gray-200 pb-1">
                  <span className="font-medium">Monday</span>
                  <span>8 AM – 5 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-1">
                  <span className="font-medium text-brand">Tuesday</span>
                  <span className="font-bold text-brand">8 AM – 6 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-1">
                  <span className="font-medium">Wednesday – Friday</span>
                  <span>8 AM – 5 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-1">
                  <span className="font-medium">Saturday</span>
                  <span>8 AM – 1 PM</span>
                </li>
                <li className="flex justify-between text-gray-400">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

           {/* Live Google Map */}
            <div className="bg-gray-100 h-80 rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }}
                //Google map limk
                src="https://maps.google.com/maps?q=Edwards+Veterinary+Services+527+Broadway+St+Tillsonburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy" 
                title="Edwards Veterinary Services Location"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
            {sent ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-8">We'll get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="text-brand font-bold underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-brand" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-brand" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea required className="w-full px-4 py-3 rounded-xl border border-gray-200 h-40 outline-none focus:ring-2 focus:ring-brand" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-brand text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;