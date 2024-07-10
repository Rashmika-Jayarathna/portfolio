import { CommandLineIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]  ">
      <h1 className="heading">
        Proj<span className="text-yellow-400">ects</span>
      </h1>

      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a
              href="https://github.com/Rashmika-Jayarathna/Connectify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./images/project-1.png"
                alt="Project 01"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
          <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 mx-auto flex mt-4 justify-center">
            Social Media Application
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a
              href="https://github.com/Rashmika-Jayarathna/weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./images/project-2.jpg"
                alt="Project 01"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
          <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 mx-auto flex mt-4 justify-center">
            Weather Application
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a
              href="https://github.com/Rashmika-Jayarathna/hearthily"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./images/project-3.jpg"
                alt="Project 01"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
          <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 mx-auto flex justify-center mt-4">
            Cloud Kitchen Web Application
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <Image
              src="./images/project-4.jpg"
              alt="Project 01"
              layout="fill"
              className="object-contain"
            />
          </div>
          <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 mx-auto flex mt-4 justify-center">
            {" "}
            Memory Game
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="800">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <a
              href="https://github.com/Rashmika-Jayarathna/ToDo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./images/project-5.jpg"
                alt="Project 01"
                layout="fill"
                className="object-contain"
              />
            </a>
          </div>
          <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 mx-auto flex mt-4 justify-center">
            Todo Application
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1000">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <a
              href="https://github.com/Rashmika-Jayarathna/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              src="./images/project-6.jpg"
              alt="Project 01"
              layout="fill"
              className="object-contain"
            />
            </a>
          </div>
          <p className="text-[#aaaaaa] font-normal w-[100%] text-[17px] opacity-80 mx-auto flex mt-4 justify-center">
            Portfolio Website
            </p>

        </div>
      </div>
    </div>
  );
};

export default Projects;
