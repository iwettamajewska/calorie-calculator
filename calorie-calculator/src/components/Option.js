const Option = ({ value, optionText, selected, hidden }) => {
  return (
    <option
      className="option"
      value={value}
      selected={selected}
      hidden={hidden}
    >
      {optionText}
    </option>
  );
};

{
  /* <option selected={true} hidden={true} value="">
          Wybierz swoją aktywność
        </option> */
}

export default Option;
