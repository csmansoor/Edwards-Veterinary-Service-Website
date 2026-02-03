import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // 👈 Added Helmet Import
import emailjs from '@emailjs/browser';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  
  const [formType, setFormType] = useState<string>('General Appointment');
  const [petSpecies, setPetSpecies] = useState<string>('');
  
  const form = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

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
    window.scrollTo(0, 0);
  }, []);

  // Detect which form button was clicked on the Forms page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
        if(type === 'surgery') setFormType('Surgery Consent');
        else if(type === 'prescription') setFormType('Prescription Refill');
        else if(type === 'new-client') setFormType('New Client Registration');
        else setFormType('General Appointment');
    }
  }, [location]);

  // --- SUBMIT HANDLER ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setStatus('sending');

    // 1. Convert Medications Array to a single string for the email
    const medsString = medications
      .filter(m => m.name) // Only include rows with a name
      .map(m => `- ${m.name} (Dose: ${m.dosage}, Freq: ${m.freq}, Dur: ${m.dur})`)
      .join('\n');

    // 2. Create hidden inputs to force this data into the email
    
    // Medications
    const existingMedsInput = form.current.querySelector('input[name="medications_list"]');
    if (existingMedsInput) existingMedsInput.remove();
    const medsInput = document.createElement('input');
    medsInput.type = 'hidden';
    medsInput.name = 'medications_list';
    medsInput.value = medsString || 'None';
    form.current.appendChild(medsInput);

    // Form Type (e.g., Surgery Consent)
    const existingTypeInput = form.current.querySelector('input[name="form_type"]');
    if (existingTypeInput) existingTypeInput.remove();
    const typeInput = document.createElement('input');
    typeInput.type = 'hidden';
    typeInput.name = 'form_type';
    typeInput.value = formType;
    form.current.appendChild(typeInput);

    // --- KEYS ---
    const SERVICE_ID = 'service_2oxre08';
    const TEMPLATE_ID = 'template_0q6sdeh'; // Your Master Template ID
    const PUBLIC_KEY = 'wlh8iAtcVqHPFFMf1';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setStatus('idle');
        window.scrollTo(0, 0);
      }, (error) => {
        console.error('FAILED...', error.text);
        setStatus('error');
      });
  };

  if (submitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center container mx-auto px-4 py-20">
        {/* CHANGE: Border color to #008000 */}
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg border border-[#008000]/10">
          {/* CHANGE: Icon bg to #008000 */}
          <div className="w-20 h-20 bg-[#008000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          {/* CHANGE: Text color to #008000 */}
          <h2 className="text-3xl font-bold text-[#008000] mb-4">Request Sent!</h2>
          <p className="text-gray-600 mb-8">Thank you. We have received your {formType}. Our team will review it and contact you shortly.</p>
          {/* CHANGE: Text color to #008000 */}
          <button onClick={() => {setSubmitted(false); navigate('/');}} className="text-[#008000] font-bold underline">Back to Home</button>
        </div>
      </div>
    );
  }

  // --- FIXED: This is now a simple render function, NOT a component ---
  const renderMedicationTable = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-bold text-gray-700 uppercase">Current Medications</label>
        {/* CHANGE: Button bg to #008000 */}
        <button type="button" onClick={addMedication} className="bg-[#008000] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-black transition-all">+ Add</button>
      </div>
      <div className="overflow-x-auto bg-gray-50 p-4 rounded-2xl border border-gray-100">
        {medications.map((med, index) => (
          <div key={index} className="flex gap-2 mb-2 min-w-[500px]">
            <input type="text" value={med.name} onChange={(e) => handleMedChange(index, 'name', e.target.value)} className="flex-1 p-2 border rounded" placeholder="Name" />
            <input type="text" value={med.dosage} onChange={(e) => handleMedChange(index, 'dosage', e.target.value)} className="w-20 p-2 border rounded" placeholder="Dose" />
            <input type="text" value={med.freq} onChange={(e) => handleMedChange(index, 'freq', e.target.value)} className="w-20 p-2 border rounded" placeholder="Freq" />
            <input type="text" value={med.dur} onChange={(e) => handleMedChange(index, 'dur', e.target.value)} className="w-20 p-2 border rounded" placeholder="Dur" />
            {index > 0 && <button type="button" onClick={() => removeMedication(index)} className="text-red-500 font-bold px-2">✕</button>}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-10 md:py-20">
      
      <Helmet>
        <title>Book Veterinary Appointment | Edwards Veterinary Services</title>
        <meta name="description" content="Book a vet appointment, request prescription refills, or submit surgery consent forms online. Fast and secure scheduling for Tillsonburg pets." />
        <link rel="canonical" href="https://gotec.ca/appointment" />
      </Helmet>
      

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* CHANGE: Header bg to #008000 */}
          <div className="bg-[#008000] p-8 text-white relative">
            <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl text-xs font-bold md:left-8">
              ← BACK
            </button>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{formType}</h1>
              <p className="mt-2 opacity-90 italic text-sm">Please complete all mandatory fields marked with *</p>
            </div>
          </div>
          
          <form ref={form} onSubmit={handleSubmit} className="p-6 md:p-12 space-y-8">
            
            {/* 1. BASIC INFO (Always Visible) */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2">1. Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold text-sm">Owner Full Name *</label>
                  <input required name="owner_name" type="text" className="w-full px-4 py-3 rounded-xl border" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm">Email Address *</label>
                  <input required name="owner_email" type="email" className="w-full px-4 py-3 rounded-xl border" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm">Phone Number *</label>
                  <input required name="owner_phone" type="tel" className="w-full px-4 py-3 rounded-xl border" placeholder="(519) ..." />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm">Pet Name *</label>
                  <input required name="pet_name" type="text" className="w-full px-4 py-3 rounded-xl border" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm">Pet Species *</label>
                  <select required name="pet_species" value={petSpecies} onChange={(e) => setPetSpecies(e.target.value)} className="w-full px-4 py-3 rounded-xl border">
                    <option value="">Select...</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm">Reason for Visit *</label>
                  <input required name="visit_reason" type="text" className="w-full px-4 py-3 rounded-xl border" placeholder="e.g. Checkup" />
                </div>
              </div>

              {/* APPOINTMENT PREFERENCES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-2xl border">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-500">Preferred Day</label>
                    <input name="pref_day" type="text" placeholder="e.g. Monday" className="w-full p-3 rounded-lg border" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-500">Preferred Date</label>
                    <input name="pref_date" type="date" className="w-full p-3 rounded-lg border" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-500">Preferred Time</label>
                    <input name="pref_time" type="time" className="w-full p-3 rounded-lg border" />
                </div>
              </div>
            </section>

            {/* 2. PRESCRIPTION SECTION */}
            {formType === 'Prescription Refill' && (
              <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-blue-600 border-b pb-2">2. Prescription Details</h2>
                <div className="space-y-2">
                  <label className="font-bold text-sm">Pet Weight *</label>
                  <input required name="pet_weight" type="text" className="w-full px-4 py-3 rounded-xl border" placeholder="e.g. 25 lbs" />
                </div>
                
                {renderMedicationTable()}

                <div className="space-y-2">
                  <label className="font-bold text-sm">Special Instructions</label>
                  <textarea name="special_instructions" className="w-full px-4 py-3 rounded-xl border h-24"></textarea>
                </div>
              </section>
            )}

            {/* 3. SURGERY SECTION */}
            {formType === 'Surgery Consent' && (
              <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-bold text-red-600 border-b pb-2">2. Surgical History</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-bold text-sm">Pet Breed *</label>
                        <input required name="pet_breed" type="text" className="w-full px-4 py-3 rounded-xl border" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-bold text-sm">Pet Sex *</label>
                        <select required name="pet_sex" className="w-full px-4 py-3 rounded-xl border">
                            <option value="">Select...</option>
                            <option>Male - Neutered</option>
                            <option>Male - Intact</option>
                            <option>Female - Spayed</option>
                            <option>Female - Intact</option>
                        </select>
                    </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <label className="block text-sm font-bold text-orange-800 mb-2">Last time pet ate? *</label>
                    <div className="flex gap-4">
                        <input required name="last_ate_date" type="date" className="flex-1 p-3 rounded-lg border" />
                        <input required name="last_ate_time" type="time" className="flex-1 p-3 rounded-lg border" />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="font-bold text-sm">Current Medical Conditions?</label>
                    <textarea name="medical_conditions" className="w-full p-4 rounded-xl border h-20"></textarea>
                    {renderMedicationTable()}
                </div>

                {/* CHECKBOXES & RADIOS */}
                <div className="bg-gray-50 p-6 rounded-2xl border space-y-6">
                    {petSpecies === 'Dog' && (
                        <div className="space-y-4">
                            {/* CHANGE: Text color to #008000 */}
                            <h3 className="font-bold text-[#008000]">For Dogs</h3>
                            <label className="flex items-center gap-3"><input type="checkbox" name="rabies" value="Yes" /> <span>Rabies - $15.95</span></label>
                            <label className="flex items-center gap-3"><input type="checkbox" name="dapp" value="Yes" /> <span>DAPP - $33.75</span></label>
                            
                            <label className="block text-sm font-bold mt-2">Heartworm test ($39.95)?</label>
                            <div className="flex gap-4">
                                <label><input type="radio" name="heartworm" value="Yes" /> Yes</label>
                                <label><input type="radio" name="heartworm" value="No" /> No</label>
                            </div>

                            <label className="block text-sm font-bold mt-2">Extract baby teeth?</label>
                            <div className="flex gap-4">
                                <label><input type="radio" name="teeth" value="Yes" /> Yes</label>
                                <label><input type="radio" name="teeth" value="No" /> No</label>
                            </div>
                        </div>
                    )}
                    
                    {petSpecies === 'Cat' && (
                        <div className="space-y-4">
                            {/* CHANGE: Text color to #008000 */}
                            <h3 className="font-bold text-[#008000]">For Cats</h3>
                            <label className="block text-sm font-bold">Feline Leukemia/FIV test?</label>
                            <div className="flex gap-4">
                                <label><input type="radio" name="felv_fiv" value="Yes" /> Yes</label>
                                <label><input type="radio" name="felv_fiv" value="No" /> No</label>
                            </div>
                            <label className="block text-sm font-bold mt-2">Ear Tipping?</label>
                            <div className="flex gap-4">
                                <label><input type="radio" name="ear_tip" value="Yes" /> Yes</label>
                                <label><input type="radio" name="ear_tip" value="No" /> No</label>
                            </div>
                        </div>
                    )}

                    <div className="pt-4 border-t space-y-4">
                        <label className="block text-sm font-bold">Elizabeth collar (Cone)?</label>
                        <div className="flex gap-4">
                            <label><input type="radio" name="cone" value="Yes" /> Yes</label>
                            <label><input type="radio" name="cone" value="No" /> No</label>
                        </div>
                        <label className="block text-sm font-bold mt-2">Microchip?</label>
                        <div className="flex gap-4">
                            <label><input type="radio" name="microchip" value="Yes" /> Yes</label>
                            <label><input type="radio" name="microchip" value="No" /> No</label>
                        </div>
                        <label className="block text-sm font-bold mt-2 text-blue-900">Pre-anesthetic Bloodwork?</label>
                        <div className="flex gap-4">
                            <label><input type="radio" name="bloodwork" value="Yes" /> Yes</label>
                            <label><input type="radio" name="bloodwork" value="No" /> No</label>
                        </div>
                    </div>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                    <h3 className="text-lg font-black text-red-700 uppercase mb-2">Emergency Protocol (CPR)</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-3">
                            <input type="radio" name="cpr_choice" value="Perform CPR" required />
                            <span className="font-bold">I request CPR (Resuscitation)</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="radio" name="cpr_choice" value="Do Not Resuscitate" required />
                            <span className="font-bold">I DO NOT want CPR (DNR)</span>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-bold text-sm">Today's Date *</label>
                        <input required name="sign_date" type="date" className="w-full p-3 border rounded-xl" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-2">
                        <label className="font-bold text-sm">Digital Signature *</label>
                        <input required name="signature" type="text" placeholder="Type Full Name" className="w-full p-3 border rounded-xl italic font-serif" />
                    </div>
                </div>
              </section>
            )}

            {/* CHANGE: Button bg to #008000 */}
            <button disabled={status === 'sending'} type="submit" className="w-full bg-[#008000] text-white py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl disabled:opacity-50">
                {status === 'sending' ? 'Sending Form...' : 'Submit Secure Form'}
            </button>

          </form>
        </div>
      </div>
    </div>
  ); 
};

export default Appointment;