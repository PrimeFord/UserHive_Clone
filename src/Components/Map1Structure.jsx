import React from "react";

const Map1Structure = (props) => {
  return (
    <div className="p-3 w-[100%] flex flex-col gap-3 hover:bg-[#2c2c30] pb-8 rounded-[.8rem] ">
      <p className="h-12 w-12 flex justify-center items-center bg-[#6968f7] rounded-[50%]">
        <img className="h-5 w-5" src={props.img} alt="" />
      </p>
      <h2 className="text-[1.2rem] font-semibold">{props.title}</h2>
      <p className="text-[#c2c2c2] text-[1.1rem] leading-[1.5rem]">
        {props.info}
      </p>
    </div>
  );
};

export default Map1Structure;
