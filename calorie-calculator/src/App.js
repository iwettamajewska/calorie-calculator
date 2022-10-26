import "./App.css";
import Gender from "./components/Gender";
import Weight from "./components/Weight";
import Height from "./components/Height";
import Age from "./components/Age";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
// import SelectYesorNo from "./components/SelectYesorNo";
import { useState } from "react";
import Slot from "./components/Slot";

function App() {
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState("female");

  const getInputValueWeight = (e) => {
    console.log(Number(e.target.value) * 10);
    //próbuję tworzyć zmienną / propsa, żeby przekazać późnmiej dane do innej funkcji:
    // const peekaBoo = e.target.value;
    // const peekaBooTwo = Number(peekaBoo * 10);
    // return peekaBooTwo;
    // Number(peekaBoo * 10);
    // console.log(Number(peekaBoo * 10));
    console.log(weight);
  };

  const getInputValueHeight = (e) => {
    console.log(Number(e.target.value) * 6.25);
  };

  const getInputValueAge = (e) => {
    console.log(Number(e.target.value) * 5);
    return Number(e.target.value) * 5;
  };

  const getGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const getCalculate = ({ peekaBooTwo }) => {
    console.log("clicked button");
    console.log(Number({ peekaBooTwo }) * 10);
    console.log({ getInputValueAge });
    const result = weight;
    return result;

    // mogę też result trzymać jako stan:
    setResult(result);
  };

  // const roboczeObliczanie = () => {
  //   return getInputValueWeight + getInputValueHeight + getInputValueAge;
  //   console.log({peelaBoo});
  // };

  return (
    <div>
      <h1>Kalkulator CPM - Oblicz swoje CPM (Całkowita Przemiana Materii)</h1>
      <p>Wybierz płeć</p>
      <Gender onChange={getGender} />
      <p>Masa ciała (kg)</p>
      <Weight inputValueWeight={getInputValueWeight} />
      <p>Wzrost (cm)</p>
      <Height inputValueHeight={getInputValueHeight} />
      <p>Wiek</p>
      <Age inputValueAge={getInputValueAge} />
      <p>Wybierz Twoją aktywność</p>
      <Activity />
      <Button calculate={getCalculate} />
      <Result /*result={getCalculate} */ />
      <p>zaimportowane komponenty input</p>
      <Input placeholder={77} min={2} inputValueWeight={getInputValueWeight} />
      <Input placeholder={78} min={6} inputValueHeight={getInputValueHeight} />
      <Input placeholder={79} min={9} inputValueAge={getInputValueAge} />
      <Slot />
    </div>
  );
}

export default App;

// PPM (kobiety) =  (10 x masa ciała [kg])+(6,25 x wzrost [cm])-(5 x [wiek]) – 161

// PPM (mężczyźni) = (10 x masa ciała [kg])+(6, 25 x wzrost [cm])-(5 x [wiek]) + 5

// Activity:
// 1,2
// 1,3
// 1,4
// 1,5
// 1,6
// 1,75
// 2
// 2,2
