// import useState from "react";

const Gender = () => {
  //   const [selectGender, setSelectGender] = useState("kobieta");

  return (
    <select
      className="activity"
      //   value={selectGender}
      //   onChange={(e) => {
      //     const selectedGender = e.target.value;
      //     setSelectGender(selectedGender);
      //   }}
    >
      <option className="option" value="female">
        kobieta
      </option>
      <option className="option" value="male">
        mężczyzna
      </option>
    </select>
  );
};

export default Gender;
