import "./assets/styles.css";

import image from "./assets/image.svg";

function App() {
  return (
    <>
      <div className="page">
        <div className="center">
          <div className="box">
            <h1>Hello, World</h1>
            <small>Work by Satshree Shrestha</small>
          </div>
        </div>
        <br />
        <div className="divider">
          <hr />
        </div>
        <div className="center">
          <img className="image" src={image} alt="image" />
          <button className="btn" onClick={() => window.alert("HI! 👋🏻")}>
            Click Me!
          </button>
          <a
            className="link"
            href="https://www.youtube.com/watch?v=28Lj4qt3lCc&pp=ygUSYWJvdXQgeW91IHRoZSAxOTc1"
            target="_blank"
          >
            One of my favorite song
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
