import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  function handleChange(e){
    const {name ,value } = e.target;
     setFormData(
       ()=>{
        return {
          ...formData,
          [name]:value,
        }
       }
     )
  }
  const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
function togglePassword(){
  setShowPassword(!showPassword);
}
function handleSubmit(e){
  e.preventDefault();
  console.log(formData);
  navigate('/dashboard');
}
  return (
    <>
    <div>
      <h1>Welcomeback</h1>
      <p>Build skills for today, tomorrow, and beyond.</p>

    </div>
    <form onSubmit={handleSubmit}>
     <input 
     type="email"
     placeholder="enter your email"
     value={formData.email}
     onChange={handleChange}
     name="email"

     ></input>
     <input 
     type={showPassword ? "text" : 'password'}
     placeholder="enter your password"
     value={formData.password}
     onChange={handleChange}
     name="password"
     ></input>
    <buuton onClick={togglePassword}>
      {showPassword ? "Hide" : "Show"}
    </buuton>
    <button type="submit" onClick={handleSubmit}>Login</button>
    </form>

    </>
  );
}

export default Login;
