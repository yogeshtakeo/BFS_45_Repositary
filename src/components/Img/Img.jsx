import React from "react";

import style from "./image.module.css";

function Img(props) {
  return <img className={style.image} src={props.image} alt="image" />;
}

export default Img;
