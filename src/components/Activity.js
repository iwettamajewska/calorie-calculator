import Option from "./Option";

const Activity = ({ onChange, activity }) => {
  const options = [
    { tittle: "leżący w łóżku, bardzo niska aktywność", pal: 1.2 },
    { tittle: "praca siedząca, minimalna aktywność w ciągu dnia", pal: 1.3 },
    {
      tittle:
        "praca siedząca, średnia aktywność, lekkie treningi 3x w tygodniu",
      pal: 1.4,
    },
    {
      tittle: "sporo ruchu w ciągu dnia, lekkie treningi",
      pal: 1.5,
    },
    {
      tittle: "sporo ruchu w ciągu dnia, ciężkie, regularne treningi",
      pal: 1.75,
    },
    { tittle: "praca fizyczna, dużo ruchu po pracy", pal: 2 },
    { tittle: "praca fizyczna, lekkie treningi", pal: 2.2 },
    { tittle: "praca fizyczna, ciężkie treningi", pal: 2.4 },
  ];

  return (
    <>
      <select
        name="activity"
        onChange={onChange}
        value={activity}
        className="select activity-select"
        required
      >
        <Option hidden={true} value={""} optionText="Wybierz swoją aktywność" />
        {options.map((option, index) => {
          return (
            <Option value={option.pal} optionText={option.tittle} key={index} />
          );
        })}
      </select>
    </>
  );
};

export default Activity;
