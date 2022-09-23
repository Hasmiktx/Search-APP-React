import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Description from "./components/Description";
import PageVew from "./components/PageVew";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageVew />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
