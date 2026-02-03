import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // 👈 Added Helmet Import
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
        <title>{`${service.title} | Edwards Veterinary Services`}</title>
        <meta name="description" content={`Edwards Veterinary Services offers professional ${service.title.toLowerCase()} in Tillsonburg. ${service.description}`} />
        <link rel="canonical" href={`https://gotec.ca/services/${service.slug}`} />
      </Helmet>
      

      {/* HEADER SECTION */}
      {/* CHANGE: Background to #008000 */}
      <section className="bg-[#008000] py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="text-7xl mb-6">{service.icon}</div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {service.title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* SECTION 1: Intro */}
        <div className="text-center mb-12">
          {/* CHANGE: Text color to #008000 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#008000] uppercase mb-2">
            {service.section1Heading}
          </h2>
          <h3 className="text-xl font-semibold text-gray-500 mb-6">
            {service.section1Subheading}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {service.section1Description}
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="mb-20">
          <img 
            src={service.mainImage} 
            className="w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-gray-50" 
            alt={service.title} 
          />
        </div>

        {/* SECTION 2: What to Expect & Yellow Banners */}
        <div className="mb-20">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{service.section2Heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl">{service.section2Subheading}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.yellowBanners.map((banner, index) => (
              <div key={index} className="bg-yellow-50 p-8 rounded-2xl border-l-[10px] border-yellow-400 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-xl text-yellow-900 mb-2">{banner.title}</h4>
                <p className="text-yellow-800 leading-relaxed">{banner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE 2 */}
        <div className="mb-20">
          <img 
            src={service.secondaryImage} 
            className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl" 
            alt="Pet Care Detail" 
          />
        </div>

        {/* SECTION 3: Service sectiom(Light Gray Box) */}
        <div className="bg-gray-50 p-10 md:p-14 rounded-[3rem] mb-20 border border-gray-100">
          {/* CHANGE: Text color to #008000 */}
          <h2 className="text-3xl font-bold text-[#008000] mb-4">{service.section3Heading}</h2>
          <p className="text-gray-600 mb-8 font-medium italic">{service.section3Subheading}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            {service.section3List.map((item, i) => (
              <li key={i} className="flex items-center text-gray-800 text-lg">
                <span className="text-yellow-500 mr-3 text-2xl">✔</span> {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            {service.section3Description}
          </p>
        </div>

        {/* IMAGE 3 */}
        <div className="mb-20">
          <img 
            src={service.thirdImage} 
            className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl" 
            alt="Clinic Facility" 
          />
        </div>

        {/* SECTION 4: Why It Matters (Bullets) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.section4Heading}</h2>
          <p className="text-lg text-gray-600 mb-10">{service.section4Description}</p>
          <div className="space-y-4">
            {service.section4Bullets.map((bullet, i) => (
              // CHANGE: Hover border color to #008000
              <div key={i} className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#008000] transition-colors">
                {/* CHANGE: Icon background to #008000 */}
                <div className="bg-[#008000] text-white rounded-full p-1.5 mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-lg font-semibold leading-snug">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TRUSTED TEAM BANNER (Yellow) */}
        <div className="bg-yellow-400 p-10 md:p-16 rounded-[3rem] text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-black text-yellow-900 uppercase mb-6 tracking-tight">
            Trusted Local Veterinary Team
          </h2>
          <p className="text-xl text-yellow-950 font-bold leading-relaxed max-w-4xl mx-auto">
            At Edwards Veterinary Services, your pet’s health is in the hands of experienced, compassionate professionals. 
            Our doctors — Dr. Paul Edwards, Dr. Haris Aziz, and Dr. Shahid Zaman — are committed to providing high-quality 
            preventive care tailored to each patient’s needs. 
            <br /><br />
            As a family-owned clinic in the heart of Tillsonburg, we take pride in building lasting relationships with the pets and families we serve.
          </p>
        </div>

        {/* FOOTER & BACK BUTTON */}
        <div className="text-center space-y-10">
          {/* CHANGE: Background to #008000 */}
          <Link 
            to="/appointment" 
            className="bg-[#008000] text-white px-16 py-6 rounded-full font-extrabold text-2xl hover:bg-black transition-all shadow-2xl inline-block uppercase tracking-widest transform hover:scale-105"
          >
            {service.ctaText}
          </Link>
          
          <div className="pt-4">
            {/* CHANGE: Text color to #008000 */}
            <Link to="/services" className="text-[#008000] font-black text-lg flex items-center justify-center hover:opacity-70 transition group">
              <svg className="w-6 h-6 mr-3 transition-transform group-hover:translate-x-[-10px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
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