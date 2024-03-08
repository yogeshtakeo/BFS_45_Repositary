import React, { useState } from "react";
import "./App.css";
import Counter from "./pages/Calculator";
import ConversionApplication from "./pages/Conversion";
import Navigation from "./components/Navigation.comp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/conversion" element={<ConversionApplication />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
