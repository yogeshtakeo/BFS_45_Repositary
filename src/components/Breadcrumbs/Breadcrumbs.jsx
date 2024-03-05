import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();

  const [breadcrumbList, updateBreadcrumb] = useState([]);

  useEffect(() => {
    // GET PATH
    let path = location.pathname;

    if (path === "/") {
      // EMPTY FOR HOME
      path = [];
    } else {
      // SPLIT PATH
      path = path.split("/");

      // REMOVE FIRST EMPTY ELEMENT
      path = path.splice(-1, 1);

      // CHECK FOR ADD/EDIT
      if (location.state.add) {
        path[0] = "Add New Task";
      } else {
        path[0] = `Edit ${location.state.title} (${location.state.id})`;
      }
    }

    // UPDATE BREADCRUMB LIST
    updateBreadcrumb(path);
  }, [location.pathname]);

  return (
    <div className={style.breadcrumbs}>
      <Link className={style.breadcrumb} to="/">
        All Tasks
      </Link>
      {breadcrumbList.map((breadcrumb, index) => (
        <>
          <div key={index} className={style.divider}>
            /
          </div>
          <div className={style.breadcrumb}>{breadcrumb}</div>
        </>
      ))}
    </div>
  );
}

export default Breadcrumbs;
