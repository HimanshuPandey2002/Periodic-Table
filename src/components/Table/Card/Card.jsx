import React, { useState, useEffect } from "react";
import "../../css/Card.css";

function Card({
  colours,
  disabletile,
  atomNum,
  elementName,
  atomicMass,
  symbol,
  group,
  ModalValue,
}) {
  const [disable, setDisable] = useState(true);
  const [color, setColor] = useState(colours.all);

  useEffect(() => {
    switch (group) {
      case "nonmetal":
        setColor(colours.nonMetals);
        break;
      case "noble gas":
        setColor(colours.nobleGases);
        break;
      case "alkali metal":
        setColor(colours.alkaliMetals);
        break;
      case "alkaline earth metal":
        setColor(colours.alkalineEarthMetals);
        break;
      case "metalloid":
        setColor(colours.metalloids);
        break;
      case "halogen":
        setColor(colours.halogens);
        break;
      case "metal":
        setColor(colours.metals);
        break;
      case "transition metal":
        setColor(colours.transitionMetals);
        break;
      case "lanthanoid":
        setColor(colours.lanthanoids);
        break;
      case "actinoid":
        setColor(colours.actinoids);
        break;
      case "post-transition metal":
        setColor(colours.postTransitionMetals);
        break;
    }
  }, []);
  return (
    <div
      className={disabletile ? "disable-tile " : "card-container"}
      onClick={() => {
        if (!disabletile) setDisable(false);
        ModalValue(atomNum, color);
      }}
      style={{ borderColor: `${color}` }}
    >
      <div className="card">
        <h3 className="atomicNumber">{atomNum}</h3>
        <h1 className="symbol" style={{ color: `${color}` }}>
          {symbol}
        </h1>
        <p className="name">{elementName}</p>
        <p className="mass">{atomicMass}</p>
      </div>
    </div>
  );
}

export default Card;
