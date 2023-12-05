import React from "react";
import { styles } from "../constants/styles";

const MedicationCard = ({ title, days, percent }) => {
  return (
    <div
      className={`flex flex-col gap-4 ${styles.bg.primary} bg-opacity-40 p-4 w-[100px] h-[150px] min-w-[150px] rounded-lg items-center justify-center`}
    >
      <span className="bg-white rounded-full text-center p-1 justify-center flex items-center font-extralight ">
        {percent}
      </span>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="whitespace-nowrap font-extralight text-xs">{days}</p>
    </div>
  );
};

export default MedicationCard;
