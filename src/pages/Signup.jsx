import { Link } from "react-router-dom";
import Button from "../components/button";
import style from "../styles/components/signup.module.css";

function Signup() {
  return (
    <div className={style.outerDiv}>
      <div className={style.innerDiv}>
        <div>This is a signup page</div>
        <div className={style.buttonDiv}>
          <Link to="/">
            <Button name="Back" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
