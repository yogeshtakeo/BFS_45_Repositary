import React from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./navbar.module.css";

function NavBar() {
  const navLink = style.navlink;
  const activeNavLink = `${navLink} ${style.active}`;

  const { pathname } = useLocation();

  const routes = [
    {
      to: "/",
      text: "Home",
      nav: "home",
    },
    {
      to: "/task3",
      text: "Task 3",
      nav: "task3",
    },
  ];

  return (
    <div className={style.navbar}>
      <div className={style.header}></div>
      <hr />
      {routes.map((route, index) => (
        <Link
          key={index}
          to={route.to}
          className={pathname == route.to ? activeNavLink : navLink}
        >
          {route.text}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
