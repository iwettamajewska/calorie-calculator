const Result = ({ result }) => {
  return (
    <input
      // placeholder={placeholder}
      value={result}
      className="input result-input"
      readOnly
    />
  );
};

export default Result;
