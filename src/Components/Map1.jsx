import React from "react";
import Map1Structure from "./Map1Structure";

const Map1 = () => {
  const arr1 = [
    {
      img: "/image/speed.svg",
      title: "Continuous discovery",
      info: "We do users interviews with your customers or prospectives each week, so your team get constant input to their decisions. If a new question pops up, you will start getting answers from customers in less than a week.",
    },
    {
      img: "/image/partner.svg",
      title: "Partnership",
      info: "We don't deliver a report and walk away. We work hand in hand with your team, meeting regularly to understand the newest changes in direction and burning questions that need answering",
    },
    {
      img: "/image/run.svg",
      title: "No hurdles",
      info: "Know how much it'll cost before you even email us. Pay with your credit card, or we can send an invoice. Pause the engagement with as little as an email. We want it to be as easy as possible to work with us.",
    },
    {
      img: "/image/heart.svg",
      title: "Build customer empathy",
      info: "Empathy with your customers doesn't happen in a day. Our work creates an ever-deepening understanding of your customers within your product teams. We produce artefacts that your teams will refer to and share again and again.",
    },
  ];
  return (
    <div className="mt-[2rem] flex gap-8">
      {arr1.map((arr, i) => (
        <Map1Structure
          key={i}
          img={arr.img}
          title={arr.title}
          info={arr.info}
        />
      ))}
    </div>
  );
};

export default Map1;
