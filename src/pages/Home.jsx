import React from 'react';
import AboutMe from '../components/AboutMe';
import ProfileCard from '../components/ProfileCard'

function home() {
  return <div className="font-['Lato']">
    <ProfileCard />
    <AboutMe />
  </div>;
}

export default home;