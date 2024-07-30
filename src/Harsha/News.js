import React, { useState, useEffect } from 'react';
 
export default function AppNews() {
  const [search, setSearch] = useState('')
  const [state, setState] = useState([]);
  const[error,setError]=useState([])
  const news= `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=d60db59266154454b7ecc5c583b25c8c`;
  // 18ed2d1832924313ae196aabf8fb6d24
  function a() {
    fetch(news)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setState(data.articles);
        if (data.articles.length === 0) {
          setError('No articles found. Please try again with a different search term.');
         } else {
           setState(data.articles);
           setError('');
         }
})
      .catch((error) => {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Please try again later.');
        setState([]);
      });
     
  }
  function abc(e) {
    setSearch(e.target.value)
  }
 
 
  return (
    <>
    <body>
       <div className='container-fluid'>
      <div className='row'>
        <h1>Top Headlines</h1>
      <input type='text' onChange={abc} style={{width:'80%', marginLeft:'20px'}} value={search}/>
             <button type="submit" onClick={a} style={{backgroundColor:'darkblue', color:'white', borderRadius:'10px', width:'100px'}}>Get News</button>
         
      {error && (
        <div className="row">
          <div className="col-md-12">
            <div  role="alert" style={{color:'red'}}>
              {error}
            </div>
          </div>
        </div>
      )}
 
        {state.map((article, index) => (
          <div key={index} className='col-md-4 ' style={{padding:'10px'}}>
            <div className="card" style={{height:'100%', overflow:'auto'}}>
              <img src={article.urlToImage} className="card-img-top" alt="News" />
              <div className="card-body">
               <div className='scroll'>
        <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">Read More</a>
        </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </body>
    </>
  );
}
 