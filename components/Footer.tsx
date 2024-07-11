import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb:[4rem] bg-[#02050a] ">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[2rem] ">
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <MapIcon className="md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[20px] mb-[0.2rem] font-semibold text-white ">
              Address
            </h1>
            <p className="text-[15px] w-[90%] text-white opacity-60">
              Kumbalgama, Dewanagala,<br></br>
              Mawanella, Sri Lanka
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <DevicePhoneMobileIcon className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">
              Phone
            </h1>
            <p className="text-[15px] w-[100%] text-white opacity-60">
              +94 74 012 4383
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] ">
            <EnvelopeIcon className="md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">
              Email
            </h1>
            <a
              href="mailto:rashmikajayarathna@gmail.com"
              className="text-[15px] w-[100px] text-white opacity-60 break-all"
            >
              rashmikajayarathna@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          Rashmika Jayarathna © 2024 All Rights Reserved
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
