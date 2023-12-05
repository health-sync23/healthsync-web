import React from "react";
import { styles } from "../constants/styles";

const FooterMenu = ({ icon, title, setActiveTab, activeTab }) => {
  const handleTabClick = () => {
    setActiveTab(title);
    // You can perform additional actions here when a tab is clicked
  };

  return (
    <div
      className={`flex flex-col items-center cursor-pointer ${
        activeTab === title ? styles.text.primary : "text-gray-500"
      }`}
      onClick={handleTabClick}
    >
      <span>{icon}</span>
      <span className="text-xs">{title}</span>
    </div>
  );
};

export default FooterMenu;
