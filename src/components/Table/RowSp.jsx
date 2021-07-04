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
  const getElementsSp = (low, high) => {
    return elements.map((element) => {
      if (element.atomicNumber >= low && element.atomicNumber <= high)
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
      <div className="left">{getElementsSp(left1, right1)}</div>
      <div className="right">{getElementsSp(left2, right2)}</div>
    </div>
  );
}

export default Row;
