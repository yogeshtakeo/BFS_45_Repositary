import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="container">
      <button className="subtract" onClick={() => setCount(count - 1)}>
        {" "}
        Subtract 1{" "}
      </button>
      <p>{count}</p>
      <button className="add" onClick={() => setCount(count + 1)}>
        {" "}
        Add 1{" "}
      </button>
    </div>
  );
}

export default App;
