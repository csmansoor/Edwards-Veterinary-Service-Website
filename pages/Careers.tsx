import React from 'react';
import { Helmet } from 'react-helmet-async'; 

const Careers: React.FC = () => {
  const openings = [
    { title: 'Registered Veterinary Technician', type: 'Full-Time', description: 'Seeking a compassionate RVT to join our surgical and wellness team.' },
    { title: 'Veterinary Receptionist', type: 'Part-Time', description: 'The first point of contact for our valued clients. Excellent communication skills required.' }
  ];

  return (
    <div className="bg-white pb-20">
      
      <Helmet>
        <title>Careers & Veterinary Jobs in Tillsonburg | Edwards Veterinary Services</title>
        <meta name="description" content="Join our team! Edwards Veterinary Services is hiring Registered Veterinary Technicians and Receptionists in Tillsonburg, ON. View current openings." />
        <link rel="canonical" href="https://gotec.ca/careers" />
      </Helmet>
      

      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-brand-light">Build your career in compassionate veterinary medicine.</p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold text-brand mb-8">Current Openings</h2>
        <div className="space-y-6">
          {openings.map((job, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs font-bold text-brand bg-brand/10 px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">{job.type}</span>
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </div>
              <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-dark transition shadow-md whitespace-nowrap">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand text-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
          <p className="text-lg text-brand-light mb-8 leading-relaxed">
            We are always looking for passionate animal lovers to join our family. Even if we don't have a specific opening that fits your skills right now, feel free to send us your resume!
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-4 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="font-bold">Email Resumes to:</p>
                <p className="text-brand-light">frontdesk.edwardsvs@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;