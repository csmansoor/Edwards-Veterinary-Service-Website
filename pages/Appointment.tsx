import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState<string>('');
  const [petSpecies, setPetSpecies] = useState<string>('');
  const location = useLocation();

  // --- DYNAMIC MEDICATION LOGIC ---
  const [medications, setMedications] = useState([{ name: '', dosage: '', freq: '', dur: '' }]);

  const addMedication = () => {
    setMedications([...medications, { name: '', dosage: '', freq: '', dur: '' }]);
  };

  const removeMedication = (index: number) => {
    const newMeds = medications.filter((_, i) => i !== index);
    setMedications(newMeds);
  };

  const handleMedChange = (index: number, field: string, value: string) => {
    const newMeds = [...medications];
    (newMeds[index] as any)[field] = value;
    setMedications(newMeds);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) setFormType(type);
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center container mx-auto px-4 py-20">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg border border-[#2a7f62]/10">
          <div className="w-20 h-20 bg-[#2a7f62]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#2a7f62]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2a7f62] mb-4">Form Submitted!</h2>
          <p className="text-gray-600 mb-8">Thank you. Our medical team will review your information and contact you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="text-[#2a7f62] font-bold underline">Submit another request</button>
        </div>
      </div>
    );
  }

  // REUSABLE MEDICATION TABLE COMPONENT
  const MedicationTable = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-bold text-gray-700 uppercase">Current Medications</label>
        <button 
          type="button" 
          onClick={addMedication} 
          className="bg-[#2a7f62] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-black transition-all"
        >
          + Add Medication
        </button>
      </div>
      <div className="overflow-x-auto bg-gray-50 p-4 rounded-2xl border border-gray-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left font-bold text-gray-600 border-b">
              <th className="pb-2">Name</th>
              <th className="pb-2 px-1">Dosage</th>
              <th className="pb-2 px-1">Freq.</th>
              <th className="pb-2">Dur.</th>
              <th className="pb-2 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med, index) => (
              <tr key={index} className="animate-in fade-in slide-in-from-left-2 duration-300">
                <td className="py-2"><input type="text" value={med.name} onChange={(e) => handleMedChange(index, 'name', e.target.value)} className="w-full p-2 bg-white border rounded shadow-sm" placeholder="Name" /></td>
                <td className="py-2 px-1"><input type="text" value={med.dosage} onChange={(e) => handleMedChange(index, 'dosage', e.target.value)} className="w-full p-2 bg-white border rounded shadow-sm" placeholder="5mg" /></td>
                <td className="py-2 px-1"><input type="text" value={med.freq} onChange={(e) => handleMedChange(index, 'freq', e.target.value)} className="w-full p-2 bg-white border rounded shadow-sm" placeholder="2x/day" /></td>
                <td className="py-2 px-1"><input type="text" value={med.dur} onChange={(e) => handleMedChange(index, 'dur', e.target.value)} className="w-full p-2 bg-white border rounded shadow-sm" placeholder="30d" /></td>
                <td className="py-2 text-center">
                  {medications.length > 1 && (
                    <button type="button" onClick={() => removeMedication(index)} className="text-red-400 hover:text-red-600 font-bold">✕</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-10 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          
          <div className="bg-[#2a7f62] p-8 text-white text-center">
            <h1 className="text-3xl font-bold uppercase tracking-tight">
              {formType === 'surgery' ? 'Surgery Consent Form' : 
               formType === 'prescription' ? 'Prescription Refill Request' : 
               'Client & Patient Information'}
            </h1>
            <p className="mt-2 opacity-90 italic">Please complete all mandatory fields marked with *</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-8">
            
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2">1. Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Owner Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#2a7f62]" placeholder="First and Last Name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Email Address *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#2a7f62]" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Phone Number *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#2a7f62]" placeholder="(519) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Pet's Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#2a7f62]" placeholder="Buddy" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Pet Species *</label>
                  <select 
                    required 
                    value={petSpecies}
                    onChange={(e) => setPetSpecies(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#2a7f62]"
                  >
                    <option value="">Select...</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Reason for Visit *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#2a7f62]" placeholder="e.g. Annual Checkup" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-gray-500">Preferred Day *</label>
                  <input required type="text" placeholder="e.g. Monday" className="w-full p-3 rounded-lg border border-gray-200" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-gray-500">Preferred Date *</label>
                  <input required type="date" className="w-full p-3 rounded-lg border border-gray-200" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-gray-500">Preferred Time *</label>
                  <input required type="time" className="w-full p-3 rounded-lg border border-gray-200" />
                </div>
              </div>
            </section>

            {formType === 'prescription' && (
              <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-blue-600 border-b pb-2">2. Prescription Details</h2>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Pet Weight *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="e.g. 25 lbs" />
                </div>
                
                {/* DYNAMIC MEDICATION TABLE */}
                <MedicationTable />

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Special Instructions</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 h-24" placeholder="Any specific notes for your pet's medication?"></textarea>
                </div>
              </section>
            )}

            {formType === 'surgery' && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-red-600 border-b pb-2">2. Surgical & Medical History</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Pet Breed *</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Pet Sex *</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-gray-200">
                      <option value="">Select...</option>
                      <option>Male - Neutered</option>
                      <option>Male - Intact</option>
                      <option>Female - Spayed</option>
                      <option>Female - Intact</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                   <label className="block text-sm font-bold text-orange-800 mb-2">When was the last time your pet ate? *</label>
                   <div className="flex gap-4">
                     <input required type="date" className="flex-1 p-3 rounded-lg border border-orange-200" />
                     <input required type="time" className="flex-1 p-3 rounded-lg border border-orange-200" />
                   </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-gray-700">Does your pet have current medical conditions? If yes, describe: *</label>
                  <textarea required className="w-full p-4 rounded-xl border border-gray-200 h-20"></textarea>
                  
                  {/* DYNAMIC MEDICATION TABLE FOR SURGERY */}
                  <MedicationTable />
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6">
                  {petSpecies === 'Dog' && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#2a7f62]">For Dogs (Vaccines Required)</h3>
                      <p className="text-xs text-gray-500 italic">Rabies and DAPP vaccines are REQUIRED with proof.</p>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3"><input type="checkbox" /> <span>Rabies - $15.95</span></label>
                        <label className="flex items-center gap-3"><input type="checkbox" /> <span>DAPP - $33.75</span></label>
                        <hr />
                        <label className="block text-sm font-bold">Heartworm test ($39.95)?</label>
                        <div className="flex gap-4"><label><input type="radio" name="hw" /> Yes</label><label><input type="radio" name="hw" /> No</label></div>
                        <label className="block text-sm font-bold mt-4">Extract deciduous (baby) teeth? ($13.00 - $50.00)</label>
                        <div className="flex gap-4"><label><input type="radio" name="teeth" /> Yes</label><label><input type="radio" name="teeth" /> No</label></div>
                      </div>
                    </div>
                  )}

                  {petSpecies === 'Cat' && (
                    <div className="space-y-4">
                      <h3 className="font-bold text-[#2a7f62]">For Cats</h3>
                      <label className="block text-sm font-bold">Feline Leukemia/FIV test ($50.25)?</label>
                      <div className="flex gap-4"><label><input type="radio" name="cat_test" /> Yes</label><label><input type="radio" name="cat_test" /> No</label></div>
                      <p className="text-xs text-gray-500 italic">Rabies required ($15.95), FELV ($29.75), RCCP ($26.50)</p>
                      <label className="block text-sm font-bold">Ear Tipping (Stray/Feral)? (FREE)</label>
                      <div className="flex gap-4"><label><input type="radio" name="tip" /> Yes</label><label><input type="radio" name="tip" /> No</label></div>
                    </div>
                  )}

                  <div className="pt-4 border-t space-y-4">
                    <label className="block text-sm font-bold">Elizabeth collar (Cone) ($23-$40)?</label>
                    <div className="flex gap-4"><label><input type="radio" name="cone" /> Yes</label><label><input type="radio" name="cone" /> No</label></div>
                    <label className="block text-sm font-bold">Insert Microchip today ($50.75)?</label>
                    <div className="flex gap-4"><label><input type="radio" name="chip" /> Yes</label><label><input type="radio" name="chip" /> No</label></div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <label className="block text-sm font-bold text-blue-900">Pre-anesthetic Bloodwork ($98.25)?</label>
                      <p className="text-[10px] mb-2 text-blue-700">(Required for all pets over 5 years of age)</p>
                      <div className="flex gap-4"><label><input type="radio" name="blood" /> Yes</label><label><input type="radio" name="blood" /> No</label></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <h3 className="text-lg font-black text-red-700 uppercase">Emergency Protocol (CPR/DNR)</h3>
                  <p className="text-xs text-red-800 leading-relaxed italic">In the event of unforeseen circumstances should your pet require CPR, costs are between $100-$300.</p>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="cpr" className="mt-1" required />
                      <span className="text-sm font-bold text-gray-800">I request the staff to perform CPR (Resuscitation) on my pet.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="cpr" className="mt-1" required />
                      <span className="text-sm font-bold text-gray-800">I DO NOT want CPR performed on my pet (DNR).</span>
                    </label>
                  </div>
                </div>

                <div className="text-[10px] text-gray-500 bg-white p-6 border rounded-2xl leading-relaxed h-48 overflow-y-scroll">
                  I certify that I am the owner... [Full Legal Text]
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="block text-sm font-bold text-gray-700">Today's Date *</label>
                     <input required type="date" className="w-full p-3 border rounded-xl" defaultValue={new Date().toISOString().split('T')[0]} />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-sm font-bold text-gray-700">Digital Signature *</label>
                     <input required type="text" placeholder="Type Full Name to Sign" className="w-full p-3 border rounded-xl italic font-serif" />
                   </div>
                </div>
              </section>
            )}

            <button type="submit" className="w-full bg-[#2a7f62] text-white py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl transform hover:-translate-y-1">
              Submit Secure Form
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;