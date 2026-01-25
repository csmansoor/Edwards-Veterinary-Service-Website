import React, { useState } from 'react';
import { DOCTORS, CARE_TEAM } from '../constants';

const TeamMemberCard = ({ member, isDoctor }: { member: any, isDoctor: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flex-shrink-0 w-[300px] md:w-[350px] h-[500px] [perspective:1000px] cursor-pointer mx-4"
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
      }}
    >
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
          <div className="h-3/4 w-full overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
          <div className="h-1/4 p-6 flex flex-col justify-center items-center text-center bg-white">
            <h3 className={`font-bold text-gray-900 ${isDoctor ? 'text-2xl' : 'text-xl'}`}>{member.name}</h3>
            <p className="text-brand font-bold uppercase text-[10px] tracking-widest mt-1">{member.role}</p>
            <span className="text-brand/60 text-[10px] mt-2 font-bold uppercase">Click for Bio</span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-brand rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white shadow-2xl">
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <div className="w-12 h-1 bg-white/30 mb-4 rounded-full"></div>
          <div className="overflow-y-auto max-h-[300px] pr-2">
            <p className="text-sm leading-relaxed italic whitespace-pre-line">
              {member.bio}
            </p>
          </div>
          <button className="mt-6 text-[10px] font-bold uppercase tracking-widest border border-white/40 px-3 py-1 rounded-full">
            Flip Back
          </button>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  // Triple the arrays to ensure no gaps during the long slow slide
  const dupDoctors = [...DOCTORS, ...DOCTORS, ...DOCTORS];
  const dupCareTeam = [...CARE_TEAM, ...CARE_TEAM, ...CARE_TEAM];

  return (
    <div className="bg-gray-50 pb-20 overflow-hidden">
      <style>{`
        /* Left to Right */
        @keyframes scrollLTR {
          0% { transform: translateX(calc(-350px * ${DOCTORS.length})); }
          100% { transform: translateX(0); }
        }
        /* Right to Left */
        @keyframes scrollRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * ${CARE_TEAM.length} - (2rem * ${CARE_TEAM.length}))); }
        }
        .animate-ltr {
          animation: scrollLTR 50s linear infinite;
        }
        .animate-rtl {
          animation: scrollRTL 60s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section */}
      <section 
        className="relative py-40 text-center bg-cover bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('https://edwardsvet.ca/wp-content/uploads/2025/12/team-43.png')` 
        }}
      >
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Meet Our Team</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium">
            Compassionate experts dedicated to your pet's health.
          </p>
        </div>
      </section>

      {/* Doctors Section: Left to Right */}
      <div className="mt-20">
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="h-px w-12 bg-brand"></div>
          <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tighter">Our Doctors</h2>
          <div className="h-px w-12 bg-brand"></div>
        </div>
        
        <div className="relative flex overflow-hidden group">
          {/* Gradient Edges for better visual flow */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-ltr pause-on-hover whitespace-nowrap">
            {dupDoctors.map((member, idx) => (
              <TeamMemberCard key={`doc-${idx}`} member={member} isDoctor={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Care Team Section: Right to Left */}
      <div className="mt-32">
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="h-px w-12 bg-brand"></div>
          <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tighter">Our Care Team</h2>
          <div className="h-px w-12 bg-brand"></div>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-rtl pause-on-hover whitespace-nowrap">
            {dupCareTeam.map((member, idx) => (
              <TeamMemberCard key={`care-${idx}`} member={member} isDoctor={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;