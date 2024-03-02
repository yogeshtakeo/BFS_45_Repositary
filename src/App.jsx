import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import ViewArt from "./pages/viewArt";
import Contact from "./pages/contact";

function App() {
  return (
    // Parent container for individual routes
    <Routes>
      {"map app's url to corresponding components"}
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/view-arts" element={<ViewArt />}></Route>
    </Routes>
  );
}

export default App;
