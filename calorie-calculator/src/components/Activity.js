import React from "react";
import Option from "./Option";

const Activity = ({ onChange, activity }) => {
  // const attributesDisabledHidden = {
  //   value: "",
  //   disabled: "",
  //   selected: "",
  //   hidden: "",
  // };

  const options = [
    { tittle: "leżący w łóżku, bardzo niska aktywność", pal: 1.2 },
    { tittle: "leżący w łóżku, bardzo niska aktywność", pal: 1.3 },
    { tittle: "praca siedząca, minimalna aktywność w ciągu dnia", pal: 1.4 },
    {
      tittle:
        "praca siedzącą, średnia akwtyność, lekkie treningi 3x w tygodniu",
      pal: 1.5,
    },
    { tittle: "sporo ruchu w ciągu dnia, lekkie treningi", pal: 1.6 },
    { tittle: "praca fizyczna, lekkie treningi", pal: 1.75 },
    { tittle: "praca fizyczna, ciężkie treningi", pal: 1.2 },
  ];

  return (
    <select
      onChange={onChange}
      value={activity}
      className="select"
      placeholder="Wybierz twoją aktywność"
    >
      {options.map((option, index) => {
        return (
          <Option value={option.pal} optionText={option.tittle} key={index} />
        );
      })}
    </select>
  );
};

export default Activity;
