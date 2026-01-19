
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
        <p className="text-xl text-brand-light">Hear from the families we serve.</p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-6 h-6 ${i < t.rating ? 'fill-current' : 'text-gray-200'}`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-400">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-brand/5 p-12 rounded-3xl border border-brand/10">
          <h3 className="text-2xl font-bold text-brand mb-4">Want to share your experience?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">We value your feedback and would love to hear how we helped your pet. Your stories inspire us every day.</p>
          <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="bg-brand text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition shadow-lg">
            Leave a Google Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
