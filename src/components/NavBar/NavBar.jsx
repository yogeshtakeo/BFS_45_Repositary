import React from "react";

import style from "./navbar.module.css";

function NavBar() {
  const navLink = style.navlink;
  const activeNavLink = `${navLink} ${style.active}`;

  return (
    <div className={style.navbar}>
      <div className={style.header}></div>
      <hr />
      <div className={navLink}>Home</div>
      <div className={navLink}>CSS Showcase</div>
    </div>
  );
}

export default NavBar;
