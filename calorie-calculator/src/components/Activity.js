// import useState from "react";

const Activity = () => {
  //   const [selectActivity, setActivity] = useState(
  //     "leżący w łóżku, bardzo niska aktywność"
  //   );

  return (
    <select
      className="activity"
      //   value={selectActivity}
      //   onChange={(e) => {
      //     const selectedActivity = e.target.value;
      //     setActivity(selectedActivity);
      //   }}
    >
      <option className="option" value="1,2">
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
      </option>
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
