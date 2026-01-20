import React from 'react';
import { DOCTORS, CARE_TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Header Section with Background Image */}
      
   <section 
  className="relative py-40 text-center bg-cover bg-no-repeat bg-center"
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(32, 28, 28, 0.88)), url('https://edwardsvet.ca/wp-content/uploads/2025/12/team-43.png')` 
  }}
>
  <div className="relative z-10 container mx-auto px-4">
    {/* Use text-white because the bottom of your gradient is dark (0.88 opacity) */}
    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
      Meet Our Team
    </h1>
    
    {/* Use a slightly transparent white for the subtext to create hierarchy */}
    <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
      The dedicated professionals caring for your pets with compassion and expertise.
    </p>
  </div>
</section>

      {/* Doctors Section */}
      <div className="container mx-auto px-4 mt-20 max-w-6xl">
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-1 w-12 bg-brand rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">Our Doctors</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DOCTORS.map((member) => (
            <div key={member.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-brand/30 transition shadow-sm hover:shadow-md flex flex-col items-center md:items-start md:flex-row gap-8">
              <div className="w-32 h-32 flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-brand">{member.name}</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">{member.role}</p>
                </div>
                <div className="h-px w-full bg-gray-200 mb-6"></div>
                {/* Added whitespace-pre-line so your bio line breaks show up */}
                <p className="text-gray-600 leading-relaxed italic whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Team Section */}
      <div className="container mx-auto px-4 mt-24 max-w-6xl">
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-1 w-12 bg-brand rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">Our Care Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARE_TEAM.map((member) => (
            <div key={member.id} className="flex flex-col sm:flex-row bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition group gap-6 items-center">
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full border-2 border-brand/10"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-brand group-hover:text-brand-dark transition">{member.name}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter mt-1">{member.role}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
