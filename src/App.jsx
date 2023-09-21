import React from "react";
import { Home } from "./components";
import { Route, Routes } from "react-router-dom";
import { Contact, Register } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
