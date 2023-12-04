import React from "react";

const Input = ({
  customClass,
  type,
  placeholder,
  autoComplete,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      className={customClass}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
