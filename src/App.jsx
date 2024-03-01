import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Widget from "./components/Widget/Widget";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Widget />,
  },
]);

function App() {
  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
