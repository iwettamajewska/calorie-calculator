import Option from "./Option";

const Gender = ({ onChange }) => {
  //   const [selectGender, setSelectGender] = useState("kobieta");
  return (
    <select
      onChange={onChange}
      className="select"
      placeholder="płeć"
      required
      //   value={selectGender}
      //   onChange={(e) => {
      //     const selectedGender = e.target.value;
      //     setSelectGender(selectedGender);
      //   }}
    >
      {/* <slot name="person-name">NAME MISSING</slot>
       <Option value disabled selected hidden optionText={"Płeć"} /> */}
      <option disabled={true} selected={true} hidden={true} value="">
        Wybierz płeć
      </option>
      <Option sex={"female"} value={-161} optionText={"kobieta"} required />
      <Option sex={"male"} value={5} optionText={"mężczyzna"} required />
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
