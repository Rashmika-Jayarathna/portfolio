import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>

      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem]  items-center">
        <div className="mb-[2rem] md:mb-[4rem] ">
          <span className="px-[2rem] text-yellow-400 py-[0.9rem] font-bold text-[18px] border-[2px] border-yellow-400 ">
            2022 - Present
          </span>
          <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
            Sri Lanka Institute of Information Technology (SLIIT)
          </h1>
          <p className="text-[#aaaaaa] font-normal w-[80%] text-[24px] opacity-80 ">
            BSc (Hons) in Information Technology Specialized in Software
            Engineering - 3rd Year
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="Full Stack Development"
            lang="JavaScript | TypeScript"
            des="Proficient in JavaScript (Node.js, React) and experienced in building scalable web applications using the MERN stack. Skilled in frontend development with HTML/CSS and Tailwind CSS, and backend development with Node.js and Express.js."
          />
          <SkillsItem
            title="Mobile Development"
            lang="Kotlin | Java"
            des="Experienced in Kotlin for Android app development using Android Studio, ensuring high performance and user satisfaction."
          />
          <SkillsItem
            title="Python Development"
            lang="Python"
            des="Proficient in scripting tasks and backend development, enhancing versatility in software solutions."
          />
          {/* <SkillsLanguage skill1="html" skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/> */}
        </div>
        <div>
          <SkillsItem
            title="UI/UX Design"
            lang="Figma | Tailwind CSS"
            des="Strong design skills using Figma and Photoshop, focusing on creating intuitive and visually appealing user interfaces. Experienced in rapid prototyping with Daisy UI and implementing UI components with Tailwind CSS."
          />
          <SkillsItem
            title="Java Development"
            lang="Java"
            des="Knowledgeable in building applications using Java, leveraging tools like Eclipse and Android Studio for development and debugging."
          />
          <SkillsItem
            title="TypeScript & Next.js"
            lang="TypeScript | JavaScript"
            des="Familiar with TypeScript for improving JavaScript code scalability and maintainability. Experience in building optimized React applications for production using Next.js."
          />
          {/* <SkillsLanguage skill1="React Js" skill2="Next Js" skill3="TypeScript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]"/> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
