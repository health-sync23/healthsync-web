import React, { useState } from "react";
import { login } from "../assets";
import { Input } from "../components";
import { styles } from "../constants/styles";
import { Link } from "react-router-dom";

const PatientLogin = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleUserLogin(e) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <div className="min-h-screen w-full p-6 flex flex-col gap-6 md:justify-center md:items-center">
      <h3 className="text-xl uppercase font-semibold">Patient Login</h3>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-center max-h-screen lg:max-w-[1000px] lg:mx-auto">
        <form
          action=""
          className="w-full flex flex-col gap-4 lg:p-6"
          onSubmit={handleUserLogin}
        >
          <label htmlFor="email">
            <Input
              type="email"
              placeholder="Email"
              customClass={`p-2 border ${styles.border.dark} w-full outline-[#99F2E2]`}
              value={form.email}
              onChange={handleInputChange}
              name="email"
            />
          </label>
          <label htmlFor="password">
            <Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              customClass={`p-2 border ${styles.border.dark} w-full outline-[#99F2E2]`}
              value={form.password}
              onChange={handleInputChange}
              name="password"
            />
          </label>
          <span
            className={`flex justify-between items-center font-light text-xs ${styles.text.primary}`}
          >
            <Link>Forgot email</Link>
            <Link>Forgot password</Link>
          </span>
          <button
            type="submit"
            className={`${styles.bg.primary} p-2 rounded-lg`}
          >
            Login
          </button>
        </form>
        <figure className="w-full">
          <img src={login} alt="login-svg" />
        </figure>
      </div>
      <p className="text-lg font-light text-center">
        Don't have account?{" "}
        <Link className={`${styles.text.primary}`} to="/enroll-patient">
          Enroll now
        </Link>{" "}
      </p>
    </div>
  );
};

export default PatientLogin;
