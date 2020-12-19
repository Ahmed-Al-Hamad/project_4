import React, { useState } from 'react';
import {
    useHistory
  } from 'react-router-dom';
  import axios from 'axios';
import './myRegister.css'

export default function Reg(props) {
  const history=useHistory()
  
    const [userName,setUserName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    /* id,userName,email,password */
    const registerUser = () => {
     
      axios
        .post(`http://localhost:5000/register`, {
          
          "userName": userName,
          "email":email,
          "password": password,
          
        })
        .then((response) => {
          console.log('RESPONSE: ', response);
          console.log('DATA: ', response.data);
          if (response.data == "true") {
            console.log(response.data)
            history.push('/')
           
          }
        })
        .catch((err) => {
          console.log('ERR: ', err);
        });
        
    }; 
  return (
<div>

    {/*  <label >UserName</label>
    <input type="text"/>
    <label>Password</label>
    <input type="password"/>
    <label>Email</label>
    <input type="text"/>
    <button>LogIn</button>
    <button>Clear</button> */}
    
    <div className="background">
    <form className="row g-3  myRegister myBirth">
  <div className="col-12 ">
    <label htmlFor="inputAddress" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputAddress" placeholder="Enter strong pass....." onChange={(e) => {
          setPassword(e.target.value);
        }}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress2" placeholder="User.m.user@...." onChange={(e) => {
          setEmail(e.target.value);
        }}/>
  </div>
  <div className="col-md-6 myBirth">
    <label htmlFor="inputCity" className="form-label">Birth Date</label>
    <input type="text" className="form-control" id="inputCity"onChange={(e) => {
          setUserName(e.target.value);
        }}/>
  </div>
  <div className="col-12">
  <button type="button" className="btn btn-primary myBirth" onClick={registerUser}>Sign in</button>
  <button type="button" className="btn btn-primary myBirth">Claer</button>
  
  </div>
</form>
</div>
</div>
  )
   }