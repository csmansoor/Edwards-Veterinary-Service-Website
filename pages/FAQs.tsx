import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQS_DATA = [
  { q: "What should I bring to my first visit?", a: "Please bring any previous medical records, vaccination history, and a list of any medications or diets your pet is currently on. Dogs should be on a leash and cats in a secure carrier." },
  { q: "Do I need an appointment for grooming?", a: "Yes, our grooming services are by appointment only to ensure we can give each pet the time and attention they deserve." },
  { q: "What payment methods do you accept?", a: "We accept Cash, Debit, Visa, Mastercard, American Express, and offer flexible financing through Humm." },
  { q: "What are your emergency protocols?", a: "During clinic hours, we handle emergencies as they arrive. After hours, we recommend contacting the nearest 24/7 emergency veterinary hospital." }
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white pb-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQs | Edwards Veterinary Services</title>
        <meta name="description" content="Find answers to common questions about Edwards Veterinary Services." />
      </Helmet>

      {/* BANNER */}
      <section className="bg-[#008000] py-12 md:py-24 text-white text-center px-4">
        <h1 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic drop-shadow-lg leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-2xl text-green-50 font-medium opacity-95 max-w-4xl mx-auto leading-relaxed">
          Everything you need to know about our clinic and services.
        </p>
      </section>

      <div className="container mx-auto px-4 mt-10 md:mt-20 max-w-4xl">
        <div className="space-y-4 md:space-y-5">
          {FAQS_DATA.map((faq, i) => (
            <div key={i} className="border-2 border-gray-100 rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left hover:bg-gray-50 transition"
              >
                {/* Desktop Font  */}
                <span className="font-bold md:font-extrabold text-lg md:text-2xl text-gray-900 leading-snug pr-4">
                  {faq.q}
                </span>
                
                <svg 
                  className={`w-6 h-6 md:w-8 md:h-8 text-[#008000] flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openIndex === i && (
                <div className="p-5 md:p-8 pt-0 text-gray-700 bg-gray-50/50">
                  {/* Desktop Answer */}
                  <p className="text-sm md:text-xl leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center px-4">
          <p className="text-lg md:text-xl text-gray-500 mb-6 font-medium">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-block text-[#008000] font-black border-2 border-[#008000] px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-xl hover:bg-[#008000] hover:text-white transition-all uppercase tracking-widest shadow-md"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;