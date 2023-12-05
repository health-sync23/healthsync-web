import React, { useState } from "react";
import Logo from "./Logo";
import { HiMenu, HiMenuAlt2 } from "react-icons/hi";
import { styles } from "../constants/styles";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const mobileLinks = navLinks.map((link) => {
    return (
      <li
        key={link.id}
        className={`${styles.hover.primary} cursor-pointer`}
        onClick={closeMenuOnClick}
      >
        <Link to={link.path}>{link.title}</Link>
      </li>
    );
  });

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function closeMenuOnClick() {
    setToggle(false);
  }
  return (
    <header className={`p-4  ${styles.bg.light} bg-opacity-20 `}>
      <nav className="flex justify-between items-center">
        <Logo />

        {/* hamburger button */}
        <span onClick={handleToggle}>
          {!toggle ? (
            <HiMenu className={`${styles.text.dark} text-xl sm:hidden`} />
          ) : (
            <HiMenuAlt2 className={`${styles.text.dark} text-xl sm:hidden`} />
          )}
        </span>

        {/* mobile menu */}
        <ul
          className={
            !toggle
              ? "hidden"
              : `${styles.text.dark} absolute top-[75px] left-0 ${styles.bg.light} bg-opacity-90 w-full h-screen flex flex-col items-center justify-center gap-8 ${styles.font.secondary}`
          }
        >
          {mobileLinks}
        </ul>

        {/* desktop menu */}
        <ul className={`hidden md:flex md:gap-4 font-light `}>{mobileLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
