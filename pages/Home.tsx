import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 

// @ts-ignore
import wellnessExamImg from '../images/wellness-exam.webp';
// @ts-ignore
import puppyVaccineImg from '../images/puppy.webp';
// @ts-ignore
import dentistryImg from '../images/dentistry.webp';
// @ts-ignore
import diagnosticsImg from '../images/xray.webp';
// @ts-ignore
import mobileServicesImg from '../images/mobile.webp';
// @ts-ignore
import buildingExteriorImg from '../images/building.webp';
// @ts-ignore
import bannerlogoImg from '../images/mark.webp';
// @ts-ignore
import heroVideo from '../images/heroVideo.mp4';

const Home: React.FC = () => {
  // Slider State for Testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const serviceList = [
    {
      title: "Pet Wellness & Preventive Care",
      desc: "Comprehensive wellness exams to ensure your pets live a long, happy, and healthy life.",
      img: wellnessExamImg
    },
    {
      title: "Vaccinations for Dogs & Cats",
      desc: "Customized immunization plans to protect your furry family members from common diseases.",
      img: puppyVaccineImg
    },
    {
      title: "Pet Dentistry & Dental X-Rays",
      desc: "Complete oral health services including professional cleaning and digital dental imaging.",
      img: dentistryImg
    },
    {
      title: "In-House Diagnostics & Radiology",
      desc: "State-of-the-art digital X-rays and diagnostics for fast and accurate medical results.",
      img: diagnosticsImg
    },
    {
      title: "Mobile & At-Home Services",
      desc: "Bringing the vet to you. Stress-free veterinary care in the comfort of your own home.",
      img: mobileServicesImg
    }
  ];

  const testimonials = [
    {
      text: "The staff are very friendly and helpful, and Dr. Paul always takes time to provide details that help make any decisions. My experience with an emergency was amazing.",
      author: "Susan R."
    },
    {
      text: "Been coming here for a number of years. The doctors are very patient and always take the time to explain things. I also appreciate the 24-hour care.",
      author: "Princess J."
    },
    {
      text: "Edward's Vet is amazing and so incredibly helpful and kind and has treated our Izzy with the utmost care. I couldn't ask for a better experience.",
      author: "Katie S."
    },
    {
      text: "Love the vets here. So patient and kind with my three doggies. Reception is always informative. 24-hour emergency care is so important!",
      author: "Laura D."
    }
  ];

  const infiniteServices = [...serviceList, ...serviceList];

  // Auto-slide for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="overflow-x-hidden">
      
      <Helmet>
        <title>Veterinarian in Tillsonburg | Edwards Veterinary Services</title>
        <meta name="description" content="Compassionate veterinary care in Tillsonburg, ON. We offer pet wellness exams, surgery, dentistry, and emergency care for dogs, cats, and exotic pets." />
        <meta name="keywords" content="Veterinarian Tillsonburg, Vet Clinic, Pet Surgery, Dog Grooming, Cat Dentist, Emergency Vet Ontario" />
        <link rel="canonical" href="https://gotec.ca/" />

        {/* Local Business Schema (Google Maps Helper) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Edwards Veterinary Services",
            "image": "https://gotec.ca//assets/mark.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "527 Broadway Street",
              "addressLocality": "Tillsonburg",
              "addressRegion": "ON",
              "postalCode": "N4G 3S8",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.8646,
              "longitude": -80.7297
            },
            "telephone": "+15196882123",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
            "priceRange": "$$"
          }
        `}
        </script>
      </Helmet>
      

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover { animation-play-state: paused; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .signature-font {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.5]">
            
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className="flex flex-col items-center justify-center">
            <img src={bannerlogoImg} alt="Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-2 opacity-90" />
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">EDWARDS</h1>
            <p className="text-3xl md:text-5xl font-serif italic mb-10 tracking-wide">Veterinary Services</p>
            <Link to="/appointment" className="bg-[#2a7f62] text-white px-10 py-4 font-bold text-xl uppercase tracking-widest hover:bg-green-700 transition shadow-lg transform hover:scale-105">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img src={buildingExteriorImg} alt="Building" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a7f62] mb-6 leading-tight">Your Local, Community-Rooted Veterinarian in Tillsonburg, ON</h2>
            <div className="text-lg text-gray-600 mb-8 space-y-4">
              <p>For more than three decades, Edwards Veterinary Services has been proud to serve pets across Tillsonburg and surrounding areas.</p>
              <p>As a privately owned clinic, we bring together experienced care and a genuine commitment to supporting the families who love them.</p>
            </div>
            <Link to="/about" className="inline-block bg-[#2a7f62] text-white px-8 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-green-700 transition">Learn more about our clinic</Link>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Comprehensive Veterinary Services <br />
              <span className="text-[#2a7f62]">in Tillsonburg, ON</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              At Edwards Veterinary Services, we offer complete, full-service veterinary care for every stage of your pet’s life.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {["Pet Wellness Care", "Vaccinations", "Surgery", "Dentistry", "Diagnostics", "Mobile Services"].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 text-lg font-bold text-gray-800">
                  <span className="text-[#2a7f62] text-xl mt-1">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#2a7f62] uppercase tracking-tight mb-4">Our Services</h2>
        </div>
        <div className="flex overflow-hidden no-scrollbar">
          <div className="animate-marquee py-4">
            {infiniteServices.map((service, index) => (
              <div key={index} className="w-[320px] md:w-[420px] mx-4 bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm group">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">24-Hour Emergency Veterinary Care</h2>
            <p className="text-xl mb-10">Exclusively for our existing clients. Emergencies Happen — We’re Here for You.</p>
            <a href="tel:5196882123" className="inline-block bg-white text-red-600 px-10 py-4 font-black text-xl uppercase tracking-widest hover:bg-gray-100 transition shadow-xl transform hover:scale-105">Call (519) 688-2123</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2a7f62] uppercase tracking-tight mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-xl text-gray-500">Trusted by the community for over 30 years.</p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <button 
              onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 text-[#2a7f62] hover:scale-110 transition-all hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * (100 / (window.innerWidth < 1024 ? 1 : 3))}%)` }}
              >
                {testimonials.map((t, index) => (
                  <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-md h-full flex flex-col justify-between">
                      <div>
                        <span className="text-6xl text-[#2a7f62] opacity-20 leading-none">“</span>
                        <p className="text-lg text-gray-700 italic -mt-4 leading-relaxed">
                          {t.text}
                        </p>
                      </div>
                      <p className="signature-font text-[#2a7f62] text-3xl mt-8">
                        — {t.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
              className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 text-[#2a7f62] hover:scale-110 transition-all hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="text-center mt-12">
           
            <Link to="/testimonials" className="inline-block bg-[#f4b400] text-white px-10 py-4 rounded-md font-black text-lg transition-all shadow-lg uppercase tracking-widest hover:bg-black">
              Read More Client Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;