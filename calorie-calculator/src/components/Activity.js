import React from "react";
import Option from "./Option";

// import useState from "react";

const Activity = ({ onChange }) => {
  //   const [selectActivity, setActivity] = useState(
  //     "leżący w łóżku, bardzo niska aktywność"
  //   );

  return (
    <select
      onChange={onChange}
      className="select"
      placeholder="Wybierz twoją aktywność"
      //   value={selectActivity}
      //   onChange={(e) => {
      //     const selectedActivity = e.target.value;
      //     setActivity(selectedActivity);
      //   }}
    >
      <Option
        value
        disabled
        selected
        hidden
        optionText={"Wybierz twoją aktywność"}
      />
      <Option
        value={"1,2"}
        optionText={"leżący w łóżku, bardzo niska aktywność"}
      />
      <Option
        value={"1,3"}
        optionText={"praca siedząca, minimalna aktywność w ciągu dnia"}
      />
      <Option
        value={"1,4"}
        optionText={
          "praca siedzącą, średnia akwtyność, lekkie treningi 3x w tygodniu"
        }
      />
      <Option
        value={"1,5"}
        optionText={"sporo ruchu w ciągu dnia, lekkie treningi"}
      />
      <Option
        value={"1,6"}
        optionText={" sporo ruchu w ciągu dnia, regularne treningi"}
      />
      <Option value={"1,75"} optionText={"praca fizyczna, lekkie treningi"} />
      <Option value={"2"} optionText={"praca fizyczna, ciężkie treningi"} />

      {/* <option className="option" value="1,2">
        leżący w łóżku, bardzo niska aktywność
      </option>
      <option className="option" value="1,3">
        praca siedząca, minimalna aktywność w ciągu dnia
      </option>
      <option className="option" value="1,4">
        praca siedzącą, średnia akwtyność, lekkie treningi 3x w tygodniu
      </option>
      <option className="option" value="1,5">
        sporo ruchu w ciągu dnia, lekkie treningi
      </option>
      <option className="option" value="1,6">
        sporo ruchu w ciągu dnia, regularne treningi
      </option>
      <option className="option" value="1,75">
        praca fizyczna, lekkie treningi
      </option>
      <option className="option" value="2">
        praca fizyczna, ciężkie treningi
      </option> */}
    </select>
  );
};

export default Activity;

// Activity:
// 1,2
// 1,3
// 1,4
// 1,5
// 1,6
// 1,75
// 2
// 2,2
