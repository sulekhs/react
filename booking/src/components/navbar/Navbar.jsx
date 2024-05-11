import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';

const Navbar = () => {

  const navigate = useNavigate();

  const { user,dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }
  
  return (
    <div className='navbar'>
        <div className="navbarContainer">
          <Link to="/" style={{color:"inherit", textDecoration: "none"}}>
            <span className="logo">SulekhBooking</span>
          </Link>
          {user ? 
          <button onClick={handleLogout} className="navButton">Logout</button>
          : (<div className="navitems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>)}
        </div>
    </div>
  )
}

export default Navbar