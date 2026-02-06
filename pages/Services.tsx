import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import { SERVICES } from '../constants';

// @ts-ignore
import servicesBannerImg from '../images/service-banner.jpg'; 

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Veterinary Services & Surgery | Edwards Veterinary Services</title>
        <meta name="description" content="Comprehensive pet care in Tillsonburg." />
        <link rel="canonical" href="https://gotec.ca/services" />
      </Helmet>

      {/* HEADER: */}
      <section 
        className="relative py-32 md:py-60 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url(${servicesBannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/*  dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-8xl font-black mb-6 uppercase tracking-tighter italic drop-shadow-2xl leading-none">
            Our Services
          </h1>
          <div className="h-2 w-24 bg-yellow-400 mx-auto mb-10 shadow-lg" />
          <p className="text-lg md:text-3xl font-bold max-w-5xl mx-auto px-4 leading-relaxed drop-shadow-lg">
            Providing compassionate, high-standard veterinary care to the Tillsonburg community. 
            From routine wellness to emergency support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service) => (
            <Link 
              to={`/services/${service.slug}`} 
              key={service.id} 
              className="group bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full transform hover:-translate-y-2"
            >
              <div className="h-64 md:h-72 w-full overflow-hidden relative">
                <img 
                  src={service.mainImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-yellow-400 text-yellow-950 text-xs md:text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {service.id.replace('-', ' ')}
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-[#008000] leading-tight uppercase tracking-tight group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-[#008000] font-black uppercase tracking-wider text-base">
                  <span className="border-b-4 border-transparent group-hover:border-yellow-400 transition-all pb-1">
                    Explore Service
                  </span>
                  <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Emergency Red Banner */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter leading-tight">
              24-Hour Emergency Veterinary Care
            </h2>
            <p className="text-xl mb-10 leading-relaxed">
              We provide 24/7 emergency veterinary care for our existing clients. 
              If your pet is experiencing an emergency, please call us immediately for assistance.
              <br /><br />
              New clients are welcome to contact us during regular business hours to join 
              our waitlist or inquire about becoming a patient at our Tillsonburg clinic.
            </p>
            <a href="tel:5196882123" className="inline-block bg-white text-red-600 px-10 py-4 font-black text-xl uppercase tracking-widest hover:bg-gray-100 transition shadow-xl transform hover:scale-105">
              Call (519) 688-2123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;