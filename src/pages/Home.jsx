import React from "react";
import AboutMe from "../components/AboutMe";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import Services from "../components/Services";

function home() {
  return (
    <div className="font-['Lato']">
      <ProfileCard />
      <AboutMe />
      <ProjectCard />
      <Services />
    </div>
  );
}

export default home;
