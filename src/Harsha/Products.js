import React, { useState, useEffect } from 'react';
export default function Products() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const state1 = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
  return (
    <>
      <div className='container-fluid'>
        <h1>Products</h1>
        <div className='row'style={{marginTop:20}}>
          <div className='col-md-4'>
        <input type="text" placeholder="Search" value={search} onChange={state1}style={{width:'400px', height:'40px',borderRadius:'10px'}}/>
        </div><div className='col-md-8'></div>
        <div className='row ' style={{marginTop:20}}>
          {state.filter((item) => item.title.includes(search)).map((item) => (
            <div key={item.id} className='col-md-3'>
              <div className="card " style={{height:500,marginBottom:30}}>
                {/* <img src={item.image} className="card-img-top" alt={item.title} style={{height:300, width:300,alignItems:'center'}} /> */}
                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: 300, display: 'block', margin: '0 auto',marginTop:10 }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h4 className='card-title'>{item.price}</h4>
                  {/* <p className="card-text">{item.description}</p> */}
                  <a href="#" className="btn btn-primary" style={{width:"40%"}}>More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
)};
 