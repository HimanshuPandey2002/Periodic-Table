import "./App.css";
import Card from "./components/Card";
import react, { useEffect, useState } from "react";

function App() {
  const [elements, setElements] = useState([]);
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);

  const elementFetcher = async () => {
    const response = await fetch("https://neelpatel05.pythonanywhere.com/", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => error);
    const data = response;
    console.log(data);
    setElements(data);
  };

  useState(() => {
    elementFetcher();
  }, []);

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
            atomNum={element.atomicNumber}
            atomicMass={element.atomicMass}
            group={element.groupBlock}
            symbol={element.symbol}
            config={element.electronicConfiguration}
            elementName={element.name}
            Boil={element.boilingPoint}
            Melt={element.meltingPoint}
            BondingType={element.bondingType}
            atomicRadius={element.atomicRadius}
            Density={element.density}
            IonEnergy={element.ionizationEnergy}
            Oxidation={element.oxidationStates}
            State={element.standardState}
            affinity={element.electronAffinity}
            negativity={element.electronegativity}
            key={element.atomicNumber}
            value={value}
            disabletile={
              value === "" ? false : element.groupBlock !== value ? true : false
            }
          />
        );
    });
  };

  const getElementsSp = (low, high) => {
    return elements.map((element) => {
      if (element.atomicNumber >= low && element.atomicNumber <= high)
        // setTimeout(() => {}, 1);
        return (
          <Card
            atomNum={element.atomicNumber}
            atomicMass={element.atomicMass}
            group={element.groupBlock}
            symbol={element.symbol}
            config={element.electronicConfiguration}
            elementName={element.name}
            Boil={element.boilingPoint}
            Melt={element.meltingPoint}
            BondingType={element.bondingType}
            atomicRadius={element.atomicRadius}
            Density={element.density}
            IonEnergy={element.ionizationEnergy}
            Oxidation={element.oxidationStates}
            State={element.standardState}
            affinity={element.electronAffinity}
            negativity={element.electronegativity}
            key={element.atomicNumber}
            value={value}
            disabletile={
              value === "" ? false : element.groupBlock !== value ? true : false
            }
          />
        );
    });
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

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

  return (
    <div className="App">
      <header className="header">
        <h1 className="head">Periodic Table</h1>
        <div className="btns">
          <Button
            changeValue={(e) => handleValue(e)}
            value=""
            color="white"
            name="All"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="metal"
            color="palegreen"
            name="Metal"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="nonmetal"
            color="red"
            name="Non Metal"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="noble gas"
            color="blue"
            name="Noble Gas"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="alkali metal"
            color="green"
            name="Alkali Metal"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="alkaline earth metal"
            color="yellow"
            name="Alkaline Earth Metal"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="metalloid"
            color="pink"
            name="Metalloids"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="halogen"
            color="teal"
            name="Halogen"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="transition metal"
            color="aqua"
            name="Transition Metal"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="lanthanoid"
            color="blueviolet"
            name="Lanthanoids"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="actinoid"
            color="cornflowerblue"
            name="Actinoids"
          />
          <Button
            changeValue={(e) => handleValue(e)}
            value="post-transition metal"
            color="darkorange"
            name="Post-Transition Metal"
          />
        </div>
      </header>

      <div className="table">
        <div className="row 1">
          <div className="left">{getElements(1, 1)}</div>
          <div className="right">{getElements(2, 2)}</div>
        </div>
        <div className="row 2">
          <div className="left">{getElements(3, 4)}</div>
          <div className="right">{getElements(5, 10)}</div>
        </div>
        <div className="row 3">
          <div className="left">{getElements(11, 12)}</div>
          <div className="right">{getElements(13, 18)}</div>
        </div>
        <div className="row 4">{getElements(19, 36)}</div>
        <div className="row 5">{getElements(37, 54)}</div>
        <div className="row 6">
          <div className="left">{getElements(55, 56)}</div>
          <div className="right">{getElements(72, 86)}</div>
        </div>
        <div className="row 7">
          <div className="left">{getElements(87, 88)}</div>
          <div className="right">{getElements(104, 118)}</div>
        </div>

        <div className="sub-table">
          <div className="row">{getElementsSp(57, 71)}</div>
          <div className="row">{getElementsSp(89, 103)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
