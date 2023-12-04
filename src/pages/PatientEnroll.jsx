import React, { useState } from "react";
import { Input } from "../components";
import { styles } from "../constants/styles";
import Modal from "../components/Modal";
import { HiCheck, HiCheckCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../assets";

const PatientEnroll = () => {
  const navigate = useNavigate();
  const initialState = {
    fullname: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePatientEnroll(e) {
    e.preventDefault();
    console.log(form);
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        navigate("/patient-signin");
      }, 2000);
    }, 2000);
  }
  return (
    <div className="min-h-screen w-full lg:max-w-[1000px] lg:mx-auto flex flex-col items-center justify-center">
      <h3 className="capitalize text-xl md:text-2xl">
        Create new patient account
      </h3>
      <div className="p-6 flex flex-col lg:flex-row lg:items-center">
        <form
          action=""
          className="flex flex-col gap-6 w-full"
          onSubmit={handlePatientEnroll}
        >
          <label htmlFor="">
            <Input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={form.fullname}
              onChange={handleInputChange}
              customClass={`border w-full p-2 outline-[#99F2E2] ${styles.border.dark}`}
            />
          </label>
          <label htmlFor="">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              customClass={`border w-full p-2 outline-[#99F2E2] ${styles.border.dark}`}
            />
          </label>
          <label htmlFor="">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              customClass={`border w-full p-2 outline-[#99F2E2] ${styles.border.dark}`}
            />
          </label>
          <button
            type="submit"
            className={`${styles.bg.primary} p-2 rounded-lg`}
          >
            Enroll Patient
          </button>
        </form>
        <figure className="w-full">
          <img src={login} alt="" />
        </figure>
        <div>
          {success && (
            <Modal
              icon={<HiCheckCircle />}
              message="Account created succesfully."
            />
          )}
        </div>
      </div>
      <p className="text-center flex gap-2 text-xl font-light">
        Have an account already?
        <Link to="/patient-signin" className={`${styles.text.primary}`}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default PatientEnroll;
