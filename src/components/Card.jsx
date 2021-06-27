import React, { useEffect, useState } from "react";
import "./css/Card.css";
import Modal from "./Modal";

function Card({
  atomNum,
  config,
  symbol,
  elementName,
  atomicMass,
  group,
  atomicRadius,
  Boil,
  Melt,
  BondingType,
  Density,
  IonEnergy,
  Oxidation,
  State,
  affinity,
  negativity,
  value,
  disabletile,
}) {
  const [color, setColor] = useState("white");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    switch (group) {
      case "nonmetal":
        setColor("red");
        break;
      case "noble gas":
        setColor("blue");
        break;
      case "alkali metal":
        setColor("green");
        break;
      case "alkaline earth metal":
        setColor("yellow");
        break;
      case "metalloid":
        setColor("pink");
        break;
      case "halogen":
        setColor("teal");
        break;
      case "metal":
        setColor("palegreen");
        break;
      case "transition metal":
        setColor("aqua");
        break;
      case "lanthanoid":
        setColor("blueviolet");
        break;
      case "actinoid":
        setColor("cornflowerblue");
        break;
      case "post-transition metal":
        setColor("darkorange");
        break;
    }
  }, [color]);

  return (
    <>
      <div
        className={disabletile ? "disable-tile " : "card-container"}
        onClick={() => {
          if (!disabletile) setDisable(false);
        }}
        style={{ borderColor: `${color}` }}
      >
        <div className="card">
          <h3 className="atomicNumber">{atomNum}</h3>
          <p className="config">{config}</p>
          <h1 className="symbol" style={{ color: `${color}` }}>
            {symbol}
          </h1>
          <p className="name">{elementName}</p>
          <p className="mass">{atomicMass}</p>
        </div>
      </div>
      <div className={disable ? "disable" : "modal-container"}>
        <div className="modal" style={{ borderColor: `${color}` }}>
          <div
            className="close"
            onClick={() => setDisable(true)}
            style={{ color: `${color}` }}
          >
            +
          </div>
          <div className="detail">
            <h1 className="element_Symbol">{symbol}</h1>
            <p className="element_name">{elementName}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Atomic Number: </span>
            <p> {atomNum}</p>{" "}
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Atomic Mass: </span>
            <p>{atomicMass}</p>{" "}
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Atomic Radius: </span>
            <p>{atomicRadius}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Boiling Point: </span>
            <p> {Boil}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Melting Point: </span>
            <p>{Melt}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Bonding Type: </span>
            <p> {BondingType}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Density: </span>
            <p> {Density}</p>{" "}
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Electron Affinity: </span>
            <p>{affinity}</p>{" "}
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Electron Negativity: </span>
            <p> {negativity}</p>{" "}
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>
              Electronic Configuration:{" "}
            </span>
            <p> {config}</p>{" "}
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Group Block: </span>
            <p> {group}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Ionization Energy: </span>
            <p>{IonEnergy}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Oxidation State: </span>
            <p>{Oxidation}</p>
          </div>
          <div className="field">
            <span style={{ color: `${color}` }}>Standard State: </span>
            <p>{State}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
