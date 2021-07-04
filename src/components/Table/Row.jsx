import React from "react";
import Card from "./Card/Card";

function Row({
  left1,
  right1,
  left2,
  right2,
  elements,
  value,
  color,
  ModalValue,
}) {
  const getElements = (low, high) => {
    return elements.map((element) => {
      if (
        (element.atomicNumber >= 57 && element.atomicNumber <= 71) ||
        (element.atomicNumber >= 89 && element.atomicNumber <= 103)
      )
        return null;
      else if (element.atomicNumber >= low && element.atomicNumber <= high)
        return (
          <Card
            colours={color}
            atomNum={element.atomicNumber}
            atomicMass={element.atomicMass}
            symbol={element.symbol}
            elementName={element.name}
            key={element.atomicNumber}
            value={value}
            group={element.groupBlock}
            ModalValue={ModalValue}
            disabletile={
              value === "" ? false : element.groupBlock !== value ? true : false
            }
          />
        );
    });
  };

  return (
    <div className="row">
      <div className="left">{getElements(left1, right1)}</div>
      <div className="right">{getElements(left2, right2)}</div>
    </div>
  );
}

export default Row;
