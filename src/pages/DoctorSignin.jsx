import React from "react";
import { construction } from "../assets";
import { Link } from "react-router-dom";
import { styles } from "../constants/styles";

const DoctorSignin = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <p>
        This page is currently under contruction 🚧. kindly check back later.🙂
      </p>
      <img src={construction} alt="" className="w-[500px]" />
      <Link to="/" className={`${styles.text.primary}`}>
        Go back
      </Link>
    </section>
  );
};

export default DoctorSignin;
