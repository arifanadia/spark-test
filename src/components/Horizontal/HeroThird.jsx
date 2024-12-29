import React from "react";

const HeroThird = () => {
  return (
    <div className="bg-hero3 p-12 ">
      <div className="flex gap-4 items-center justify-end ">
        <span className="text-4xl uppercase text-white font-tiltWarp">
          GMK Dakonderhoud
        </span>
        <img src="./icon.png" alt="logo" />
      </div>
      <div className="text-right flex flex-col justify-end mt-28">
        <div>
          <h1 className="text-6xl text-white font-tiltWarp leading-tight">
            Wij bieden een <br /> duurzame en passende <br /> oplossing voor uw
            klus.
          </h1>
          <p className="text-xl text-white/85  w-1/2 mx-auto ml-[750px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-12">
        <button className="bg-btn_color px-8 py-2 text-xl font-serif text-white rounded-3xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroThird;
