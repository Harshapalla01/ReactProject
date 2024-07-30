import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [state, setState] = useState({});
  const handler = (e) => {
    setState({ state, [e.target.name]: e.target.value });
  };
  const handler1 = (e) => {
  };
  return (
  
    <div className='container-fluid'>
      <div className='bg'>
    <div className='Contact  'style={{paddingTop:'100px'}} >
    <div style={{ textAlign: 'center', margin: 'auto' }} >
      <h2 style={{color:"white",fontSize:"30px"}}>Contact Us</h2>
      <form style={{margin:"auto", padding: '20px',maxWidth:'600px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:"" }} onSubmit={handler1}>
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Name</label>
        <input type="text" name="name" placeholder='Enter your Name'value={state.name} onChange={handler} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', }} />
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Email</label>
        <input type="email" name="email" placeholder='Enter your Email' value={state.email} onChange={handler} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Message</label>
        <textarea name="message" placeholder='Enter message here' value={state.message} onChange={handler} style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
        <button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Submit</button>
      </form>
    </div>
    </div>
    </div>
    </div>
   );
};
export default Contact;