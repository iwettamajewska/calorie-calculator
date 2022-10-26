import React from "react";

const Input = ({
  placeholder,
  min,
  inputValueWeight,
  inputValueHeight,
  inputValueAge,
}) => {
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
      onInput={[inputValueWeight, inputValueHeight, inputValueAge]}
    />
  );
};

export default Input;
