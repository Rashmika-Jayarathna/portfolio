import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Nav bar */}
        <MobileNav
          nav={nav}
          closeNav={closeNav}
          scrollToSection={scrollToSection}
        />
        <Nav openNav={openNav} scrollToSection={scrollToSection} />

        {/* Hero section */}
        <div ref={homeRef}>
          <Hero />
        </div>
        <div className="relative z-[30]">
          {/* about */}
          <div ref={aboutRef}>
            <About />
          </div>
          {/* Services */}
          <div ref={servicesRef}>
            <Services />
          </div>
          {/* Skills */}
          <div ref={skillsRef}>
            <Skills />
          </div>
          {/* Projects */}
          <div ref={projectsRef}>
            <Projects />
          </div>
          {/* footer */}
          <div ref={contactRef}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
