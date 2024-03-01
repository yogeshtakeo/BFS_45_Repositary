import { Link } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <p>Home</p>

      <ul className="navBarList">
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="order">Order</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
