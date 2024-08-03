import React from "react";
import Navbar2 from "../component/Navbar2";
import Project from "../component/Project";
import ProfileCard from "../component/ProfileCard";
import Timeline from "../component/Timeline";
import SkillsGrid from "../component/SkillsGrid";

export default function Me() {
  return (
    <div className="min-h-screen ">
      <Navbar2 />
      <div className="container p-4 mx-auto">
        <ProfileCard />
        <SkillsGrid />
        <Timeline />
        <Project />
      </div>
    </div>
  );
}
