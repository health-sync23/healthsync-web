import React from "react";
import { styles } from "../constants/styles";

const Modal = ({ icon, message }) => {
  return (
    <article
      className={`w-full min-h-screen fixed ${styles.bg.primary} bg-opacity-40 top-0 left-0 grid content-center`}
    >
      <div
        className={`w-full md:w-[450px] md:mx-auto flex flex-col gap-10 items-center justify-center  p-6 rounded-lg ${styles.bg.alt}`}
      >
        <span className="text-3xl font-semibold">{icon}</span>
        <p className="text-xl font-light">{message}</p>
      </div>
    </article>
  );
};

export default Modal;
