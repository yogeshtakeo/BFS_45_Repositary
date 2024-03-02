import { Link } from "react-router-dom";
import "../styles/home.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <div>Artistry Nexus</div>
        </li>
        <li>
          <Link to="view-arts" className="button">
            View Arts
          </Link>
        </li>
        <li>
          <Link to="contact" className="button">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
