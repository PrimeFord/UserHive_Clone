import React from "react";

const Map2Structure = (props) => {
  return (
    <div className="p-8 w-[100%] flex flex-col gap-3 bg-[#2c2c30] pb-8 rounded-[.6rem] lg:rounded-[1rem] text-[1rem] lg:text-[1.05rem]">
      <h1 className="text-[2rem] lg:text-[2.25rem] font-[700]">
        {props.title}
      </h1>
      <p>{props.info}</p>
      <p className="mt-8">{props.desc}</p>
      <ul className="list-disc ml-8">
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
        <li>{props.li4}</li>
      </ul>
      <p className="text-[1.6rem] font-[700]">{props.price}</p>
      <button className="bg-[#6968f7] h-[2.8rem] w-[7.5rem] rounded-[3rem] m-[auto] hover:bg-white hover:text-[#6968f7]">
        Let's go
      </button>
    </div>
  );
};

export default Map2Structure;
