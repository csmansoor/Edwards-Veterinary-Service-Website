import React, { useState } from 'react';

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
      {/* CHANGE: Background to #008000 */}
      <section className="bg-[#008000] py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        {/* CHANGE: Text to light green/white for contrast */}
        <p className="text-xl text-green-50">Everything you need to know about our clinic.</p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-3xl">
        <div className="space-y-4">
          {FAQS_DATA.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
              >
                <span className="font-bold text-lg text-gray-900">{faq.q}</span>
                {/* CHANGE: Icon text to #008000 */}
                <svg 
                  className={`w-6 h-6 text-[#008000] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-gray-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Still have questions?</p>
          {/* CHANGE: Text, Border, and Hover bg to #008000 */}
          <a href="/contact" className="text-[#008000] font-bold border-2 border-[#008000] px-10 py-3 rounded-full hover:bg-[#008000] hover:text-white transition">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;