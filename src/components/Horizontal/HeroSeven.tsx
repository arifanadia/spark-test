import React from "react";

const HeroSeven = () => {
  return (
    <div className="bg-hero7 p-12 ">
      <img src="./logo.png" alt="logo" />
      <div className="flex justify-between items-end pt-[370px]">
        <h1 className="text-6xl text-white font-tiltWarp leading-tight">
          Wij bieden een <br /> duurzame en passende <br /> oplossing voor uw
          klus. 
        </h1>

        <div className="w-1/2 ">
          <p className="text-xl text-white/85 text-right ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex justify-end">
            <button className="bg-btn_color px-8 py-2 text-xl font-serif text-white rounded-3xl mt-10 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSeven;
