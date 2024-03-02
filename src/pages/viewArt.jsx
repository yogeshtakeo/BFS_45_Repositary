import { Link } from "react-router-dom";
import img1 from "../assets/art1.jpg";
import img2 from "../assets/art2.jpg";
import img3 from "../assets/art3.jpg";
import img4 from "../assets/art4.jpg";
import img5 from "../assets/art5.jpg";
import img6 from "../assets/art6.jpg";
import "../styles/viewArts.css";

function ViewArt() {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="button">
          Go to Home
        </Link>
      </div>

      <div className="images">
        <img src={img1} alt="image"></img>

        <img src={img2} alt="image"></img>

        <img src={img3} alt="image"></img>

        <img src={img4} alt="image"></img>
        <img src={img5} alt="image"></img>

        <img src={img6} alt="image"></img>
      </div>
    </div>
  );
}

export default ViewArt;
