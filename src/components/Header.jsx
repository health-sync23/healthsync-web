import React from "react";
import Logo from "./Logo";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";
import { styles } from "../constants/styles";

const Header = () => {
  return (
    <header className={`p-4  ${styles.bg.primary} `}>
      <nav className="flex justify-between items-center">
        <Logo />
        <HiMenu className={`${styles.text.light} text-xl`} />
        
      </nav>
    </header>
  );
};

export default Header;
