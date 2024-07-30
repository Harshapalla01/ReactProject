import React, { useState } from 'react';
import './Weather.css'

export default function Weather() {
  let dt = new Date()
  const [search, setSearch] = useState('')
  const [state, setState] = useState([]);
  const [name, setName] = useState([])
  const [country, setCountry] = useState([])
  const [feel, setFeel] = useState([]);
  const [wind, setWind] = useState([]);
  const [clouds, setCloud] = useState([]);
  const [humidity, setHumidity] = useState([])
 
  const [climate, setClimate] = useState([])
  const [icon, setIcon] = useState([])
  const [error, setError] = useState([])
  const img = `https://openweathermap.org/img/wn/${icon.icon}@4x.png`
  const loc = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=65a9303106d54e36e3ce5f85fb7712b1`
 
  function a() {
 
    fetch(loc)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setError(null);
 
        const temperature = data.main
        setState(temperature);
        const name = data
        setName(name)
        const country = data.sys
        setCountry(country)
        const feels = data.main
        setFeel(feels);
        const wind = data.wind
        setWind(wind);
        const clouds = data.clouds
        setCloud(clouds)
        const humidity = data.main
        setHumidity(humidity)
 
        const climate = data.weather
        setClimate(climate)
        const icons = data.weather[0]
        setIcon(icons)
 
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error.message);
        setCountry(null);
        setError('Location not found. Please enter a valid location.');
      });
 
  }
  function abc(e) {
    setSearch(e.target.value)
  }
  return (
    <>
      
      <div className='container-fluid'>
        <div className='body'>
    
        <div className='box'>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Check Weather</h1>
          <div className='container-fluid' id='container1' >
            <div className='row'>
            <div className='col-md-12'>
              <input type='text' onChange={abc} style={{ width: '80%',marginLeft:'10px' }} value={search} />
              <button type="submit" onClick={a} style={{ backgroundColor: 'darkblue', color: 'white', borderRadius: '10px', width: '100px' }}> Weather</button>
            </div>
            </div>
          </div>
          {error && (
            // <div className='container-fluid' id='container1'>
              <p style={{ color: 'red' }}>{error}</p>
            // </div>
          )}
          {country && !error && (
            <div className='container-fluid' id='container1'>
 
              <h1>{name.name},{country.country}</h1>
              <p>{dt.getDate()}-{dt.getMonth() + 1}</p>
 
              <div className='row'>
                <div className='image'>
                  <div className='col-md-12'>
                    {<img src={img} alt='' />}
                  </div>
                </div>
                <div className='col-md-6'>
                  <h1 className='temp'>{Math.round(state.temp)}°C</h1>
                </div>
 
 
 
                <div className='col-md-6'>
                  <p className='feel'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-thermometer" viewBox="0 0 16 16">
                      <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                      <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z" />
                    </svg>feels like</p><p className='feel'><h5>{Math.round(feel.feels_like)}°</h5></p>
                </div>
              </div>
              <div className='row'>
 
 
                <div className='col-md-12'>
 
                  {climate.map((x) => <h4 className='description'>{x.description}</h4>
                  )}
 
                </div>
 
                <div className='row'>
                  <div className='col-md-12'>
                    <h4 className='wind'>
                      <svg xmlns="http://www.w3.org/2000/svg " width="25" height="25" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                      </svg>
                      Wind,{wind.speed}mph</h4>
                  </div>
                </div>
 
 
                <div className='row'>
                  <div className='col-md-4'>
                    <p className='wind2'>
                      <svg xmlns="http://www.w3.org/2000/svg " width="25" height="25" fill="black" class="bi bi-wind" viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                      </svg> </p>
                    <b style={{color:'black'}}>Wind</b> <h5>{wind.speed}mph</h5>
                  </div>
 
                  <div className='col-md-4'>
                    <p className='clouds'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-cloud" viewBox="0 0 16 16">
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg></p> <b style={{color:'black'}}>Clouds</b><h5>{clouds.all}%</h5>
                  </div>
 
                  <div className='col-md-4'>
                    <p className='humidity'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-moisture" viewBox="0 0 16 16">
                        <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267" />
                      </svg> </p><b style={{color:'black'}}>Humidity</b><h5>{humidity.humidity}%</h5>
 
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
 </div>
 </div>  
          </>
  );
}