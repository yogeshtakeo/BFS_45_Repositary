import React, { useState } from "react";

import crowbar from "../../assets/crowbar.png";
import style from "./widget.module.css";

function Widget() {
  const animationClass = style["animate-img"];

  const [bgColor, setBgColor] = useState("#a4eda5");
  const [imgClass, setImgClass] = useState(style.img);

  const toggleBgColor = () => {
    if (bgColor === "#a4eda5") {
      setBgColor("#a4d7ed");
    } else {
      setBgColor("#a4eda5");
    }
  };

  const toggleImgAnimation = () => {
    setImgClass(`${style.img} ${animationClass}`);
    setTimeout(() => setImgClass(style.img), 1 * 1000);
  };

  return (
    <div className={style.center} style={{ height: "100%" }}>
      <div className={style.widget}>
        <div>
          <code>$ print("Work by Satshree Shrestha")</code>
          <br />
          <code>$ Work by Satshree Shrestha</code>
        </div>
        <hr />
        This is a Widget to show case the different margin and padding of this
        HTML element as well as the CSS transition and animation property.
        <br />
        <br />
        <div className={style.flex} style={{ backgroundColor: bgColor }}>
          <div>
            <button onClick={toggleImgAnimation}>
              Click me to animate the image
            </button>
            <button onClick={toggleBgColor}>
              Click me to transition the background color
            </button>
          </div>
          <img className={imgClass} src={crowbar} alt="image to rotate" />
        </div>
        <div className={style.center}>
          <h3 className={style.h3}>Eureka!</h3>
        </div>
      </div>
    </div>
  );
}

export default Widget;
