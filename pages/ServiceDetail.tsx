
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="bg-white">
      <section className="bg-brand py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-4xl font-bold">{service.title}</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-12" />
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <h2 className="text-3xl font-bold text-brand">What to Expect</h2>
            <p className="text-xl leading-relaxed">{service.longDescription}</p>
            <p>
              At Edwards Veterinary Services, we prioritize your pet's comfort and safety during every procedure. Our staff is trained in low-stress handling techniques and we use the latest medical protocols to ensure the best possible outcomes.
            </p>
          </div>

          <div className="mt-16 p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need to book this service?</h3>
              <p className="text-gray-500">Contact us today to schedule your pet's appointment.</p>
            </div>
            <Link to="/appointment" className="bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition shadow-lg whitespace-nowrap">
              Book Appointment
            </Link>
          </div>

          <div className="mt-12">
            <Link to="/services" className="text-brand font-bold flex items-center hover:translate-x-[-8px] transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
              Back to all services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
