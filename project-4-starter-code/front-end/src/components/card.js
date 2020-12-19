import React, { useState ,useEffect} from 'react';
import {
    useParams,
    useHistory
  } from 'react-router-dom';
  import axios from 'axios';
 export default function Card(props){
   const history=useHistory();
    const { id } = useParams();
    const [data,setData]=useState()
    function getCard(){
        axios
        .get('http://localhost:5000/card/'+id)
        .then((response) => {
          setData(response.data);
          console.log(response.data)
        })
        .catch((err) => {
          console.log('RESULT: ', err);
        });
    }
       useEffect(()=>{
        getCard()
 },[])
 function Return(){
   history.push('/item')
 }
    return(
      /* id
title
description
author
is_deleted */
<div>
<div className="card">
<div className="card-header">
<h3>title : {data&&data[0].title}</h3>
  </div>
  <div className="card-header">
  <p>author : {data&&data[0].author}</p>
  </div>
  <div className="card-header">
    {data&&data[0].description}
  </div>
  <div className="card-body">
    <h5 className="card-title">description : {data&&data[0].description}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button  className="btn btn-primary" onClick={Return}>Go Back</button>
  </div>
</div>
</div>
    );
  }