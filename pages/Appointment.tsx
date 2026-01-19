
import React, { useState } from 'react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center container mx-auto px-4 py-20">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg border border-brand/10">
          <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-3xl font-bold text-brand mb-4">Request Received!</h2>
          <p className="text-gray-600 mb-8">Thank you for choosing us. We will contact you within 24 hours to confirm your appointment details.</p>
          <button onClick={() => setSubmitted(false)} className="text-brand font-bold underline">Submit another request</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand p-8 text-white text-center">
            <h1 className="text-3xl font-bold">Book an Appointment</h1>
            <p className="mt-2 opacity-80">Tell us about your pet and preferred timing.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Your Name *</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Email Address *</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Phone Number *</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none" placeholder="(555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Pet's Name *</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none" placeholder="Buddy" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Pet Species *</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none">
                  <option value="">Select...</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Exotic/Small Animal</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Reason for Visit *</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none">
                  <option value="">Select...</option>
                  <option>Wellness Exam</option>
                  <option>Sick Pet / Injury</option>
                  <option>Vaccinations</option>
                  <option>Surgery Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Preferred Date & Time Information</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 h-32 focus:ring-2 focus:ring-brand focus:border-transparent transition outline-none" placeholder="Please let us know your preferred days and times..."></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition shadow-lg">
                Submit Request
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Note: This is a request, not a confirmed appointment. We will contact you to finalize.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
