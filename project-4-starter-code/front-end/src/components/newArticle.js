import React, { useState } from 'react';
import axios from 'axios';

export default function NewArticle(props){
 
      const [id,seId]=useState();
     const [title, setTitle] =useState('');
    const [description, setDesc] =useState('');
    const [autho, setAuthor] =useState(''); 
  const addNewArticle = () => {
        axios
          .post(`http://localhost:5000/articles`, {
            
            "title": title,
            "description":description,
            "autho": autho,
          })
          .then((response) => {
            console.log('RESPONSE: ', response);
            console.log('DATA: ', response.data);
            if (response.status === 200) {
             props.AllArticles();
            }
          })
          .catch((err) => {
            console.log('ERR: ', err);
          });
      }; 
  
    return(
        <div>
          <label>Title Article</label>  <input onChange={(e) => {
        setTitle(e.target.value);
        }} type="text" placeholder="title"/>
          <br/>

          <label>Description</label><textarea
       onChange={(e) => {
       setDesc(e.target.value);
      }}
        rows="4"
        cols="50"
        placeholder="article description ..."
      ></textarea>
          <br/>
          <label>author</label> <input onChange={(e) => {
          setAuthor(e.target.value);
        }} type="text" placeholder="author"/>
              <button onClick={addNewArticle}>Done</button>
        </div>

    )

}

/* <button onClick={addNewArticle}>Done</button> */