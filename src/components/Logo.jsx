import React from "react";
import { logo } from "../assets";
import { styles } from "../constants/styles";

const Logo = () => {
  return (
    <span className="flex items-center gap-2">
      <img src={logo} alt="" className="w-[30px]" />
      <h1
        className={`${styles.text.light} flex items-center gap-1 text-xl md:text-2xl font-bold`}
      >
        Health <span className={`${styles.text.alt}`}>Sync</span>
      </h1>
    </span>
  );
};

export default Logo;
