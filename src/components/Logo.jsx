import React from "react";
import { logo2 } from "../assets";
import { styles } from "../constants/styles";

const Logo = () => {
  return (
    <span className="flex items-center gap-2 cursor-pointer">
      <img src={logo2} alt="" className="w-[40px]" />
      <span className="flex flex-col leading-3">
        <h1
          className={`${styles.text.alt} flex items-center gap-1 text-xl md:text-2xl font-bold`}
        >
          Health <span className={`${styles.text.dark}`}>Sync</span>
        </h1>
        <p className={`text-xs md:text-sm font-extralight ${styles.text.dark}`}>
          Fostering Adherance...
        </p>
      </span>
    </span>
  );
};

export default Logo;
