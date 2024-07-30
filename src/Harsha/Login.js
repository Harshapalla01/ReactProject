import React,{useState} from "react";
import './Login.css';
const Login=()=>{
  const[email,setEmail]=useState([]);
  const[password,setPassword]=useState([]);
  const [message, setMessage] = useState('');
 
    const users=[
      {email:'sudhakar@gmail.com',password:'12345678'},
      {email:'harsha@gmail.com',
        password:'12345678'
      },
      {email:'kiran@gmail.com',
        password:'12345678'
      },
      {email:'jahnavi@gmail.com',
        password:'12345678'
      },
      {email:'trail@gmail.com',
        password:'12345678'
      }
    ];
 
    const handleLogin=()=>{
      const foundUser=users.find(user=>user.email===email&&user.password===password);
 
      if(foundUser ){
        setMessage(<h3>Login successfully</h3>);
      }else{
        setMessage(<h3>invalid credentials</h3>);
      }
    };
    return(
     
      <div className="container-fluid ">
         <div className="body2"> 
      <div className="container2">
 
        <h2>Login</h2>
        <label htmlFor="email">    Email    :</label>
        <input type="text" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label htmlFor="password" >  password :</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={handleLogin} id="button1">Login</button>
       
        <p id="message">{message}</p>
       
      </div>
      </div>
      </div>
    )
}
export default Login;