import "./App.css";
import Gender from "./components/Gender";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
import Explanation from "./components/Explanation";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const onSubmit = (event) => {
    const { weight, height, age, activity, gender } = event.target;

    event.preventDefault();

    console.log(typeof activity.value);
    console.log(typeof height.value);
    console.log(typeof weight.value);
    console.log(typeof age.value);
    console.log(typeof gender.value);

    console.log(Number(weight.value));

    const sum =
      (Number(weight.value) * 10 +
        Number(height.value) * 6.25 -
        Number(age.value) * 5 +
        Number(gender.value)) *
      Number(activity.value);

    setResult(`${sum.toFixed()} kcal`);
  };

  return (
    <div className="container">
      <h1 className="top-calculator-cpm-text">Kalkulator CPM</h1>
      <h2 className="top-calculate-text">
        Oblicz swoją całkowitą przemianę materii
      </h2>
      <form onSubmit={onSubmit}>
        <Gender />
        <Input
          placeholder={`Masa ciała (kg)`}
          min={40}
          max={300}
          name="weight"
        />
        <Input placeholder={`Wzrost (cm)`} min={140} max={250} name="height" />
        <Input placeholder={`Wiek`} min={18} max={140} name="age" />
        <Activity />
        <Button />

        <Result result={result} />
      </form>
      <Explanation />
    </div>
  );
}

export default App;
