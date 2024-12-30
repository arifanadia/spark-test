import React from "react";

const Carousel = () => {
  const images = [
    "./carousel/carousel-1.jpg",
    "./carousel/carousel-2.jpg",
    "./carousel/carousel-3.jpg",
    "./carousel/carousel-4.jpg",
    "./carousel/carousel-5.jpg",
    "./carousel/carousel-6.jpg",
    "./carousel/carousel-1.jpg",
    "./carousel/carousel-2.jpg",
    "./carousel/carousel-3.jpg",
    "./carousel/carousel-4.jpg",
  ];

  return (
    <div className="flex justify-center items-center my-72">
      <div className="box relative w-full h-full">
  {images.map((src, index) => (
    <span
      key={index}
      className={`absolute top-0 left-0 w-full h-full transform-origin-center transform-style-3d
        transform rotate-[calc(var(--i)*36deg)] translate-z-[450px]`}
      style={{ "--i": index + 1 }}  // You need to keep the inline style for the custom property
    >
      <img
        src={src}
        alt={`carousel-${index + 1}`}
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 rounded-lg hover:translate-y-[-2px]"
      />
    </span>
  ))}
</div>

    </div>
  );
};

export default Carousel;
