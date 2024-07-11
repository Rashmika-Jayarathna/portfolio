import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  const handleDownload = () => {
    const url = "./Jayarathna-G-W-N-R-1.pdf";
    const fileName = "Rashmika_Jayarathana.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="h-[88vh] bg-[#0b0817] mt-[10vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I&#39;M <span className="text-yellow-400">RASHMIKA</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Motivated software engineering student with a strong foundation in
            web and software development. Passionate about learning through
            fixing bugs and solving complex problems. Dedicated to mastering new
            technologies and contributing to innovative projects.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 gap-16  ">
            {/* <a href="/Jayarathana-g-w-n-r.pdf" download> */}
            <button
              onClick={handleDownload}
              className="flex px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black items-center space-x-2 "
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            {/* </a> */}
            <div className="flex flex-row gap-8 justify-center items-center">
              <div className=" transform hover:scale-120 bg-[#e9ecef] rounded-full p-1 ">
                <SocialIcon
                  network="github"
                  bgColor="#e9ecef"
                  fgColor="black"
                  url="https://github.com/Rashmika-Jayarathna"
                  target="_blank"
                  style={{ height: 40, width: 40 }} 
                  className="transform transition-transform duration-500 hover:scale-150"
                />
              </div>
              <div className="transform  hover:scale-120 bg-[#e9ecef] rounded-full p-1">
                <SocialIcon
                  network="linkedin"
                  bgColor="#e9ecef"
                  fgColor="black"
                  url="http://www.linkedin.com/in/rashmika-jayarathna"
                  target="_blank"
                  style={{ height: 40, width: 40 }} 
                  className="transform transition-transform duration-500 hover:scale-150  "
                />
              </div>
              <div className=" transform hover:scale-120  bg-[#e9ecef] rounded-full p-1 ">
                <SocialIcon
                  network="facebook"
                  bgColor="#e9ecef"
                  fgColor="black"
                  url="https://web.facebook.com/rashmika.jayarathna.7"
                  target="_blank"
                  style={{ height: 40, width: 40 }} 
                  className="transform transition-transform duration-500 hover:scale-150"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
            <Image
              src="./images/hero-image-min.jpg"
              alt="user"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
