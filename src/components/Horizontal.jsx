import React, { useEffect } from "react";
import HeroFirst from "./Horizontal/Hero-1/HeroFirst";
import HeroSecond from "./Horizontal/HeroSecond";
import HeroThird from "./Horizontal/HeroThird";
import HeroFour from "./Horizontal/HeroFour";
import HeroFive from "./Horizontal/HeroFive";
import HeroSix from "./Horizontal/HeroSix";
import HeroSeven from "./Horizontal/HeroSeven";
import HeroForm from "./Horizontal/HeroForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".horizontal-scroll-container");
    const totalSections = scrollContainer.children.length;
    const scrollHeight = scrollContainer.scrollWidth - window.innerWidth;

    if (window.innerWidth >= 1024) {
      // Prevent vertical scrolling by setting the body's height to fit the content
      document.body.style.height = "100vh"; // Ensures no vertical scrolling

      // Enable manual scrolling with GSAP's ScrollTrigger
      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: () => `+=${scrollHeight}`,
          scrub: 1,
          pin: true,
          markers: false,
          onEnter: () => {
            document.body.classList.add("horizontal-scrolling");
          },
          onLeaveBack: () => {
            document.body.classList.remove("horizontal-scrolling");
          },
          onLeave: () => {
            document.body.classList.remove("horizontal-scrolling");
          },
        },
      });

      // Snap sections to each other when scrolling horizontally
      ScrollTrigger.create({
        trigger: scrollContainer,
        start: "top top",
        end: () => `+=${scrollHeight}`,
        snap: {
          snapTo: 1 / (totalSections - 1),
          duration: 0.5,
          ease: "power1.inOut",
        },
      });
    } else {
      // Prevent vertical scroll on smaller screens as well
      document.body.style.height = "auto"; // For smaller screens, no forced height
    }
  }, []);

  return (
    <div className="max-w-full overflow-hidden">
      <div className="horizontal-scroll-container flex flex-nowrap">
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroFirst />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroSecond />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroThird />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroFour />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroFive />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroSix />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroSeven />
        </div>
        <div className="section w-screen sm:w-full flex-shrink-0" style={{ height: "100vh" }}>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
