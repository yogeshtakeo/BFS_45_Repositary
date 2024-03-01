import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import NotFound from "./components/NotFound/NotFound";

import Home from "./components/Home/Home";
import Widget from "./components/Widget/Widget";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="nav-box">
        <NavBar />
      </div>
      <div className="head-box">
        <Header />
      </div>
      <div className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task3" element={<Widget />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
