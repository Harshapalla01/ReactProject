import React, { useState, useEffect } from 'react';
export default function Movie() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    }, []);
  const fetchMovies = (searchTerm) => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=272d031`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((value) => {
        if (value.Search) {
          setData(value.Search);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };
 const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      fetchMovies(search);
    } else {
      setData([]);
    }
  };
 return (
    <>
    <div className='N'>
        <div className='container-fluid'>
          <h1>Search for Favorite movies</h1>
          <div className='row'>
            <div className='col-md-12'>
              <div className='searchBar text-center m-5'>
                <input type='text' placeholder='Search movies' value={search}onChange={(e) => setSearch(e.target.value)} />
                <br></br>
               <button className='bg-primary text-light' onClick={submitHandler} style={{width:'150px', height:'40px',borderRadius:'10px'}}> Search </button>
              </div>
            </div>
          </div>
          {data.length > 0 && (
            <div className='row '>
              {data.map((movie) => (
                <div key={movie.imdbID} className='col-md-3'>
                  <div className='card ' style={{ height: 500, marginBottom: 30 , borderRadius:10 }}>
                    <img src={movie.Poster} className='card-img-top' alt={movie.Title} width={300} height={350} />
                    <div className='card-body bg-light'>
                      <h2 className='card-title'>{movie.Title}</h2>
                      {/* <button className='movie-detailsBtn bg-success text-light'>Details</button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
