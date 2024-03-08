import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="container">
      <h1>Counter Application</h1>
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

export default Counter;
