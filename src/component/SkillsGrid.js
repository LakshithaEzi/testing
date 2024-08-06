import React, { forwardRef } from "react";
import SkillBar from "./SkillBar";

const skills = [
  {
    skill: "React",
    level: 80,
    iconPath:
      "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  },
  {
    skill: "JavaScript",
    level: 70,
    iconPath:
      "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    skill: "Node.js",
    level: 70,
    iconPath: "https://img.icons8.com/fluency/48/node-js.png",
  },
  {
    skill: "Python",
    level: 60,
    iconPath:
      "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    skill: "Tailwindcss",
    level: 80,
    iconPath:
      "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  {
    skill: "Postman",
    level: 80,
    iconPath:
      "https://img.icons8.com/?size=100&id=IoYmHUxgvrFB&format=png&color=000000",
  },
  {
    skill: "Redux",
    level: 50,
    iconPath:
      "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
  },
  {
    skill: "Firebase",
    level: 75,
    iconPath:
      "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
  },
  {
    skill: "Mongodb",
    level: 85,
    iconPath:
      "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    skill: "MySQL",
    level: 85,
    iconPath:
      "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  },
  {
    skill: "Github",
    level: 80,
    iconPath:
      "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  },
  {
    skill: "Figma",
    level: 90,
    iconPath:
      "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  },
  {
    skill: "premiere",
    level: 85,
    iconPath:
      "https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000",
  },
  {
    skill: "Photoshop",
    level: 85,
    iconPath:
      "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  },
  {
    skill: "illustrator",
    level: 85,
    iconPath:
      "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
  },
];

const SkillsGrid = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="col-span-2 m-5 text-2xl font-bold font-poppins">
        SKILLS
        <hr className="my-2 border-t-2 border-gray-400" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 m-7">
        {skills.map((skillObj, index) => (
          <SkillBar
            key={index}
            skill={skillObj.skill}
            level={skillObj.level}
            iconPath={skillObj.iconPath}
          />
        ))}
      </div>
    </div>
  );
});

export default SkillsGrid;
