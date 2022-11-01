import Option from "./Option";

const Activity = ({ onChange, activity }) => {
  // const attributesDisabledHidden = {
  //   value: "",
  //   disabled: "",
  //   selected: "",
  //   hidden: "",
  // };

  const options = [
    // {
    //   tittle: "Wybierz twoją aktywność",
    //   pal: "",
    //   disabled: true,
    //   selected: true,
    //   hidden: true,
    // },
    { tittle: "leżący w łóżku, bardzo niska aktywność", pal: 1.2 },
    { tittle: "leżącyddddd w łóżku, bardzo niska aktywność", pal: 1.3 },
    { tittle: "praca siedząca, minimalna aktywność w ciągu dnia", pal: 1.4 },
    {
      tittle:
        "praca siedzącą, średnia akwtyność, lekkie treningi 3x w tygodniu",
      pal: 1.5,
    },
    { tittle: "sporo ruchu w ciągu dnia, lekkie treningi", pal: 1.6 },
    { tittle: "praca fizyczna, lekkie treningi", pal: 1.75 },
    { tittle: "praca fizyczna, ciężkie treningi", pal: 2.2 },
  ];

  return (
    <select
      onChange={onChange}
      value={activity}
      className="select activity-select"
      placeholder="Wybierz twoją aktywność"
      required
    >
      <option disabled={true} selected={true} hidden={true} value="">
        Wybierz twoją aktywność
      </option>
      {options.map((option, index) => {
        return (
          <Option value={option.pal} optionText={option.tittle} key={index} />
        );
      })}
    </select>
  );
};

export default Activity;
