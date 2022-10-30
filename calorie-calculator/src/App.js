import "./App.css";
import Gender from "./components/Gender";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState(-161);
  const [activity, setActivity] = useState(1.2);

  const getInputValueWeight = (e) => {
    // console.log(Number(e.target.value));
    setWeight(Number(e.target.value) * 10);
  };

  const getInputValueHeight = (e) => {
    // console.log(Number(e.target.value));
    setHeight(Number(e.target.value) * 6.25);
    // console.log(height);
  };

  const getInputValueAge = (e) => {
    // console.log(Number(e.target.value));
    // console.log(age);
    setAge(Number(e.target.value) * 5);
  };

  const getGender = (e) => {
    // console.log(e.target.value);
    setGender(Number(e.target.value));
  };

  const getActivity = (e) => {
    setActivity(Number(e.target.value));
    // console.log(activity);
  };

  const getCalculate = () => {
    // console.log("clicked button");
    // console.log(Number(weight));

    const sum = (weight + height - age + activity + gender) * activity;
    console.log(sum);

    setResult(sum);
  };

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
      <Result result={result} /* result={getCalculate} */ />
    </div>
  );
}

export default App;

// Activity:
// 1,2
// 1,3
// 1,4
// 1,5
// 1,6
// 1,75
// 2
// 2,2
