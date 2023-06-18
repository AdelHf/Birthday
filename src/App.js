import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Birthday from "./Pages/Birthday";
import Letter from "./Pages/Letter";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/Birthday" element={<Birthday />}></Route>
        <Route path="/Birthday/Letter" element={<Letter />}></Route>
      </Routes>
    </main>
  );
}

export default App;
