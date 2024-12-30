import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "./ProfileCard";

gsap.registerPlugin(ScrollTrigger);

const HeroFirst = () => {
  const cardFromDownRef = useRef([]);
  const cardFromTopRef = useRef([]);
  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;

    if (races) {
      const getScrollAmount = () => window.innerWidth - races.scrollWidth;

      const tween = gsap.to(races, {
        x: getScrollAmount(),
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: races,
        start: "top 50%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
      });
    }

    const animateCards = (refArray, from, to, offset) => {
      refArray.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: from }, // Start from off-screen right
          {
            opacity: 1,
            x: to, // End at normal position
            duration: 1 + index * 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    };

    animateCards(cardFromDownRef, 100, 0); // Cards coming from the right
    animateCards(cardFromTopRef, 100, 0); // Cards coming from the right

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el, ref) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className="bg-hero p-6 md:p-10 w-full relative">
      <div className="fixed">
        <img src="/logo.png" alt="logo" />
      </div>
      <div
        className="border-b-2 border-white/35 w-full absolute top-1/2 left-0"
        ref={racesRef}
      >
        <div className="flex flex-wrap md:flex-nowrap justify-center space-x-4 md:space-x-8">
          <div
            className="h-2 w-20 bg-white mb-12 absolute top-1/2 left-16 md:left-32 lg:left-48"
            ref={(el) => addToRefs(el, cardFromTopRef)}
          >
            <div className="absolute top-6">
              <ProfileCard
                name="Fermin Vargas"
                role="Construction Manager"
                img="/profile/profile1.png"
              />
            </div>
          </div>

          <div
            className="h-2 w-20 bg-white mb-12 absolute top-1/2 left-[200px] md:left-[500px]"
            ref={(el) => addToRefs(el, cardFromTopRef)}
          >
            <div className="absolute -top-28">
              <ProfileCard
                name="Jane Smith"
                role="Project Engineer"
                img="/profile/profile1.png"
              />
            </div>
          </div>

          <div
            className="h-2 w-20 bg-white mb-12 absolute top-1/2 lg:right-[700px] -right-48 md:right-24"
            ref={(el) => addToRefs(el, cardFromTopRef)}
          >
            <div className="absolute top-6">
              <ProfileCard
                name="Alice Johnson"
                role="Lead Architect"
                img="/profile/profile1.png"
              />
            </div>
          </div>

          <div
            className="h-2 w-20 bg-white mb-12 absolute top-1/2 left-[600px] lg:left-[1000px]"
            ref={(el) => addToRefs(el, cardFromTopRef)}
          >
            <div className="absolute -top-28">
              <ProfileCard
                name="Michael Brown"
                role="Site Supervisor"
                img="/profile/profile1.png"
              />
            </div>
          </div>

          <div
            className="h-2 w-20 bg-white mb-12 absolute top-1/2 -right-[600px] md:-right-16"
            ref={(el) => addToRefs(el, cardFromDownRef)}
          >
            <div className="absolute top-6">
              <ProfileCard
                name="Sophia Davis"
                role="Structural Engineer"
                img="/profile/profile1.png"
              />
            </div>
          </div>

          <div
            className="h-2 w-20 bg-white mb-12 absolute top-1/2 -right-[900px] md:-right-[300px]"
            ref={(el) => addToRefs(el, cardFromDownRef)}
          >
            <div className="absolute -top-28">
              <ProfileCard
                name="Emily Martinez"
                role="Interior Designer"
                img="/profile/profile1.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end pt-80 lg:pt-[550px]">
        <div className="flex items-center lg:gap-8 mb-8 md:mb-0">
          <img src="/horizontal/warranty.png" alt="rating" className="w-48" />
          <img
            src="/horizontal/rating.png"
            alt="rating"
            className="w-12 md:w-16"
          />
          <img
            src="/horizontal/google.png"
            alt="10 years warranty"
            className="w-28 md:w-32"
          />
        </div>
        <img
          src="/horizontal/hand.png"
          alt="10 years warranty"
          className="w-[320px] md:w-[463px] -mr-12 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroFirst;
