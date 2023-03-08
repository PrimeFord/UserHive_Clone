import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 py-[5rem] bg-black flex flex-col gap-6">
      <div className="h-[2.5rem] w-[100%] flex items-center font-bold text-[1.1rem]">
        <img className="h-[100%]" src="/image/logo.svg" alt="" />
        <span>Userhive</span>
      </div>
      <p>Copyright © 2023 Userhive. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
