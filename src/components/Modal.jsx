import React from "react";

function Modal({
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
  isDisable,
  color,
}) {
  return (
    <div
      className={isDisable ? "disable" : "modal"}
      style={{ borderColor: `${color}` }}
    >
      <div className="close">close</div>
      <div className="detail">
        <h1 className="element_Symbol">{symbol}</h1>
        <p className="element_name">{elementName}</p>
      </div>
      <div className="field">
        <span style={{ color: `${color}` }}>Atomic Number: </span>
        <p> {atomNum}</p>
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
        <span style={{ color: `${color}` }}>Electronic Configuration: </span>
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
  );
}

export default Modal;
