import React from "react";

const OverOns = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 mt-12">
      <h1 className="font-nobile font-navy text-center text-4xl sm:text-6xl md:text-9xl lg:text-[250px] font-bold uppercase">
        Over ons
      </h1>

      <div className="flex justify-between items-center max-w-7xl mx-auto gap-12">
        <div>
          <p className=" mt-2 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            beatae corporis quos tempora magni sequi voluptatem quisquam,
            veritatis explicabo distinctio quasi ipsa ut. Recusandae excepturi
            dolor quia eveniet voluptatibus amet. ipsum dolor sit amet
            consectetur, adipisicing elit. Minus beatae corporis quos tempora
            magni sequi voluptatem quisquam, veritatis explicabo distinctio
            quasi ipsa ut. Recusandae excepturi dolor quia eveniet voluptatibus
            amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
           <span className="block">
           Minus beatae corporis quos tempora magni sequi voluptatem quisquam,
            veritatis explicabo distinctio quasi ipsa ut. Recusandae excepturi
            dolor quia eveniet voluptatibus amet. ipsum dolor sit amet
            consectetur, adipisicing elit. Minus beatae corporis quos tempora
            magni sequi voluptatem quisquam, veritatis explicabo distinctio
            quasi ipsa ut. Recusandae excepturi dolor quia eveniet voluptatibusf
           </span>
            amet.
          </p>
          <div className="flex items-center justify-center gap-4 lg:gap-8 mt-12">
            <img
              src="./horizontal/warranty.png"
              alt="10 years warranty"
              className="w-32 md:w-48"
            />
            <img
              src="./horizontal/rating.png"
              alt="rating"
              className="w-12 md:w-16"
            />
            <img
              src="./horizontal/google.png"
              alt="10 years warranty"
              className="w-28 md:w-32"
            />
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 mt-8">
          <div>
            <img
              src="./horizontal/hero1.png"
              alt="Gallery Image 1"
              className="w-full h-auto "
            />
          </div>
          <div>
            <img
              src="./horizontal/hero1.png"
              alt="Gallery Image 2"
              className="w-full h-auto "
            />
          </div>
          <div>
            <img
              src="./horizontal/hero1.png"
              alt="Gallery Image 3"
              className="w-full h-auto "
            />
          </div>
          <div>
            <img
              src="./horizontal/hero1.png"
              alt="Gallery Image 4"
              className="w-full h-auto "
            />
          </div>
          <div>
            <img
              src="./horizontal/hero1.png"
              alt="Gallery Image 5"
              className="w-full h-auto"
            />
          </div>
          <div>
            <img
              src="./horizontal/hero1.png"
              alt="Gallery Image 6"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverOns;
