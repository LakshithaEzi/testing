import React from "react";

const SkillBar = ({ skill, level, iconPath, color }) => {
  return (
    <div className="flex items-center col-span-1 m-5 my-4 font-poppins">
      <img src={iconPath} alt={`${skill} icon`} className="w-12 h-12 mr-4" style={{ color: color }} />
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-black">{skill}</span>
          <span className="text-sm font-medium text-black">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-black h-1.5 "
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;