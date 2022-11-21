const Input = ({ placeholder, min, max, name }) => {
  return (
    <>
      <input
        name={name}
        type="number"
        min={min}
        max={max}
        required
        placeholder={placeholder}
        className="input"
      />
    </>
  );
};

export default Input;
