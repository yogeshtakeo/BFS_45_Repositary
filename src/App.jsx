import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Order from "./pages/order";

function App() {
  return (
    // Parent container for individual routes
    <Routes>
      {"map app's url to corresponding components"}
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/order" element={<Order />}></Route>
    </Routes>
  );
}

export default App;
