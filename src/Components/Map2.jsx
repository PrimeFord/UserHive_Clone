import React from "react";
import Map2Structure from "./Map2Structure";

const Map2 = () => {
  let arr2 = [
    {
      title: "Small",
      info: "Best for partnering with a single product team",
      desc: "4 User insight packages each month",
      li1: "interviews with 4 users",
      li2: "Expert analysis of each interview",
      li3: "Monthly team call to review and consolidate understanding",
      li4: "Summary shared as an interview snapshot",
      price: "€1199 per month",
    },
    {
      title: "Medium",
      info: "Best for partnering with a multiple product teams",
      desc: "8 User insight packages each month",
      li1: "interviews with 8 users",
      li2: "Expert analysis of each interview",
      li3: "Monthly team call to review and consolidate understanding",
      li4: "Summary shared as an interview snapshot",
      price: "€2149 per month",
    },
    {
      title: "Large",
      info: "Looking for even more of the good stuff?",
      desc: "We can work on a custom engagement, just reach out.",
    },
  ];
  return (
    <div className="mt-[4rem] p-6 flex gap-8 bg-[#131415]">
      {arr2.map((arr, i) => (
        <Map2Structure
          key={i}
          title={arr.title}
          info={arr.info}
          desc={arr.desc}
          li1={arr.li1}
          li2={arr.li2}
          li3={arr.li3}
          li4={arr.li4}
          price={arr.price}
        />
      ))}
    </div>
  );
};

export default Map2;
