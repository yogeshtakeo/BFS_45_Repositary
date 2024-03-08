import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/conversion">Conversion Application</Link>
        </li>
        <li>
          <Link to="/counter">Calculator Application</Link>
        </li>
        <li>
          <a href="/counter">Calculator Application (anchor)</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
