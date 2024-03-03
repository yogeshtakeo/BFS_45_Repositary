import { Link } from "react-router-dom";
import img1 from "../assets/Word Nepal.png";
import { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        <img src={img1} alt="Nepal Wordmark" />
      </Link>
      <div className="items">
        <div
          className={activeItem === "Home" ? "active" : ""}
          onClick={() => handleItemClick("Home")}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div
          className={activeItem === "8000ers" ? "active" : ""}
          onClick={() => handleItemClick("8000ers")}
        >
          <Link to="/8000ers" className="nav-link">
            8000ers
          </Link>
        </div>
        <div
          className={activeItem === "Festival" ? "active" : ""}
          onClick={() => handleItemClick("Festival")}
        >
          <Link to="/festival" className="nav-link">
            Festival
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
