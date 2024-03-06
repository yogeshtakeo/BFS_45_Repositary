import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/todo";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
