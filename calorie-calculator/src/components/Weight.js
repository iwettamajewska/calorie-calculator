import React from "react";

const Weight = ({ inputValueWeight }) => {
  return (
    <input
      type="number"
      min="40"
      // value="100"
      placeholder="60"
      className="input-weight"
      onInput={inputValueWeight}
    />
  );
};

export default Weight;
