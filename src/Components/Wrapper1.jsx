import React from "react";
import Map1 from "./Map1";
import "./Wrapper1.css";

const Wrapper1 = () => {
  return (
    <div className="first">
      <section>
        <h1 className="w-[100%] lg:w-[70%] leading-[2.5rem] lg:leading-[4rem] text-[2.5rem] lg:text-[4rem] font-bold">
          A <span className="text"> turn-key</span> approach to continuous user
          discovery
        </h1>
        <p className="mt-[2rem] text-[1.1rem] lg:text-[1.2rem] font-semibold text-[#c2c2c2]">
          You've got a lot to take on, so we take user research off your plate.
        </p>
      </section>
      <main className="mt-[4rem]">
        <p className="text-[1.5rem] font-bold">How we work</p>
        <Map1 />
      </main>
    </div>
  );
};

export default Wrapper1;
