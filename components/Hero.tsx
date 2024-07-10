import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I'M <span className="text-yellow-400">RASHMIKA</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Motivated software engineering student with a strong foundation in
            web and software development. Passionate about learning through
            fixing bugs and solving complex problems. Dedicated to mastering new
            technologies and contributing to innovative projects.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="/Jayarathana-g-w-n-r.pdf" download>
              <button className="flex px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black items-center space-x-2 ">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a>
          </div>
        </div>

        <div className="w-[600px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[600px]">
          <Image
            src="./images/hero-image.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
