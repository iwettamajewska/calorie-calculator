import React from "react";

const Height = ({ inputValueHeight }) => {
  return (
    <input
      type="number"
      min="120"
      // value="100"
      placeholder="100"
      className="form-control shadow amount-of-money"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      onInput={inputValueHeight}
    />
  );
};

export default Height;
