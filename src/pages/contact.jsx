import { Link } from "react-router-dom";
import "../styles/contact.css";
function Contact() {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="button">
          Go to Home
        </Link>
      </div>
      <p>Contat Us</p>
      <div className="contact">
        <div className="container">
          <div className="div-up">Let's get in Touch</div>
          <div className="form">
            <input type="text" placeholder="Enter your name"></input>
            <input type="email" placeholder="Enter your email"></input>
            <input type="text" placeholder="Enter your phone number"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
