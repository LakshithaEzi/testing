import React, { useRef } from "react";
import ProfileCard from "../component/ProfileCard";
import SkillsGrid from "../component/SkillsGrid";
import Timeline from "../component/Timeline";
import Navbar2 from "../component/Navbar2";

const Me2 = () => {
  const profileCardRef = useRef(null);
  const skillsGridRef = useRef(null);
  const timelineRef = useRef(null);

  return (
    <div>
      <Navbar2 />
      <ProfileCard ref={profileCardRef} />
      <SkillsGrid ref={skillsGridRef} />
      <Timeline ref={timelineRef} />

      {/* You can now use the refs to interact with each component if needed */}
    </div>
  );
};

export default Me2;
