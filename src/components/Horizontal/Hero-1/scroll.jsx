import React from 'react';
import ProfileCard from './ProfileCard';


const HorizontalScroll = () => {
  const profiles = [
    { imgSrc: './profile/profile1.png', name: 'Fermin Vargas', title: 'Construction Manager', style: { top: '50px', left: '100px' } },
    { imgSrc: './profile/profile1.png', name: 'Fermin Vargas', title: 'Construction Manager', style: { top: '50px', left: '300px' } },
    { imgSrc: './profile/profile1.png', name: 'Fermin Vargas', title: 'Construction Manager', style: { top: '50px', left: '500px' } },
    // Add more profiles as needed
  ];

  return (
    <div className="relative w-full h-screen overflow-x-scroll bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} imgSrc={profile.imgSrc} name={profile.name} title={profile.title} style={profile.style} />
      ))}
    </div>
  );
};

export default HorizontalScroll;
