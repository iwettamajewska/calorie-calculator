import React from "react";

const Input = ({ placeholder, min, onInput }) => {
  return (
    <input
      type="number"
      min={min}
      required
      // value="100"
      placeholder={placeholder}
      className="form-control shadow amount-of-money"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      onInput={onInput}
    />
  );
};

export default Input;
