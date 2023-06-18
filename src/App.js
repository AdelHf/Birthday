import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Letter from "./Pages/Letter";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Letter" element={<Letter />}></Route>
      </Routes>
    </main>
  );
}

export default App;
