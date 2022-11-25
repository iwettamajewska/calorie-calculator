import Option from "./Option";

const Gender = () => {
  return (
    <>
      <select className="select" placeholder="płeć" required name="gender">
        <Option hidden={true} value={""} optionText="Wybierz płeć" />
        <Option sex={"female"} value={-161} optionText={"kobieta"} required />
        <Option sex={"male"} value={5} optionText={"mężczyzna"} required />
      </select>
    </>
  );
};

export default Gender;
