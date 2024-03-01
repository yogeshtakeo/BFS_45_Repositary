import React from "react";

import style from "./header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div>Work by Satshree</div>
      <div>
        <small>Takeo Frontend Bootcamp Tasks</small>
      </div>
    </div>
  );
}

export default Header;
