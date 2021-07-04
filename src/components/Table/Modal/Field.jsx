import React from "react";

function Field({ property, color, name }) {
  return (
    <div className="field">
      <span style={{ color: `${color}` }}>{name}: </span>
      <p> {property}</p>
    </div>
  );
}

export default Field;
