import React from "react";

const Button = ({ calculate }) => {
  return (
    <button className="btn" type="buttton" onClick={calculate}>
      Oblicz
    </button>
  );
};

export default Button;
