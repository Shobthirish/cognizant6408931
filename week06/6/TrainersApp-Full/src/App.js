import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import TrainersList from "./TrainersList";
import TrainerDetails from "./TrainerDetails";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/trainers">Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList />} />
        <Route path="/trainers/:id" element={<TrainerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
