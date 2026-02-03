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

// Array of images for the gallery
const IMAGES = [
  { 
    id: 1, 
    url: gallery1,
  },
  { 
    id: 2, 
    url: gallery2,
  },
  { 
    id: 3, 
    url: gallery3,
  },
  { 
    id: 4, 
    url: gallery4,
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      
      <Helmet>
        <title>Photo Gallery | Edwards Veterinary Services</title>
        <meta name="description" content="View photos of our veterinary clinic in Tillsonburg, happy patients, and our facilities. Submit your own pet photos to our community gallery." />
        <link rel="canonical" href="https://gotec.ca/gallery" />
      </Helmet>
      

      {/* Page Title Section */}
      {/* CHANGE: Background to #008000 */}
      <section className="bg-[#008000] py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Clinic Gallery</h1>
        {/* CHANGE: Text color to a lighter green/white for contrast */}
        <p className="text-xl text-green-50">Witness our dedication to veterinary excellence.</p>
      </section>

      <div className="container mx-auto px-4 mt-12">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {IMAGES.map(img => (
            <div key={img.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={img.url} 
                  alt="Pet Gallery Image" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              {/* CHANGE: Hover overlay to #008000 */}
              <div className="absolute inset-0 bg-[#008000]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Quote Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gray-50 rounded-[40px] p-12 text-center border border-gray-100 max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-sm">
            {/* CHANGE: Icon text to #008000 */}
            <svg className="w-8 h-8 text-[#008000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <p className="text-gray-600 mb-8 text-lg italic">
            "Compassionate care for every stage of your pet's life."
          </p>
          <div className="flex justify-center space-x-2">
            {/* CHANGE: Dots to #008000 */}
            {[1, 2, 3].map(i => <div key={i} className="h-1 w-8 bg-[#008000]/20 rounded-full"></div>)}
          </div>
        </div>
      </div>

      {/* PHOTO SUBMISSION FORM */}
      <div className="container mx-auto px-4 mt-24 mb-20 max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Pet's Photo</h2>
            <p className="text-gray-500">Share your favorite moments with our clinic community!</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                {/* CHANGE: Focus border and ring to #008000 */}
                <input type="text" placeholder="First" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 outline-none transition" required />
              </div>
              <div className="flex flex-col justify-end">
                {/* CHANGE: Focus border and ring to #008000 */}
                <input type="text" placeholder="Last" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 outline-none transition" required />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
              {/* CHANGE: Focus border and ring to #008000 */}
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 outline-none transition" required />
            </div>

            {/* Pet's Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Pet's Name</label>
              {/* CHANGE: Focus border and ring to #008000 */}
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 outline-none transition" />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tell us what is happening in this photo!</label>
              {/* CHANGE: Focus border and ring to #008000 */}
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/20 outline-none transition resize-none"></textarea>
            </div>

            {/* File Upload Section */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">File Upload *</label>
              <div 
                // CHANGE: Hover border and bg to #008000
                className="relative group border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-[#008000] hover:bg-[#008000]/5 transition-all cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
              >
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  accept="image/*"
                  required
                />
                <div className="space-y-3">
                  {/* CHANGE: Group hover text to #008000 */}
                  <div className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#008000] transition">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium text-lg">Drag & Drop Files</p>
                  <p className="text-sm text-gray-400">or</p>
                  {/* CHANGE: Text color to #008000, hover bg to #008000 */}
                  <span className="inline-block bg-white px-6 py-2 rounded-full border border-gray-200 text-sm font-bold text-[#008000] shadow-sm group-hover:bg-[#008000] group-hover:text-white transition">Choose Files to Upload</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {/* CHANGE: Bg to #008000, hover to darker green #006400, shadow to #008000 */}
            <button 
              type="submit" 
              className="w-full bg-[#008000] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#006400] shadow-lg hover:shadow-[#008000]/30 transition-all transform active:scale-[0.98]"
            >
              Submit Photo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gallery;