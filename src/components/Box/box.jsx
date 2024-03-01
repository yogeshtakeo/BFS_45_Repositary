function Box(props) {
  let className = "box";

  if (props.current) {
    console.log(props.current);
    className += " current";
  }

  return <div className={className}>{props.index + 1}</div>;
}

export default Box;
