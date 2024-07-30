import React, { useState, useEffect } from 'react';
import Data from './Food.json';
 
export default function Food() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [food, setFood] = useState(Data);
 
  const fetchData = () => {
    const foodUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
 
    fetch(foodUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.meals) {
            console.log(data)
          setState(data.meals);
          setError('');
        } else {
          setState([]);
          setError('No meals found. Please enter a valid food item.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setState([]);
        setError('Error fetching data. Please try again later.');
      });
  };
 
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setError('');
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
 
  return (
<div className='container-fluid'>
  
    <div  style={{backgroundImage: "url('https://wallpaperswide.com/download/fresh_food-wallpaper-2880x1800.jpg')",backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
    <h1>Food Items</h1>
      <div className='row'>
      <form onSubmit={handleFormSubmit}>
        <input type='text' onChange={handleInputChange} value={search} style={{ width: '80%' }}placeholder='Search food items...'
        />
        <button type="submit" style={{ backgroundColor: 'darkblue', color: 'white', borderRadius: '10px', width: '150px', marginLeft: '10px' }}>Search Items </button>
      </form>
     
{error &&
      <p style={{ color: 'black', marginTop: '10px',fontSize:'20px' }}>{error}</p>}
       <div className='row'>
 {state.map((meals, index) => (

              <div key={index} className='col-md-4' >
                <div className="card" style={{  overflow: 'auto', marginTop: '10px', margin:'10px' }}>
                  <img src={meals.strMealThumb} className="card-img-top" alt="Meal Thumbnail"style={{height:'300px'}} />
                  <div className="card-body">
                    <div className='scroll'>
                      <h5 className="card-title" style={{textAlign:'center',fontFamily:'fantasy'}}>{meals.strMeal}</h5>
                      <p className="card-text" style={{textAlign:'center',fontFamily:'cursive'}}>{meals.strArea}</p>    
                    </div>
                  </div>
                </div>
              </div>
             
            ))}
          </div>
          </div>
          
       <div className='row'>
          {food.map((item, index) => (
            <div key={index} className='col-md-4 '>
              <div className="card" style={{ overflow: 'auto', margin: '10px' }}>
                <img src={item.strCategoryThumb} className="card-img-top" alt="Food Item"/>
                <div className="card-body" style={{padding:'auto',margin:'auto'}}>
                  <div className='scroll'>
                    <h5 className="card-title" style={{fontFamily:'fantasy'}}>{item.strCategory}</h5>
                    <p className="card-text" style={{textAlign:'center',fontFamily:'cursive'}}>{item.strArea}</p>
                   
                 
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
   
  );
}
 