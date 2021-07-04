import "./App.css";
import react, { useEffect, useState } from "react";
import Colours from "./components/Colours";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Modal from "./components/Table/Modal/Modal";

const Main = () => {
  const [elements, setElements] = useState([]);
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState();
  const [color, setColor] = useState("");

  const elementFetcher = async () => {
    const response = await fetch("https://neelpatel05.pythonanywhere.com/", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => error);
    const data = response;
    setElements(data);
  };

  useEffect(() => {
    elementFetcher();
  }, []);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Header func={handleValue} color={Colours} />
      <Table
        elements={elements}
        value={value}
        color={Colours}
        ModalValue={(num, colour) => {
          setNum(num);
          setColor(colour);
          setShowModal(true);
        }}
      />
      {showModal ? (
        <Modal
          atomNum={elements[num - 1].atomicNumber}
          config={elements[num - 1].electronicConfiguration}
          symbol={elements[num - 1].symbol}
          elementName={elements[num - 1].name}
          atomicMass={elements[num - 1].atomicMass}
          group={elements[num - 1].groupBlock}
          atomicRadius={elements[num - 1].atomicRadius}
          Boil={elements[num - 1].boilingPoint}
          Melt={elements[num - 1].meltingPoint}
          BondingType={elements[num - 1].bondingType}
          Density={elements[num - 1].density}
          IonEnergy={elements[num - 1].ionizationEnergy}
          Oxidation={elements[num - 1].oxidationStates}
          State={elements[num - 1].standardState}
          affinity={elements[num - 1].electronAffinity}
          negativity={elements[num - 1].electronegativity}
          color={color}
          disable={() => setShowModal(false)}
        />
      ) : null}
    </div>
  );
};

export default Main;
