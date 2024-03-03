import img2 from "../assets/Nepal.jpg";

function Home() {
  return (
    <div className="home-container">
      <img src={img2} alt="Nepal Art" />
      <div className="message">
        <h2>Explore Nepal's Mountain and Religius Sites</h2>
      </div>
    </div>
  );
}

export default Home;
