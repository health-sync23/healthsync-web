import React, { useState } from "react";
import Logo from "./Logo";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";
import { styles } from "../constants/styles";
import { navLinks } from "../constants";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const mobileLinks = navLinks.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function closeMenuOnClick() {
    setToggle(false);
  }
  return (
    <header className={`p-4  ${styles.bg.dark} `}>
      <nav className="flex justify-between items-center">
        <Logo />

        {/* hamburger button */}
        <span onClick={handleToggle}>
          {!toggle ? (
            <HiMenu className={`${styles.text.light} text-xl sm:hidden`} />
          ) : (
            <HiMenuAlt2 className={`${styles.text.light} text-xl sm:hidden`} />
          )}
        </span>

        {/* mobile menu */}
        <ul
          className={!toggle ? "hidden" : `${styles.text.light} absolute top-0`}
        >
          {mobileLinks}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
