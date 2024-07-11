import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  const handleDownload = () => {
    const url = "./Jayarathana-g-w-n-r.pdf";
    const fileName = "Rashmika_Jayarathana_CV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem] ">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[55px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">visions</span>
          </h2>

          <div className="mb-[3rem] flex items-center md:space-x-10 ">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm "></span>
            <p className="text-[17px] text-slate-300 w-[80%] ">
              Driven by a transformative vision, I am passionate about
              harnessing technology to create impactful solutions. With a strong
              background in web and software development, I thrive on tackling
              challenges and turning them into innovative outcomes. My goal is
              to continuously push the boundaries of what&#39;s possible, leveraging
              my skills in fixing bugs, solving complex problems, and mastering
              new technologies to contribute meaningfully to projects that make
              a difference.
            </p>
          </div>
          
            <button onClick={handleDownload}  className="flex px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black items-center space-x-2 ">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[450px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[450px] w-[300px] h-[300px] relative"
        >
          <Image
            src="./images/about-min.jpg"
            alt="üser"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain "
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
