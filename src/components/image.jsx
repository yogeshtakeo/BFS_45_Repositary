import img from "../assets/aurora.jpg";

function Image() {
  return (
    <div>
      <img className="image" src={img} alt="image"></img>
    </div>
  );
}

export default Image;
