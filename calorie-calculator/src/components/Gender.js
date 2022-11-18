import Option from "./Option";

const Gender = () => {
  // const errorColorSelectGender = isError ? "select error-blank" : "select";

  return (
    <>
      {/* {isError && <p className="error-text">Uzupełnij dane</p>} */}
      <select
        // onChange={onChange}
        // className={errorColorSelectGender}
        className="select"
        placeholder="płeć"
        required
        name="gender"
        //   value={selectGender}
        //   onChange={(e) => {
        //     const selectedGender = e.target.value;
        //     setSelectGender(selectedGender);
        //   }}
      >
        {/* <slot name="person-name">NAME MISSING</slot>
       <Option value disabled selected hidden optionText={"Płeć"} /> */}
        <Option
          // selected={true}
          hidden={true}
          value={""}
          optionText="Wybierz płeć"
        />
        <Option sex={"female"} value={-161} optionText={"kobieta"} required />
        <Option sex={"male"} value={5} optionText={"mężczyzna"} required />
        {/* <option className="option" value="female">
        kobieta
      </option>
      <option className="option" value="male">
        mężczyzna
      </option> */}
      </select>
    </>
  );
};

export default Gender;
