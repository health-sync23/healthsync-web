import React from "react";

import HeroButton from "./HeroButton";
import { styles } from "../constants/styles";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section className="p-6 min-h-screen flex flex-col gap-6 md:flex-row ">
      <div className="flex flex-col gap-6 w-full pt-5">
        <h3
          className={`font-semibold text-xl md:text-xl lg:text-2xl leading-5 ${styles.text.primary}`}
        >
          HealthSync:
          <span className={`pl-2 ${styles.text.dark}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
          </span>
        </h3>
        <p className="text-sm font-extralight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nostrum
          dolorem soluta esse placeat consequatur blanditiis officia impedit
          temporibus nemo distinctio, voluptatum non error corrupti ab. Ullam
          possimus dolorem consequatur?
        </p>
        <div className="flex gap-6">
          <HeroButton
            title="Patient"
            path="/patient-signin"
            customClass={`${styles.bg.primary} px-7 py-2 rounded-lg font-extralight text-sm md:text-lg`}
          />
          <HeroButton
            title="Health Pro"
            path="/doctor-signin"
            customClass={`border ${styles.border.primary} px-4 py-2 rounded-lg font-extralight text-sm md:text-lg`}
          />
        </div>
      </div>
      <figure className="w-full">
        <img src={hero} alt="hero-image" className="" />
      </figure>
    </section>
  );
};

export default Hero;
