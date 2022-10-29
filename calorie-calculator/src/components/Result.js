const Result = ({ result }) => {
  return (
    <input
      value={result}
      className="form-control shadow result-pln"
      placeholder="wynik"
      readOnly
    />
  );
};

export default Result;
