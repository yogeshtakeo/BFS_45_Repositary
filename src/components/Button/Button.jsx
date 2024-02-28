import React from "react";

import style from "./button.module.css";

function Button(props) {
  return (
    <button className={style.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
