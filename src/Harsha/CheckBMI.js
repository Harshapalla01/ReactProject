import React, { useState } from 'react';
import './BMI.css'
export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  let imgsrc;

  const calculateBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Invalid input");
    } else {
      let bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("You are Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage("You are Healthy ");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage("You are Overweight");
      } else {
        setMessage("You are Obese");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  if (bmi === '') {
    imgsrc = null;
  } else if (bmi < 18.5) {
    imgsrc = require('../Harsha/Images/underweight.webp');
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    imgsrc = require('../Harsha/Images/healthy.jpg');
  } else if (bmi >= 25 && bmi <= 29.9) {
    imgsrc = require('../Harsha/Images/overweight.webp');
  } else {
    imgsrc = require('../Harsha/Images/obesegirl.jpg');
  }

  return (
    <>
    <div className='Kiran'>
    {/* <div className='app'> */}
      <div className='container-fluid' id='bmi'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <center><button className='btn' type="submit">Submit</button></center>
          <center><button className='btn btn-outline' type="button" onClick={reload}>Reload</button></center>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <h3>{message}</h3>
        </div>
        <div className='img-container'>
          <img src={imgsrc} alt="" />
        </div>
      </div>
    {/* </div> */}
    </div>
    </>
  );
}
