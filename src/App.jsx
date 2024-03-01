import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Home from "./components/Home/Home";
import Widget from "./components/Widget/Widget";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/task3",
    element: <Widget />,
  },
]);

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
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
