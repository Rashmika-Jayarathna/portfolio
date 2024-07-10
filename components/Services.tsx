import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[5rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform h-[500px] transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Harnessing JavaScript, TypeScript, HTML, CSS, and frameworks like
              React + Vite and Next.js, I specialize in crafting intuitive and
              responsive user interfaces. With expertise in Tailwind CSS and
              Daisy UI, I ensure designs are not only visually appealing but
              also optimized for performance and accessibility.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform h-[500px] transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Proficient in Python, Node.js (part of the MERN stack), and PHP, I
              build robust backend systems that power dynamic web applications.
              I leverage frameworks like Express.js and Next.js for server-side
              logic, ensuring efficient data handling and seamless integration
              with frontend technologies.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform h-[500px] transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Fullstack
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              As a full-stack developer, I combine frontend finesse with backend
              prowess to create cohesive web solutions. Fluent in languages such
              as JavaScript,php, etc. This
              allows me to deliver end-to-end applications that meet both
              functional requirements and user experience standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
