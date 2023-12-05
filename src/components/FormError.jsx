import React from "react";
import { HiExclamationCircle } from "react-icons/hi";
import { BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import { clearError } from "../features/createPatientSlice";

const FormError = ({ text, customError, customReset }) => {
  // const { isError } = useSelector((state) => state.createpatient);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(customReset());
  }

  return (
    <div
      className={
        customError
          ? "absolute top-2 right-2 flex flex-col items-center justify-center h-[100px] bg-red-500 text-white p-6 rounded-xl"
          : "hidden"
      }
    >
      <span
        className="absolute top-0 right-0 p-2 text-xl font-semibold cursor-pointer"
        onClick={handleClick}
      >
        <BsX />
      </span>
      <span className="items-start">
        <HiExclamationCircle />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default FormError;
