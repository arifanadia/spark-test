import React from "react";
import OverOns from "./vertical/Overons";
import Carousel from "./vertical/carousel";
import Footer from "./vertical/Footer";

const Vertical = () => {
  return (
    <div className="">
      <OverOns />
      <div className="max-w-7xl mx-auto mt-12">
        <Carousel />
        <div className="mt-12">
          <p className=" text-lg text-gray-700">
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
              Minus beatae corporis quos tempora magni sequi voluptatem
              quisquam, veritatis explicabo distinctio quasi ipsa ut. Recusandae
              excepturi dolor quia eveniet voluptatibus amet. ipsum dolor sit
              amet consectetur, adipisicing elit. Minus beatae corporis quos
              tempora magni sequi voluptatem quisquam, veritatis explicabo
              distinctio quasi ipsa ut. Recusandae excepturi dolor quia eveniet
              voluptatibusf
            </span>
            amet.
          </p>
        </div>
      </div>
      <h1 className="mt-12 font-nobile font-navy text-center text-4xl sm:text-6xl md:text-9xl lg:text-[200px] font-bold uppercase">
        ONS WERK
      </h1>
      <Footer />
    </div>
  );
};

export default Vertical;
