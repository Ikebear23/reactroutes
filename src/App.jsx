import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Red from "./components/Red";
import Home from "./components/Home";
import Blue from "./components/Blue";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
