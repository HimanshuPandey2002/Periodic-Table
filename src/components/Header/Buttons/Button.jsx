import React from "react";
import "../../css/Header/Button.css";

const Button = ({ color, name, value, changeValue }) => {
  return (
    <button
      className="btn"
      value={value}
      style={{ color: `${color}`, borderColor: `${color}` }}
      onClick={changeValue}
    >
      {name}
    </button>
  );
};

export default Button;
