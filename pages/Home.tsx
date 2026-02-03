import React, { useState, useEffect, useRef } from 'react';
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
import heroVideo from '../images/Hero-Video.mp4';

// --- UPDATED AUTO SCROLL HOOK WITH TOUCH SUPPORT ---
const useAutoScroll = (
  ref: React.RefObject<HTMLDivElement | null>, 
  isHovered: boolean, 
  speed: number = 1
): void => {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    const scrollContainer = ref.current;
    if (!scrollContainer) return;

    // Stop auto-scroll when user touches the screen
    const handleTouchStart = () => setIsTouched(true);
    const handleTouchEnd = () => setIsTouched(false);

    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollContainer && !isHovered && !isTouched) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScroll - 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isHovered, isTouched, speed, ref]); 
};

const Home: React.FC = () => {
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isTestimonialsHovered, setIsTestimonialsHovered] = useState(false);

  const serviceList = [
    { title: "Pet Wellness & Preventive Care", desc: "Comprehensive wellness exams to ensure your pets live a long, happy, and healthy life.", img: wellnessExamImg },
    { title: "Vaccinations for Dogs & Cats", desc: "Customized immunization plans to protect your furry family members from common diseases.", img: puppyVaccineImg },
    { title: "Pet Dentistry & Dental X-Rays", desc: "Complete oral health services including professional cleaning and digital dental imaging.", img: dentistryImg },
    { title: "In-House Diagnostics & Radiology", desc: "State-of-the-art digital X-rays and diagnostics for fast and accurate medical results.", img: diagnosticsImg },
    { title: "Mobile & At-Home Services", desc: "Bringing the vet to you. Stress-free veterinary care in the comfort of your own home.", img: mobileServicesImg }
  ];

  const testimonials = [
    { text: "The staff are very friendly and helpful, and Dr. Paul always takes time to provide details...", author: "Susan R." },
    { text: "Been coming here for a number of years. The doctors are very patient...", author: "Princess J." },
    { text: "Edward's Vet is amazing and so incredibly helpful...", author: "Katie S." },
    { text: "Love the vets here. So patient and kind with my three doggies...", author: "Laura D." },
    { text: "We have been with Edwards Veterinary Services for over 10 years...", author: "Michael T." },
    { text: "I was so worried about my cat's dental surgery...", author: "Sarah L." },
    { text: "The mobile service is a game changer for my senior dog...", author: "Robert B." }
  ];

  const infiniteServices = [...serviceList, ...serviceList, ...serviceList];
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useAutoScroll(servicesScrollRef, isServicesHovered, 1); 
  useAutoScroll(testimonialsScrollRef, isTestimonialsHovered, 0.8);

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesScrollRef.current) {
      const scrollAmount = 400; 
      servicesScrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Veterinarian in Tillsonburg | Edwards Veterinary Services</title>
        <meta name="description" content="Compassionate veterinary care in Tillsonburg, ON." />
        <link rel="canonical" href="https://gotec.ca/" />
      </Helmet>

      {/* --- INJECTED MOBILE SCROLL CSS --- */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { 
            -ms-overflow-style: none; 
            scrollbar-width: none; 
            overflow-x: auto;
            -webkit-overflow-scrolling: touch; 
            touch-action: pan-x; 
        }
        .signature-font { font-family: 'Dancing Script', cursive; }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.5]">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className="flex flex-col items-center justify-center">
            <img src={bannerlogoImg} alt="Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-2 opacity-20" />
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase opacity-20">EDWARDS</h1>
            <p className="text-3xl md:text-5xl font-serif italic mb-10 tracking-wide opacity-20">Veterinary Services</p>
            <Link to="/appointment" className="bg-[#008000] text-white px-6 py-3 md:px-10 md:py-4 md:text-xl font-bold uppercase tracking-widest hover:bg-green-700 transition shadow-lg transform hover:scale-105">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img src={buildingExteriorImg} alt="Exterior" className="rounded-3xl shadow-2xl w-full h-auto object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-[#008000] mb-6 leading-tight">Your Local, Community-Rooted Veterinarian in Tillsonburg, ON</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">For more than three decades, Edwards Veterinary Services has been proud to serve pets across Tillsonburg.</p>
              <Link to="/about" className="inline-block bg-[#008000] text-white font-bold py-4 px-8 rounded-md uppercase tracking-wider hover:bg-[#006400] transition shadow-lg">
                Learn More About Our Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services List */}
      <section className="py-24 bg-[#008000]">
        <div className="container mx-auto px-4 max-w-5xl text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight">Comprehensive Veterinary Services <br className="hidden md:block" /> In Tillsonburg, ON</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 text-left max-w-3xl mx-auto">
            {[{ title: "24/7 Emergency Care", note: "Existing clients only" }, { title: "Urgent Care", note: "Business hours only" }, { title: "Mobile / Home Visits" }, { title: "Exotics Pet Care" }, { title: "Advanced Diagnostics" }, { title: "Pet Surgery" }].map((item, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-7 h-7 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <span className="text-2xl font-bold block">{item.title}</span>
                  {item.note && <span className="text-base text-gray-200 font-medium italic">{item.note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Scroller - TOUCH ENABLED */}
      <section className="py-24 bg-white overflow-hidden relative group">
        <div className="container mx-auto px-4 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#008000] uppercase tracking-tight mb-4">Our Services</h2>
        </div>
        <div className="relative">
          <button onClick={() => scrollServices('left')} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 p-2" aria-label="Scroll Left">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div 
            ref={servicesScrollRef}
            className="flex overflow-x-auto no-scrollbar gap-8 py-4 px-6 md:px-16 scroll-smooth touch-pan-x"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            {infiniteServices.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] md:w-[420px] bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm group/card">
                <div className="h-48 md:h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                </div>
                <div className="p-6 md:p-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4 leading-tight">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scrollServices('right')} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-gray-600 p-2" aria-label="Scroll Right">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tighter">24-Hour Emergency Veterinary Care</h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed">
                We provide 24/7 emergency veterinary care for our existing clients. 
                <br /><br />
                New clients are welcome to contact us during regular business hours to join our waitlist.
            </p>
            <a href="tel:5196882123" className="inline-block bg-white text-red-600 px-10 py-4 font-black text-xl uppercase tracking-widest hover:bg-gray-100 transition shadow-xl transform hover:scale-105">Call (519) 688-2123</a>
          </div>
        </div>
      </section>

      {/* Testimonials - TOUCH ENABLED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#008000] uppercase mb-4">What Our Clients Are Saying</h2>
          </div>
          <div 
            ref={testimonialsScrollRef}
            className="flex overflow-x-auto no-scrollbar gap-8 py-4 px-4 scroll-smooth touch-pan-x"
            onMouseEnter={() => setIsTestimonialsHovered(true)}
            onMouseLeave={() => setIsTestimonialsHovered(false)}
          >
            {infiniteTestimonials.map((t, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[450px]">
                <div className="bg-gray-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-md h-full flex flex-col justify-between">
                  <div>
                    <span className="text-4xl md:text-6xl text-[#008000] opacity-20 leading-none">“</span>
                    <p className="text-base md:text-lg text-gray-700 italic -mt-4 leading-relaxed">{t.text}</p>
                  </div>
                  <p className="signature-font text-[#008000] text-2xl md:text-3xl mt-6 md:mt-8">— {t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;