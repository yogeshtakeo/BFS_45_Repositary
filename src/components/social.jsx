import style from "../styles/components/social.module.css";

function Social(props) {
  return <img src={props.name} className={style.socialImage} />;
}

export default Social;
