import React from "react";

const ProfileCard = ({ name, role, img }) => {
  return (
    <div>
      <div className="flex h-20 lg:h-24  ">
        <div className="bg-white pl-4 lg:pl-12 py-4 rounded-l-xl w-48 lg:w-[290px] ">
          <h4 className="text-sm lg:text-xl font-bold">{name}</h4>
          <span className="text-gray-300 text-xs ">{role}</span>
        </div>
        <img src={img} alt="Fermin vargas" className="w-20 lg:w-28 rounded-r-xl" />
      </div>
    </div>
  );
};

export default ProfileCard;
