import React from "react";
import pic1 from './Images/Mahesh.jpg';
import pic2 from './Images/aa.jpg';
import pic3 from './Images/bb.jpg';
import pic4 from './Images/cc.jpg';
import pic5 from  './Images/Mahi.jpg'

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid bg-warning">
            <img src={pic1} className="d-block" alt="....."/>
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="#">about us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">contact</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    check box
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">weather api</a></li>
                    <li><a className="dropdown-item" href="#">news api</a></li>
                    <li><hr className="dropdown-divider"/> </li>
                    <li><a className="dropdown-item" href="#">food recipe api</a></li>
                    <li><a className="dropdown-item" href="#">movie api</a></li>
                    <li><a className="dropdown-item" href="#">products api</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={pic4} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      
        <div className='container' style={{marginTop:20}}>
          <div className='row'>
            <div className='col-md-8' style={{marginTop:20}}>
              <h1 style={{fontFamily:'sans-serif'}}>HI 👋</h1>
              <h1><span style={{color:'green'}}>I'm KIRAN</span></h1>
              <h1 className="PT-1">I'm  FRONT-END DEVELOPER</h1>
              <p className='pt-1' style={{fontFamily:'inherit'}}>The year 2015 has been <b>a milestone for global development as governments have adopted</b> the 2030 Agenda for Sustainable Development, along with the Sustainable Development Goals (SDGs). The bold agenda sets out a global framework to end extreme poverty, fight inequality and injustice, and fix climate change until 2030.</p>
              <br/>
              <br/>
              <button style={{backgroundColor:'green',color:'white'}}>Start now</button><br/>
            </div>
            <div className='col-md-4'>
              <img src={pic5} alt=''/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h4 className='p-3' style={{fontFamily:'serif'}}>Send us a message<b>@treine.me</b></h4>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}
