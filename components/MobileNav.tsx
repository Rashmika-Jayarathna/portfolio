import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
  scrollToSection: (section: string) => void;
}

const MobileNav = ({ nav, closeNav, scrollToSection }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("home");
            closeNav();
          }}
        >
          HOME
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("about");
            closeNav();
          }}
        >
          ABOUT
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("services");
            closeNav();
          }}
        >
          SERVICES
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("skills");
            closeNav();
          }}
        >
          SKILLS
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("projects");
            closeNav();
          }}
        >
          PROJECTS
        </div>
        <div
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection("contact");
            closeNav();
          }}
        >
          CONTACT
        </div>
      </div>

      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
