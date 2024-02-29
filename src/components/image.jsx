import loginImg from "../assets/loginImage.svg";
import style from "../styles/components/image.module.css";

function Image() {
  return <img className={style.loginImage} src={loginImg} />;
}

export default Image;
