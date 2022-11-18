import Option from "./Option";

const Activity = ({ onChange, activity }) => {
  const options = [
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

  // const errorColorSelectActivity = isError
  //   ? "select activity-select error-blank"
  //   : "select activity-select";

  return (
    <>
      {/* {isError && <p className="error-text">Uzupełnij dane</p>} */}
      <select
        name="activity"
        onChange={onChange}
        value={activity}
        className="select activity-select"
        // className={errorColorSelectActivity}
        placeholder="Wybierz twoją aktywność"
        required
      >
        {/* <option disabled={true} selected={true} hidden={true} value="">
        Wybierz płeć
      </option>
      <option disabled={true} selected={true} hidden={true} value="">
        Wybierz twoją aktywność
      </option> */}
        {/* <option selected={true} hidden={true} value="">
          Wybierz swoją aktywność
        </option> */}
        <Option
          // selected={true}
          hidden={true}
          value={""}
          optionText="wybierz swoją aktywność"
        />
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
