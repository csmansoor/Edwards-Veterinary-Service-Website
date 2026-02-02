
import React from 'react';
import { Link } from 'react-router-dom';

const Payments: React.FC = () => {
  const paymentMethods = [
    { 
      name: 'Cash', 
      detail: 'Standard cash payments are accepted at the front desk.', 
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      name: 'Credit Cards', 
      detail: 'We accept all major credit cards including Visa, Mastercard, and American Express.', 
      icon: (
        <div className="flex space-x-2">
           <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
           <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        </div>
      )
    },
    { 
      name: 'Humm', 
      detail: 'Buy now and pay later with Humm. Spread the cost of your pet\'s care over easy installments.', 
      icon: (
        <div className="flex items-center justify-center bg-[#FF5000] rounded-lg px-4 py-2 text-white font-black italic text-2xl tracking-tighter">
          humm
        </div>
      ),
      link: "https://www.shophumm.com/"
    }
  ];

  return (
    <div className="bg-white pb-20">
      <section className="bg-brand py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Payment Options</h1>
          <p className="text-xl text-brand-light">Flexible ways to pay for your pet's health and wellness.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand mb-6">Accepted Methods</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            To ensure we can provide the best medical attention to all patients, 
            payment is required at the time services are rendered.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {paymentMethods.map((method) => (
            <div 
              key={method.name} 
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className="mb-8 transform group-hover:scale-110 transition duration-300 h-16 flex items-center">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand mb-4">{method.name}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">{method.detail}</p>
              {method.link && (
                <a 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto text-brand font-bold flex items-center hover:underline"
                >
                  Learn about Humm
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-brand rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-brand-light text-lg">
                We provide detailed estimates for all surgeries and hospitalized treatments. 
                If you have any questions regarding costs, please don't hesitate to ask 
                our team before your appointment begins.
              </p>
            </div>
            <Link to="/contact" className="bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg whitespace-nowrap">
              Talk to Our Team
            </Link>
          </div>
          
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
