import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

const Login = () => {
const navigate = useNavigate();

const[username,setUsername] = useState("");
const[password,setPassword] = useState("");
//   const [credentials, setCredentials] = useState({
//       username: "",
//       password:""
//   });//628907837823ed1a27c5ee50

  const { user, loading, error, dispatch } = useContext(AuthContext);

//   const handleChange = (e) => {
//       setCredentials((prev) => ({
//           ...prev,
//           [e.target.id]: [e.target.value]
//       }))
//   };

  console.log(user);

  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
          const res = await axios.post("/auth/login",({username,password}));
          dispatch({ type:"LOGIN_SUCCESS", payload: res.data })
          navigate("/");
      } catch (err) {
          dispatch({ type:"LOGIN_FAILURE", payload:err.response.data })
      }
  }
    
  return (
    <div className='login'>
        <div className="loginContainer">
            <input 
                type="text" 
                placeholder='username' 
                id='username' 
                className='lInput'
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='password' 
                id='password' 
                className='lInput' 
                onChange={(e)=>setPassword(e.target.value)}
            />
            
            <button
               className="lButton"
               onClick={handleClick}
            >
               Login
            </button>
            {error && <span className='errorMsg'>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login