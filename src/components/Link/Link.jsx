import React from "react";

import style from "./link.module.css";

function Link(props) {
  return (
    <a className={style.link} href={props.link} target="_blank">
      {props.children}
    </a>
  );
}

export default Link;
