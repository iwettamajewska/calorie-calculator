import "./App.css";
import Gender from "./components/Gender";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
// import SelectYesorNo from "./components/SelectYesorNo";
import { useState } from "react";
// import Slot from "./components/Slot";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState("female");
  const [activity, setActivity] = useState(
    "leżący w łóżku, bardzo niska aktywność"
  );
  const numberCalculateWoman = 161;
  const numerCalculateMen = 5;

  const getInputValueWeight = (e) => {
    console.log(Number(e.target.value) /* * 10 */);
    //próbuję tworzyć zmienną / propsa, żeby przekazać późnmiej dane do innej funkcji:
    // const peekaBoo = e.target.value;
    // const peekaBooTwo = Number(peekaBoo * 10);
    // return peekaBooTwo;
    // Number(peekaBoo * 10);
    // console.log(Number(peekaBoo * 10));
    console.log(weight);
  };

  const getInputValueHeight = (e) => {
    console.log(Number(e.target.value) /* * 6.25 */);
    console.log(height);
  };

  const getInputValueAge = (e) => {
    console.log(Number(e.target.value) /* * 5 */);
    console.log(age);
    return Number(e.target.value) /* * 5 */;
  };

  const getGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const getActivity = (e) => {
    setActivity(Number(e.target.value));
    console.log(activity);
  };

  const getCalculate = () => {
    console.log("clicked button");
    console.log(Number(weight));
    console.log(Number(setWeight));
    // const result = weight + height + age;
    // console.log(result);
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
      <Input placeholder={77} min={1} onInput={getInputValueWeight} />
      <p>Wzrost (cm)</p>
      <Input placeholder={78} min={2} onInput={getInputValueHeight} />
      <p>Wiek</p>
      <Input placeholder={79} min={3} onInput={getInputValueAge} />
      <p>Wybierz Twoją aktywność</p>
      <Activity onChange={getActivity} activity={activity} />
      <Button onClick={getCalculate} /* calculate={getCalculate} */ />
      <Result /* result={getCalculate} */ />
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
