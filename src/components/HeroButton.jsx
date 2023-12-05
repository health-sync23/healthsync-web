import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const HeroButton = ({ path, title, customClass }) => {
  return (
    <Link className={customClass} to={path}>
      {title}
    </Link>
  );
};

export default HeroButton;
