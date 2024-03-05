import style from "../styles/components/login.module.css";
import Image from "../components/image";
import InputBox from "../components/inputBox";
import Button from "../components/button";
import takeo from "../assets/takeo-seo.png";
import Social from "../components/social";

const message1 = "Welcome Back!";
const message2 = "Login to Continue";

const placeholder1 = "Enter Username";
const placeholder2 = "Enter Password";

const takeoLink = "https://www.takeo.ai";

import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";
import { Link } from "react-router-dom";

const twitterImg = twitter;
const youtubeImg = youtube;
const gmailImg = gmail;
const linkedinImg = linkedin;
const facebookImg = facebook;
const tiktokImg = tiktok;

function Login() {
  return (
    <div className={style.outerDiv}>
      <a href={takeoLink} target="_blank">
        <div className={style.logoDiv}>
          <img src={takeo} className={style.takeoImg} />
        </div>
      </a>
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
            <Link to="/signup">
              <Button name="Sign Up" />
            </Link>
          </div>
          <div className={style.socialIconDiv}>
            <a href="https://twitter.com/takeo_ai" target="_blank">
              <Social name={twitterImg} />
            </a>
            <a href="https://www.facebook.com/takeoai/" target="_blank">
              <Social name={facebookImg} />
            </a>
            <a href="mailto:hr@takeo.ai" target="_blank">
              <Social name={gmailImg} />
            </a>
            <a href="https://www.youtube.com/@takeoai" target="_blank">
              <Social name={youtubeImg} />
            </a>
            <a href="https://www.linkedin.com/company/takeoai/" target="_blank">
              <Social name={linkedinImg} />
            </a>
            <a href="https://www.tiktok.com/@takeoai" target="_blank">
              <Social name={tiktokImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
