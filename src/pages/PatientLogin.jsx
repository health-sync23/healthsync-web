import React, { useState } from "react";
import { login } from "../assets";
import { Input } from "../components";
import { styles } from "../constants/styles";

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
    <div className="min-h-screen w-full p-6 flex flex-col gap-6">
      <h3 className="text-xl uppercase font-semibold">Patient Login</h3>
      <div className="flex flex-col gap-6">
        <form
          action=""
          className="w-full flex flex-col gap-4"
          onSubmit={handleUserLogin}
        >
          <label htmlFor="email">
            <Input
              type="email"
              placeholder="Email"
              customClass={`p-2 border ${styles.border.primary} w-full outline-[#99F2E2]`}
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
              customClass={`p-2 border ${styles.border.primary} w-full outline-[#99F2E2]`}
              value={form.password}
              onChange={handleInputChange}
              name="password"
            />
          </label>
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
    </div>
  );
};

export default PatientLogin;
