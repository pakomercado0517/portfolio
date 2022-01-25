import React from 'react';
import AboutMe from '../components/AboutMe';
import ProfileCard from '../components/ProfileCard'
import Services from '../components/Services';

function home() {
  return <div className="font-['Lato']">
    <ProfileCard />
    <AboutMe />
    <Services />
  </div>;
}

export default home;