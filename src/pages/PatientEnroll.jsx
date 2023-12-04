import React from "react";

const PatientEnroll = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="Full Name" />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Email" />
        </label>
        <label htmlFor="">
          <input type="password" placeholder="Password" />
        </label>
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default PatientEnroll;
