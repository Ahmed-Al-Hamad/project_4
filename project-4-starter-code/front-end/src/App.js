// import React, { Component } from 'react';
//import './App.css'; 

import React from 'react'

import Rrr from './components/ItemAret';
import item from './components/ItemAret'
import LogIn from './components/logIn';
import Registre from './components/register'
import Card from './components/card'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// Class component
/* export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
        <button>git all</button>
      </div>
    );
  }
} */

// functional component
const App = () => {
  
/* id
title
description
author
is_deleted */

  return (
    <Router>
   
                                                                             
      
  
    <Switch>
   <Route path="/item" component={item}/>
  <Route  path="/Reg" component={Registre}/>
   <Route exact path="/" component={LogIn}/>
   <Route path="/card/:id" component={Card}/>
</Switch>

 
     
       
    </Router>
  );
};
export default App;

