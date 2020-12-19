import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from 'react-router-dom';

 import axios from 'axios';
export default function LogIn(props) {
  /* userName
password */
const history=useHistory()
  const [userName,setUserName]=useState()
  const [password,setPassword]=useState()
  const [response,setResponse]=useState()
  function checkUser(){
axios
.post(`http://localhost:5000/logIn/${userName}/${password}`)
.then((response)=>{
 if(response.data=="logIN Done"){
   history.push('/item')
 }else setResponse(response.data)
      
})
.catch((err)=> {
  console.log("ERROR :",err);
})
}

  return (
    <div>
      {/* <label >UserName</label>
    <input type="text"/>
    <label>Password</label>
    <input type="password"/>
    <button>LogIn</button>
    <button>Clear</button> */}
   {/*  <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Example label</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Another label</label>
  <input type="
  text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
</div> */}
<main className="form-signin">
  <form className="myRegister">
    <h3>{response}</h3>
    <h1 className="h3 mb-3 fw-normal top">Please sign in</h1>
    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={(e)=>{
        setUserName(e.target.value)
    }}/>
    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="button"onClick={checkUser}>Sign in</button>
    <Link to="/Reg">Register{"=>"}</Link>
    <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    
  </form>
</main>
   
  
    </div> 
  )
   }