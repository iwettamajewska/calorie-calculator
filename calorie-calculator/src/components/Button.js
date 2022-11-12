const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn" type="submit">
      Oblicz
    </button>
  );
};

export default Button;
