import React from "react";

const Button = ({ onClick, calculate }) => {
  return (
    <button onClick={onClick} className="btn" type="buttton">
      Oblicz
    </button>
  );
};

export default Button;
