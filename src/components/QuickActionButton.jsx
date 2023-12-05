import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const QuickActionButton = ({ path, title }) => {
  return (
    <Link
      className={`border ${styles.border.primary} p-3 rounded-lg text-center font-light`}
      to={path}
    >
      {title}
    </Link>
  );
};

export default QuickActionButton;
