import React, { useState,useContext } from 'react';
import './login.css'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      await login(email,password)
      navigate("/addRecipe")

    }catch(error){
      alert("Login Failed!")
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
