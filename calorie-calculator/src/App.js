import "./App.css";
import Gender from "./components/Gender";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
import Explanation from "./Explanation";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState(0);
  const [activity, setActivity] = useState(0);
  const [error, setError] = useState(false);

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

  const getValidateAndCalculate = () => {
    // console.log("clicked button");
    // console.log(Number(weight));
    const sum = (
      (weight + height - age + activity + gender) *
      activity
    ).toFixed(0);
    console.log(sum);

    if (!weight || !height || !age || gender || !activity) {
      setError(true);
    }
    setResult(`${sum} kcal`);
  };

  // const showText = ({ sum, placeholder }) => {
  //   sum = 0 ? (placeholder = "Wynik") : sum;
  // };

  // sum = 0 ? (placeholder = "Wynik") : sum;

  return (
    <div className="container">
      <h1 className="top-calculator-cpm-text">Kalkulator CPM</h1>
      <h2 className="top-calculate-text">
        Oblicz swoją całkowitą przemianę materii
      </h2>
      <Gender onChange={getGender} isError={error && !gender} />
      <Input
        placeholder={`Masa ciała (kg)`}
        min={40}
        max={300}
        onInput={getInputValueWeight}
        isError={error && !weight}
      />
      <Input
        placeholder={`Wzrost (cm)`}
        min={140}
        max={250}
        onInput={getInputValueHeight}
        isError={error && !height}
      />
      <Input
        placeholder={`Wiek`}
        min={18}
        max={140}
        onInput={getInputValueAge}
        isError={error && !age}
      />
      <Activity
        onChange={getActivity}
        activity={activity}
        isError={error && !activity}
      />
      <Button
        onClick={getValidateAndCalculate} /* calculate={getCalculate} */
      />
      <Result
        // placeholder={showText}
        result={result} /* result={getCalculate} */
      />
      <Explanation />
      {/* <p isError={error}>{isError && <p>Uzupełnij wszystkie pola</p>}</p> */}
    </div>
  );
}

export default App;
