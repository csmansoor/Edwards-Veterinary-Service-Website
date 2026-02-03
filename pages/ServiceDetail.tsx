import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="bg-white">
      
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${service.title} | Edwards Veterinary Services`}</title>
        <meta name="description" content={`Edwards Veterinary Services offers professional ${service.title.toLowerCase()} in Tillsonburg.`} />
        <link rel="canonical" href={`https://gotec.ca/services/${service.slug}`} />
      </Helmet>
      

      {/* HEADER SECTION - Reduced Padding and Font Size */}
      <section className="bg-[#008000] py-8 md:py-20 text-white text-center">
        <div className="container mx-auto px-4">
          {/* Reduced icon size from 5xl/9xl to 3xl/6xl */}
          <div className="text-3xl md:text-6xl mb-2 md:mb-6">{service.icon}</div>
          {/* Reduced title from 3xl/8xl to 2xl/5xl */}
          <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            {service.title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-24 max-w-7xl">
        {/* SECTION 1: Intro */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-bold text-[#008000] uppercase mb-3">
            {service.section1Heading}
          </h2>
          <h3 className="text-lg md:text-3xl font-semibold text-gray-500 mb-5 md:mb-10">
            {service.section1Subheading}
          </h3>
          <p className="text-base md:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto font-medium">
            {service.section1Description}
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="mb-12 md:mb-28">
          <img 
            src={service.mainImage} 
            className="w-full h-[250px] md:h-[600px] object-cover rounded-2xl md:rounded-[3rem] shadow-xl border-2 md:border-[10px] border-gray-50" 
            alt={service.title} 
          />
        </div>

        {/* SECTION 2: What to Expect */}
        <div className="mb-12 md:mb-28">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">{service.section2Heading}</h2>
            <p className="text-base md:text-2xl text-gray-600 max-w-4xl">{service.section2Subheading}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            {service.yellowBanners.map((banner, index) => (
              <div key={index} className="bg-yellow-50 p-6 md:p-10 rounded-xl md:rounded-[2.5rem] border-l-4 md:border-l-[12px] border-yellow-400 shadow-sm">
                <h4 className="font-bold text-lg md:text-2xl text-yellow-900 mb-2">{banner.title}</h4>
                <p className="text-yellow-800 text-sm md:text-xl leading-relaxed">{banner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Service List Box */}
        <div className="bg-gray-50 p-6 md:p-20 rounded-2xl md:rounded-[4rem] mb-12 md:mb-28 border border-gray-100">
          <h2 className="text-2xl md:text-4xl font-bold text-[#008000] mb-4">{service.section3Heading}</h2>
          <p className="text-base md:text-2xl text-gray-600 mb-6 md:mb-10 font-bold italic">{service.section3Subheading}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-6 gap-x-16">
            {service.section3List.map((item, i) => (
              <li key={i} className="flex items-center text-base md:text-2xl font-semibold text-gray-900">
                <span className="text-yellow-500 mr-2 md:mr-4 text-lg md:text-3xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* SECTION 4: Why It Matters */}
        <div className="mb-12 md:mb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{service.section4Heading}</h2>
          <div className="space-y-3 md:space-y-6">
            {service.section4Bullets.map((bullet, i) => (
              <div key={i} className="flex items-start bg-white p-5 md:p-8 rounded-xl md:rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="bg-[#008000] text-white rounded-full p-1.5 md:p-2.5 mr-4 md:mr-6 mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 text-base md:text-2xl font-bold leading-tight">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="text-center space-y-6 md:space-y-12">
          <Link 
            to="/appointment" 
            className="bg-[#008000] text-white px-6 py-3 md:px-16 md:py-6 rounded-full font-black text-lg md:text-2xl hover:bg-black transition-all shadow-xl inline-block uppercase tracking-widest"
          >
            {service.ctaText}
          </Link>
          
          <div className="pt-4">
            <Link to="/services" className="text-[#008000] font-black text-sm md:text-xl flex items-center justify-center group">
              <svg className="w-4 h-4 md:w-8 md:h-8 mr-2 md:mr-4 transition-transform group-hover:translate-x-[-8px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
              </svg>
              BACK TO ALL SERVICES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;