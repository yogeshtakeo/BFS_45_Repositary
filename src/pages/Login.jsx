import style from "../styles/components/login.module.css";
import Image from "../components/image";
import InputBox from "../components/inputBox";
import Button from "../components/button";

const message1 = "Welcome Back!";
const message2 = "Login to Continue";

const placeholder1 = "Enter Username";
const placeholder2 = "Enter Password";

function Login() {
  return (
    <div>
      <div className={style.row}>
        <div className={style.imageColumn}>
          <Image />
        </div>
        <div className={style.formColumn}>
          <div className={style.messageDiv}>
            <div className={style.messageOneDiv}>{message1}</div>
            <div className={style.messageTwoDiv}>{message2}</div>
          </div>
          <div className={style.usernameInputDiv}>
            <InputBox placeholder={placeholder1} />
          </div>
          <div className={style.passwordInputDiv}>
            <InputBox placeholder={placeholder2} />
          </div>
          <div className={style.buttonDiv}>
            <Button name="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
