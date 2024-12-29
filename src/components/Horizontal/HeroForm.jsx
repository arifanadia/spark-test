import React from "react";
import AddressForm from "../custom-ui/address-form";

const HeroForm = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-heroform p-12 w-2/4 ">
        <img src="/logo.png" alt="logo" />
        <div className="my-56">
          <AddressForm />
        </div>
      </div>
      <div className="bg-white flex-1 p-24">
        <form action="">
          <h3 className="text-5xl font-tiltWarp text-center">
            Vraag hieronder <br />
            een offerte op
          </h3>
          <div className=" border border-gray-300 rounded-lg p-12 mt-8 space-y-4">
            <div className="">
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-white border border-gray-300 rounded-lg w-full py-2 pl-4 mt-2 "
              />
            </div>
            <div className="">
              <h5>Surname</h5>
              <input
                type="text"
                name="name"
                placeholder="Your SurName"
                className="bg-white border border-gray-300 rounded-lg w-full py-2 pl-4 mt-2 "
              />
            </div>
            <div className="">
              <h5>Email</h5>
              <input
                type="text"
                name="name"
                placeholder="Your Email"
                className="bg-white border border-gray-300 rounded-lg w-full py-2 pl-4 mt-2 "
              />
            </div>
            <div className="">
              <h5>Message</h5>
              <textarea
                type="text"
                name="name"
                placeholder="Write your issue"
                className="bg-white border border-gray-300 rounded-lg w-full py-2 pl-4 mt-2 "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
