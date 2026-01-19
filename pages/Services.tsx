
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-brand-light">Comprehensive care for every stage of your pet's life.</p>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <Link 
              to={`/services/${service.slug}`} 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-brand">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <span className="text-brand font-bold flex items-center group-hover:underline">
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
