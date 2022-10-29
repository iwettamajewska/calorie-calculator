const Option = ({ value, optionText }) => {
  return (
    <option className="option" value={value}>
      {optionText}
    </option>
  );
};

export default Option;
