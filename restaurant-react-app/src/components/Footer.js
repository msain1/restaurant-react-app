import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Pizza Restaurant logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>Iran,</li>
            <li>Tehran</li>
            <br></br>
            <li>09121111111</li>
            <br></br>
            <a
              href="mailto: example@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              example@gmail.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook-square"></i>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fa fa-instagram'></i>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-linkedin-square"></i>
              Linkedin
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-twitter"></i>
              Twitter
            </a>
          </ul>
        </li>
      </menu>
      <div className="footer-copyright">
          <p>@ 2023 Pizza Restaurant</p>
        </div>
    </footer>
  );
}
