import Option from "./Option";

const Gender = ({ onChange }) => {
  //   const [selectGender, setSelectGender] = useState("kobieta");
  return (
    <select
      onChange={onChange}
      className="select"
      placeholder="płeć"
      //   value={selectGender}
      //   onChange={(e) => {
      //     const selectedGender = e.target.value;
      //     setSelectGender(selectedGender);
      //   }}
    >
      {/* <slot name="person-name">NAME MISSING</slot>
       <Option value disabled selected hidden optionText={"Płeć"} /> */}
      <Option sex={"female"} value={-161} optionText={"kobieta"} />
      <Option sex={"male"} value={5} optionText={"mężczyzna"} />
      {/* <option className="option" value="female">
        kobieta
      </option>
      <option className="option" value="male">
        mężczyzna
      </option> */}
    </select>
  );
};

export default Gender;
