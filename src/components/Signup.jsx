import React from 'react';
import { useState } from 'react';
function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  function handleChange(e){
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }));
  }
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword(){
    setShowPassword(!showPassword);
  }
  return (
    <>
     <form>
      <buuton >student</buuton>
      <buuton>instructor</buuton>
      <input
       type="text" 
       placeholder="enter your first name"
       name="firstname"
       value={formData.firstname}
       onChange={handleChange}
      >
      </input>

      <input
       type="text" 
       placeholder="enter your last name"
       name="lastname"
       value={formData.lastname}
       onChange={handleChange}
      >
      </input>

      <input
       type="email" 
       placeholder="enter your email"
       name="email"
       value={formData.email}
       onChange={handleChange}
      >
      </input>
        <input
        type={showPassword ? "text" : 'password'}
        placeholder="enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        >
        </input>  
        <button onClick={togglePassword}>{showPassword ? "Hide" : "Show"}</button>
      
     </form>
    </>
    
  );
}

export default Signup;
