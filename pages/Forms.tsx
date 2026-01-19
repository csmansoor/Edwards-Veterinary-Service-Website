
import React from 'react';
import { Link } from 'react-router-dom';

const Forms: React.FC = () => {
  const formLinks = [
    { title: 'New Client Form', description: 'Fill this out if you are visiting us for the first time.', slug: 'new-client' },
    { title: 'Prescription Refill', description: 'Request a refill for your pet\'s current medication.', slug: 'prescription' },
    { title: 'Surgery Consent', description: 'Digital consent form for scheduled surgical procedures.', slug: 'surgery' }
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Online Forms</h1>
        <p className="text-xl text-brand-light">Save time by completing your paperwork before your visit.</p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formLinks.map((f) => (
            <div key={f.slug} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-brand mb-4">{f.title}</h3>
              <p className="text-gray-600 mb-6">{f.description}</p>
              <Link to={`/appointment`} className="inline-block bg-brand text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-dark transition">
                Open Form
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;
