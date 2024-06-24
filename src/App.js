// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./Login"; // Import Login component
import { Form } from "./Form"; // Import Form component
import "./App.css"; // You can create and import App.css for global styles
import { BirthChart } from "./BirthChart";
import { HomePage } from "./HomePage";
import { ConfirmingDetails } from "./ConfirmingDetails";
import { Pacakage } from "./Package";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/birthChart" element={<BirthChart />} />
        <Route path="/confirmingDetails" element={<ConfirmingDetails />} />
        <Route path="/package" element={<Pacakage />} />
      </Routes>
    </Router>
  );
}

export default App;
