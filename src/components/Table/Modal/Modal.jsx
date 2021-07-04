import React, { useEffect } from "react";
import Field from "./Field";

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
  color,
  disable,
}) {
  return (
    <div className={"modal-container"}>
      <div className="modal" style={{ borderColor: `${color}` }}>
        <div className="close" onClick={disable} style={{ color: `${color}` }}>
          +
        </div>
        <div className="detail">
          <h1 className="element_Symbol">{symbol}</h1>
          <p className="element_name">{elementName}</p>
        </div>
        <Field name="Atomic Number" color={color} property={atomNum} />
        <Field name="Atomic Mass" color={color} property={atomicMass} />
        <Field name="Atomic Radius" color={color} property={atomicRadius} />
        <Field name="Boiling Point" color={color} property={Boil} />
        <Field name="Melting Point" color={color} property={Melt} />
        <Field name="Bonding Type" color={color} property={BondingType} />
        <Field name="Density" color={color} property={Density} />
        <Field name="Electron Affinity" color={color} property={affinity} />
        <Field name="Electron Negativity" color={color} property={negativity} />
        <Field
          name="Electronic Configuration"
          color={color}
          property={config}
        />
        <Field name="Group Block" color={color} property={group} />
        <Field name="Ionization Energy" color={color} property={IonEnergy} />
        <Field name="Oxidation State" color={color} property={Oxidation} />
        <Field name="Standard State" color={color} property={State} />
      </div>
    </div>
  );
}

export default Modal;
