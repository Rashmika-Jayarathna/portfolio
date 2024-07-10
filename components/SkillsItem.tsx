import React from "react";

interface Props {
  lang: string;
  title: string;
  des: string;
}

const SkillsItem = ({ lang, title, des }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem] ">
      <span className="px-[2rem] text-[#55e6a5] py-[0.8rem] font-bold text-[18px] border-[2px] border-[#55e6a5] ">
        {lang}
      </span>
      <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ">
        {des}
      </p>
    </div>
  );
};

export default SkillsItem;
