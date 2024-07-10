import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem] ">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] ">
        {year}
      </span>
      <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
        molestias rem voluptatum optio dicta necessitatibus illum fugit facilis
        vel voluptate.
      </p>
    </div>
  );
};

export default SkillsItem;
