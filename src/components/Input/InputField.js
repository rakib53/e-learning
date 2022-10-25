import React from "react";

const Input = ({ type, name, placeholder, handleChange }) => {
  return <input type={type} name={name} placeholder={placeholder} />;
};

export default Input;
