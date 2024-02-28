import Box from "./components/Box/Box";
import Divider from "./components/Divider/Divider";
import Img from "./components/Img/Img";
import Button from "./components/Button/Button";
import Link from "./components/Link/Link";

import "./assets/styles.css";

import image from "./assets/image.svg";

function App() {
  return (
    <>
      <div className="page">
        <div className="center">
          <Box>
            <h1>Hello, World</h1>
            <small>Work by Satshree Shrestha</small>
          </Box>
        </div>
        <br />
        <Divider />
        <div className="center">
          <Img image={image} />
          <Button onClick={() => window.alert("HI! 👋🏻")}>Click Me!</Button>
          <Link link="https://www.youtube.com/watch?v=28Lj4qt3lCc&pp=ygUSYWJvdXQgeW91IHRoZSAxOTc1">
            One of my favorite song
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
