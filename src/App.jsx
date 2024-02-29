import React from "react";

import Card from "./components/card";
import "./styles.css";
import Button from "./components/Button";
import Message from "./components/message";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <Card />
      <Message msg="Want to know more about Aurora Borealis?" />
      <Message />
      <Button />
    </>
  );
}

export default App;
