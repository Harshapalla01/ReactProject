import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import pic1 from './Harsha/Images/api logo3.png';
import Home from './Harsha/Home';
import About from './Harsha/About';
import Contact from './Harsha/Contact';
import CheckBMI from './Harsha/CheckBMI';
import Products from './Harsha/Products'
import Weather from './Harsha/Weather.js';
import Food from './Harsha/Food'
import Movies from './Harsha/Movies'
import News from './Harsha/News'
import Login from './Harsha/Login';
import './Harsha/nav.css'
export default function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container-fluid">
        
          <nav className="navbar navbar-expand-lg  " id='back'>
          <Link className="nav-link" to="/Home"><b></b> 
          <img src={pic1} className="d-block" alt="Logo" style={{ width: 70, height: 70, color:'white' }} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item ">
                  <Link className="nav-link" to="/Home"><b>Home</b></Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="/contact"><b>Contact</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/CheckBMI"><b>Check BMI</b></Link>
                </li>
                 <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>APIs</b>
                 </Link>
                <ul className="dropdown-menu" id='drop' aria-labelledby="navbarDropdown" >
                  <li><Link className="dropdown-item" to="/Weather">Weather API</Link></li>
                  <li><Link className="dropdown-item" to="/News">News API</Link></li>
                  <li><Link className="dropdown-item" to="/Food" >Food Recipe API</Link></li>
                  <li><Link className="dropdown-item" to="/Movies">Movie API</Link></li>
                  <li><Link className="dropdown-item" to="/Products">Products API</Link></li>
                </ul>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Login"><b>Login</b></Link>
                </li>
              </ul>
             </div>
            </nav>
      
          </div>
          <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CheckBMI" element={<CheckBMI />} />
          {/* <Route path="/Api" element={<Api />} /> */} 
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Food" element={<Food />}/>
          <Route path="/Movies" element={<Movies />}/>
          <Route path="/News" element={<News />}/>
          <Route path="/Weather" element={<Weather />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}