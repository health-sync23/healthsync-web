import React, { useEffect, useState } from "react";
import { FormError, Input } from "../components";
import { styles } from "../constants/styles";
import Modal from "../components/Modal";
import { HiCheckCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { clearError, createPatient } from "../features/createPatientSlice";
const PatientEnroll = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    fullname: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const { isCreated, isLoading, isError } = useSelector(
    (state) => state.createpatient
  );

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
    dispatch(createPatient(form));
  }

  useEffect(() => {
    if (isCreated) {
      setTimeout(() => {
        navigate("/patient-signin");
      }, 2000);
    }
  }, [isCreated]);

  return (
    <div className="min-h-screen w-full p-6 flex flex-col gap-6 md:justify-center md:items-center">
      <h3 className="text-xl uppercase font-semibold md:text-2xl">
        Create account
      </h3>
      <div className=" flex flex-col lg:flex-row lg:items-center">
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
              autoComplete="off"
            />
          </label>
          {/* error */}
          <div>
            {isError && (
              <FormError
                text={isError}
                customError={isError}
                customReset={clearError}
              />
            )}
          </div>
          <button
            type="submit"
            className={`${styles.bg.primary} p-2 rounded-lg`}
          >
            {isLoading ? "Creating Account..." : " Enroll Patient"}
          </button>
        </form>
        <figure className="w-full">
          <img src={create} alt="" />
        </figure>
        <div>
          {isCreated && (
            <Modal
              icon={<HiCheckCircle />}
              message="Account created succesfully."
            />
          )}
        </div>
      </div>
      <p className=" flex gap-2 text-xs font-light items-center justify-center">
        Have an account already?
        <Link to="/patient-signin" className={`${styles.text.primary}`}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default PatientEnroll;
