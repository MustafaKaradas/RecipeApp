import React, { useContext } from 'react'
import './navigationBar.css'

import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';

const NavigationBar = () => {

  const {isAuthenticated,logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = ( )=>{

    navigate("/addRecipe")
  }

  const handleLogout= () =>{
    logout();
    navigate("/login")
  }

    return (
      <Navbar className="navigation-bar">
        <div className="logo">Recipe Platform</div>
        <div className="menu"> 
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        <Nav.Link as={Link} to='/home'>Recipes</Nav.Link>
        <Nav.Link as={Link} to='/addRecipe'>Add Recipe</Nav.Link>
          <a href="/about">About</a>
          <button onClick={isAuthenticated? handleLogout : handleLogin}>
            {isAuthenticated?"Logout":"Login"}
          </button>
        </div>
      </Navbar>
    );
  };
  
export default NavigationBar