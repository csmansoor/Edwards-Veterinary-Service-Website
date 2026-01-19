
import React, { useState } from 'react';

// Array of images for the gallery with verified working Unsplash IDs
const IMAGES = [
  { 
    id: 1, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 4, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1543466835-00a7907e9ef1?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 5, 
    category: 'Grooming', 
    url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 6, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 7, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 8, 
    category: 'Care', 
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800' 
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Care', 'Operation', 'Grooming'];

  const filteredImages = filter === 'All' ? IMAGES : IMAGES.filter(img => img.category === filter);

  return (
    <div className="bg-white pb-20">
      {/* Page Title Section */}
      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Clinic Gallery</h1>
        <p className="text-xl text-brand-light">Witness our dedication to veterinary excellence.</p>
      </section>

      <div className="container mx-auto px-4 mt-12">
        {/* Filter Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
                filter === cat 
                ? 'bg-brand text-white border-brand shadow-lg' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-brand hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map(img => (
            <div key={img.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={img.url} 
                  alt="Pet Gallery Image" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Quote Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gray-50 rounded-[40px] p-12 text-center border border-gray-100 max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-white rounded-full mb-6 shadow-sm">
            <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <p className="text-gray-600 mb-8 text-lg italic">
            "Compassionate care for every stage of your pet's life."
          </p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map(i => <div key={i} className="h-1 w-8 bg-brand/20 rounded-full"></div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
