import React from 'react';
import navImg from "../../assets/logo.png";

import coin from "../../assets/DoubleDollar.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
      <div className="flex-1">
        <img src={navImg} alt="" className="w-12 h-12" />
      </div>
      <div className="flex items-center">
        <div className="flex gap-4">
          <span>{availableBalance}</span>
          <span>coin</span>
          <img src={coin}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;