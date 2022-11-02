const Input = ({ placeholder, min, max, onInput, isError }) => {
  // const { register } = useForm();
  // const onInput = (data) => {
  //   console.log(data);
  // };

  // const Box = ({ name, isError }) => {
  const errorColorInput = isError ? "input error-blank" : "input";

  return (
    // <form onInput={handleOnInput(onInput)}>
    <>
      {isError && <p className="error-text">Uzupełnij dane</p>}
      <input
        // name="exampleRequired"
        // ref={register({ required: true })}
        isError
        type="number"
        min={min}
        max={max}
        required
        // value="100"
        placeholder={placeholder}
        className={errorColorInput}
        // aria-label="Sizing example input"
        // aria-describedby="inputGroup-sizing-default"
        onInput={onInput}
      />
    </>
  );
};

export default Input;
