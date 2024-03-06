import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container1">
      <div className="todo-nav">
        <Link to="/" className="nav-link">
          <h1 className="navbar-header">Todo App </h1>
        </Link>
      </div>
      <div className="line">
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
