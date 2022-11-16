const Button = ({ onClick, onSubmit }) => {
  return (
    <button onClick={onClick} className="btn" type="submit">
      Oblicz
    </button>
  );
};

export default Button;

// onSubmit={onSubmit}
