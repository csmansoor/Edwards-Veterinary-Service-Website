import React from 'react';
import { Helmet } from 'react-helmet-async'; 

//@ts-ignore
import gallery1 from '../images/gallery.webp';
//@ts-ignore
import gallery2 from '../images/gallery2.webp';
//@ts-ignore
import gallery3 from '../images/gallery3.webp';
//@ts-ignore
import gallery4 from '../images/gallery4.webp';

const IMAGES = [
  { id: 1, url: gallery1 },
  { id: 2, url: gallery2 },
  { id: 3, url: gallery3 },
  { id: 4, url: gallery4 },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Photo Gallery | Edwards Veterinary Services</title>
        <meta name="description" content="View photos of our veterinary clinic in Tillsonburg, happy patients, and our facilities." />
        <link rel="canonical" href="https://gotec.ca/gallery" />
      </Helmet>

      {/* --- BANNER SECTION*/}
      <section className="bg-[#008000] py-12 md:py-20 text-white text-center px-4">
        
        <h1 className="text-5xl md:text-8xl font-black mb-4 md:mb-6 uppercase tracking-tighter italic drop-shadow-2xl">
          Clinic Gallery
        </h1>
       
        <p className="text-xl md:text-3xl font-medium text-green-50 opacity-90 max-w-4xl mx-auto leading-tight">
          Witness our dedication to veterinary excellence.
        </p>
      </section>

      <div className="container mx-auto px-4 mt-12 md:mt-20">
        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {IMAGES.map(img => (
            <div key={img.id} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="h-[350px] md:h-[600px] overflow-hidden">
                <img 
                  src={img.url} 
                  alt="Pet Gallery Image" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-[#008000]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Quote Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gray-50 rounded-[3rem] p-12 text-center border border-gray-100 max-w-5xl mx-auto">
          <div className="inline-block p-6 bg-white rounded-full mb-6 shadow-md">
            <svg className="w-10 h-10 text-[#008000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <p className="text-gray-700 mb-8 text-2xl md:text-3xl font-bold italic leading-relaxed">
            "Compassionate care for every stage of your pet's life."
          </p>
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map(i => <div key={i} className="h-2 w-12 bg-[#008000]/20 rounded-full"></div>)}
          </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="container mx-auto px-4 mt-24 mb-24 max-w-4xl">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase">Submit Photo</h2>
            <p className="text-lg text-gray-500 font-medium">Share your favorite moments!</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#008000] outline-none transition-all" required />
              <input type="text" placeholder="Last Name" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#008000] outline-none transition-all" required />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#008000] outline-none transition-all" required />
            <input type="text" placeholder="Pet's Name" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#008000] outline-none transition-all" />
            <textarea rows={4} placeholder="Description" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#008000] outline-none transition-all resize-none"></textarea>
            
            <button type="submit" className="w-full bg-[#008000] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#006400] transition-all uppercase tracking-widest">
              Submit Photo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gallery;