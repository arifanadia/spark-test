import React from "react";

const Footer = () => {
  return (
    <div className="font-nobile mt-96 w-full mx-auto px-12">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl">
          Overtuigd van de nummer 1 <br /> in Noord Holland ?
        </h2>
        <h1 className="mt-12 font-nobile font-navy text-center text-4xl sm:text-6xl md:text-9xl lg:text-[200px] font-bold uppercase">
          gmk
        </h1>
      </div>
      <div className="border-t-2 border-black p-6 flex justify-between">
        <div>
          <p className="p-nobile">GMK Dakonderhoud B.V.</p>
          <p className="p-nobile">Leidsekade 57 1016 CX Amsterdam</p>
        </div>
        <div>
          <p className="p-nobile">info@dakonderhoudgmk.nl</p>
          <p className="p-nobile"> (020) 26 12 257.</p>
        </div>
        <div>
          <p className="p-nobile">Privacy verklaring</p>
          <p className="p-nobile">Algemene Voorwaarden</p>
        </div>
        <div>
          <p className="p-nobile">
            (C) MMXXIV GMK Dakonderhoud B.V. Concept by Nakatori Amsterdam.
          </p>
          <p className="p-nobile"> Concept by Nakatori Amsterdam.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
