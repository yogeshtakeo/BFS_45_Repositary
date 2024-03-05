import React from "react";

import style from "./header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.title}>ToDo App</div>
      <small>Work by Satshree</small>
    </div>
  );
}

export default Header;
