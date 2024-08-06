import React, { useRef } from "react";
import Navbar2 from "../component/Navbar2";
import ProfileCard from "../component/ProfileCard";
import SkillsGrid from "../component/SkillsGrid";
import Timeline from "../component/Timeline";
import Project from "../component/Project";

export default function Me() {
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSelection = (selectionRef) => {
    window.scrollTo({
      top: selectionRef.current.offsetTop - window.innerHeight / 2 + selectionRef.current.offsetHeight / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar2
        scrollToSelection={scrollToSelection}
        refs={{
          profileRef,
          skillsRef,
          timelineRef,
          projectRef,
        }}
      />
      <div className="container p-4 mx-auto">
        <div ref={profileRef}>
          <ProfileCard />
        </div>
        <div ref={skillsRef}>
          <SkillsGrid />
        </div>
        <div ref={timelineRef}>
          <Timeline />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
      </div>
    </div>
  );
}
