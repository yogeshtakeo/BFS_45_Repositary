import Navbar from "./components/navbar";
import Home from "./pages/home";
import Mountain from "./pages/8000ers";
import Site from "./pages/religiousSite";
import { Route, Routes } from "react-router-dom";

import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/8000ers.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/8000ers" element={<Mountain />} />
        <Route path="/religious-site" element={<Site />} />
      </Routes>
    </>
  );
}

export default App;
