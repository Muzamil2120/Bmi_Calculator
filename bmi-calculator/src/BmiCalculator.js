import React, { useState } from "react";

function BmiCalculator() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight) {
      alert("Please enter valid height and weight!");
      return;
    }

    const h = height / 100;
    const value = (weight / (h * h)).toFixed(2);

    setBmi(value);

    if (value < 18.5) setMessage("Underweight");
    else if (value <= 24.9) setMessage("Normal Weight");
    else if (value <= 29.9) setMessage("Overweight");
    else setMessage("Obese");
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="bmi-container">
      <form className="bmi-form" onSubmit={calculateBMI}>
        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
          />
        </div>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
          />
        </div>

        <button className="calculate-btn" type="submit">Calculate BMI</button>
        <button type="button" className="reset-btn" onClick={reset}>Reset</button>
      </form>

      {bmi && (
        <div className="result-card">
          <h2>Your BMI: <span>{bmi}</span></h2>
          <p>Status: <strong>{message}</strong></p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
