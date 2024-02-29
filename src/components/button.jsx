import style from "../styles/components/button.module.css";

function Button(props) {
  return <button className={style.button}>{props.name}</button>;
}

export default Button;
