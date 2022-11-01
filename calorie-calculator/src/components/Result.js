const Result = ({ result }) => {
  return (
    <input
      value={result}
      className="input result-input"
      placeholder="wynik"
      readOnly
    />
  );
};

export default Result;
