import React from "react";

import style from "./box.module.css";

function Box(props) {
  return <div className={style.box}>{props.children}</div>;
}

export default Box;
