import Navbar from "./components/navbar";
import Home from "./pages/home";
import Mountain from "./pages/8000ers";
import "./styles/App.css";
import Festival from "./pages/festival";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/8000ers" element={<Mountain />} />
        <Route path="/festival" element={<Festival />} />
      </Routes>
    </>
  );
}

export default App;
