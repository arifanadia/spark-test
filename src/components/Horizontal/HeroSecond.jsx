import React from "react";

const HeroSecond = () => {
  return (
    <div className="bg-hero2 p-12  ">
      <img src="/logo.png" alt="logo" />
      <div className="flex items-end xl:pt-44">
        <div className="space-y-2">
          <h1 className="h1-tilt">
            Wij bieden een <br /> duurzame en passende <br /> oplossing voor uw
            klus. 
          </h1>
          <p className="lg:text-lg xl:text-xl text-white/85 w-2/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="w-1/2 mt-96 ">
          <button className="bg-btn_color px-8 py-2 text-xl font-serif text-white rounded-3xl  ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
