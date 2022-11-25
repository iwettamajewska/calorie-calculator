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

export default Option;
