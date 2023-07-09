import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <div>
          <Link to="/">
            <img
              src={require("../assets/nav-logo.png")}
              alt="Pizza Restaurant Logo"
              className="nav-image"
            ></img>
          </Link>
        </div>
      )}
      <div className="nav-items">
        <Link className="hover-effect" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="hover-effect" to="/menu">
          <h1>Menu</h1>
        </Link>
        <Link className="hover-effect" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="hover-effect" to="/contact">
          <h1>Contact</h1>
        </Link>
      </div>
    </menu>
  );
}
