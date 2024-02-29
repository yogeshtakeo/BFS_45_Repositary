import style from "../styles/components/inputbox.module.css";

function InputBox(props) {
  return <input className={style.box} placeholder={props.placeholder} />;
}

export default InputBox;
