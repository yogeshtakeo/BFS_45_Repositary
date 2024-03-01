function Button({ onClick }) {
  return (
    <div className="button-container">
      <button onClick={onClick}>Toggle</button>
    </div>
  );
}

export default Button;
