const Age = ({ inputValueAge }) => {
  return (
    <input
      type="number"
      min="18"
      // value="100"
      placeholder="25"
      className="form-control shadow amount-of-money"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      onInput={inputValueAge}
    />
  );
};

export default Age;
