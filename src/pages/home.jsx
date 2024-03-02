import NavBar from "../components/navBar";
import img from "../assets/pexels-tim-gouw-139764.jpg";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="home-left">
          <p className="welcome">
            Welcome to <br /> virtual <span> Art Gallery.</span>
          </p>

          <p className="para">A celebration of Contemporary Art.</p>
        </div>
        <img src={img} alt="image"></img>
      </div>
    </>
  );
}

export default Home;
