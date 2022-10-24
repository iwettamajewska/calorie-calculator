import "./App.css";
import Gender from "./components/Gender";
import Weight from "./components/Weight";
import Height from "./components/Height";
import Age from "./components/Age";
import Activity from "./components/Activity";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const showInputValueWeight = (e) => {
    const peekaBoo = e.target.value;
    const peekaBooTwo = Number(peekaBoo * 10);
    return peekaBooTwo;
    // Number(peekaBoo * 10);
    // console.log(Number(e.target.value) * 10);
    // console.log(Number(peekaBoo * 10));
  };

  const showInputValueHeight = (e) => {
    console.log(Number(e.target.value) * 6.25);
  };

  const showInputValueAge = (e) => {
    console.log(Number(e.target.value) * 5);
    return Number(e.target.value) * 5;
  };

  const showCalculate = ({ peekaBooTwo }) => {
    console.log("clicked button");
    console.log(Number({ peekaBooTwo }) * 10);
    console.log({ showInputValueAge });
  };

  // const roboczeObliczanie = () => {
  //   return showInputValueWeight + showInputValueHeight + showInputValueAge;
  //   console.log({peelaBoo});
  // };

  return (
    <div>
      <h1>Kalkulator CPM - Oblicz swoje CPM (Całkowita Przemiana Materii)</h1>
      <p>Wybierz płeć</p>
      <Gender />
      <p>Masa ciała (kg)</p>
      <Weight inputValueWeight={showInputValueWeight} />
      <p>Wzrost (cm)</p>
      <Height inputValueHeight={showInputValueHeight} />
      <p>Wiek</p>
      <Age inputValueAge={showInputValueAge} />
      <p>Wybierz Twoją aktywność</p>
      <Activity />
      <Button calculate={showCalculate} />
      <Result />
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
