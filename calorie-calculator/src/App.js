import "./App.css";
import Gender from "./components/Gender";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";
import Explanation from "./Explanation";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  // const sum = (weight, height, age, activity, gender) => {
  //   (weight.value + height.value - age.value + gender.value) *
  //   activity.value
  // .toFixed(0);
  // console.log(sum);
  // // setResult(`${sum} kcal`);
  // }

  const onSubmit = (event) => {
    const { weight, height, age, activity, gender } = event.target;
    event.preventDefault();

    const sum = (
      (weight.value + height.value - age.value + gender.value) *
      activity.value
    ).toFixed(0);
    console.log(sum);
    setResult(`${sum} kcal`);
  };

  // const [height, setHeight] = useState(0);
  // const [age, setAge] = useState(0);
  // const [weight, setWeight] = useState(0);
  // const [gender, setGender] = useState(0);
  // const [activity, setActivity] = useState(0);
  // const [error, setError] = useState(false);

  // const getInputValueWeight = (e) => {
  //   setWeight(Number(e.target.value) * 10);
  // };

  // const getInputValueHeight = (e) => {
  //   setHeight(Number(e.target.value) * 6.25);
  // };

  // const getInputValueAge = (e) => {
  //   setAge(Number(e.target.value) * 5);
  // };

  // const getGender = (e) => {
  //   setGender(Number(e.target.value));
  // };

  // const getActivity = (e) => {
  //   setActivity(Number(e.target.value));
  // };

  // const getValidateAndCalculate = () => {
  //   const sum = (
  //     (weight + height - age + activity + gender) *
  //     activity
  //   ).toFixed(0);
  //   console.log(sum);

  //   if (!weight || !height || !age || gender || !activity) {
  //     setError(true);
  //   }
  //   setResult(`${sum} kcal`);
  // };

  return (
    <div className="container">
      <h1 className="top-calculator-cpm-text">Kalkulator CPM</h1>
      <h2 className="top-calculate-text">
        Oblicz swoją całkowitą przemianę materii
      </h2>
      <form onSubmit={onSubmit}>
        <Gender
        // name="gender"
        // isError={error}
        />
        <Input
          placeholder={`Masa ciała (kg)`}
          min={40}
          max={300}
          // onInput={getInputValueWeight}
          // isError={error}
          name="weight"
        />
        <Input
          placeholder={`Wzrost (cm)`}
          min={140}
          max={250}
          // onInput={getInputValueHeight}
          // isError={error}
          name="height"
        />
        <Input
          placeholder={`Wiek`}
          min={18}
          max={140}
          // onInput={getInputValueAge}
          // isError={error}
          name="age"
        />
        <Activity
        // onChange={getActivity}
        // activity={activity}
        // isError={error}
        // name="activity"
        />
        <Button
        // onClick={getValidateAndCalculate}
        /* calculate={getCalculate} */
        />
        <Result
          // placeholder={showText}
          result={result} /* result={getCalculate} */
        />
      </form>
      <Explanation />
      {/* <p isError={error}>{isError && <p>Uzupełnij wszystkie pola</p>}</p> */}
    </div>
  );
}

export default App;
