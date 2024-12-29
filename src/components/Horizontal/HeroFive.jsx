import React from "react";
import AddressForm from "../custom-ui/address-form";

const HeroFive = () => {
  return (
    <div className="bg-hero5 p-12">
      <nav className="flex items-center justify-between">
        <div className="justify-start">
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className="flex gap-20 items-center  text-white font-tiltWarp">
          <li>Diensten</li>
          <li>Over Ons </li>
          <li> Contact</li>
        </ul>
        <div className="text-white">
          <span>Spoed? Bel 020 1234567 of klik hier | Chat</span>
        </div>
      </nav>
      <div className="flex justify-between items-center p-6 mt-44">
        <h1 className="text-6xl font-tiltWarp leading-tight text-white flex-1">
          Wij bieden een <br /> duurzame en passende <br /> oplossing voor uw
          klus. 
        </h1>
        <div className="flex-1">
          <AddressForm />
        </div>
      </div>
    </div>
  );
};

export default HeroFive;
