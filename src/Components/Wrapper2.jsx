import React from "react";
import Map2 from "./Map2";
import "./Wrapper2.css";

const Wrapper2 = () => {
  return (
    <div className="second">
      <section>
        <h1 className="w-fit text-[4rem] font-bold mx-[auto]">
          Let's get<span className="text"> moving</span>
        </h1>
      </section>
      <Map2 />
    </div>
  );
};

export default Wrapper2;
