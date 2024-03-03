import { Link, useLocation } from "react-router-dom";
import img1 from "../assets/Word Nepal.png";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  // Get the current location
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Check if the current location and setActiveItem variable based on the current page
    // if yes then setActiveItem variable as "Home"
    if (location.pathname === "/") {
      setActiveItem("Home");
    } else if (location.pathname === "/8000ers") {
      setActiveItem("8000ers");
    } else if (location.pathname === "/religious-site") {
      setActiveItem("Site");
    }
  }, [location]);
  //In the above code, location in the dependency array,
  //this ensures that the activeItem state is
  // updated whenever the user navigates to a different page.

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
          className={activeItem === "Site" ? "active" : ""}
          onClick={() => handleItemClick("Site")}
        >
          <Link to="/religious-site" className="nav-link">
            Religious Site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
