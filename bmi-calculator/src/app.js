import React from "react";
import BmiCalculator from "./BmiCalculator";
import "./BmiCalculator.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">BMI Calculator</h1>
      <BmiCalculator />
    </div>
  );
}

export default App;
