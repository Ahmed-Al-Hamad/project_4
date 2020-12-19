import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import './myRegister.css'
import {
  useHistory
} from 'react-router-dom';
export default function ItemAret(props) {
const [Delete,setDelete]=useState('')
const [articles, setArticles] = useState([]);
const [idArticleToDelete,setIdArticleToDelete]=useState();
/* id,title,description,author,is_deleted */
const [title,setTitle]=useState()
const [description,setDescription]=useState()
const [author,setAuthor]=useState()
const [changiByIdTitle,setChangiByIdTitle]=useState()
const [newTit,setNewTitle]=useState()
const [newAuthor,setNewAuthor]=useState()
const [changiByIdAuthor,setChangiByIdAuthor]=useState()
const [getWither,setwither]=useState()
const [eadit,setEadit]=useState()
const [val,setVal]=useState()
const [favortValue,setFavortValue]=useState()
const history=useHistory()
function wither(){
  axios
      .get('http://localhost:5000/wither')
      .then((response) => {
        /* console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data); */
        // setState({ tasks: response.data });
        setwither(response.data);
          console.log(response.data)

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  
}
 useEffect(()=>{
   wither()
   gitAllArticles()
 },[])
  function gitAllArticles() {
    axios
      .get('http://localhost:5000/articles')
      .then((response) => {
        /* console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data); */
        // setState({ tasks: response.data });
        setArticles(response.data);


      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });

  }
  function deleteById(){
  axios
  .delete('http://localhost:5000/articles/'+idArticleToDelete)
  .then((response)=>{
     setDelete(response.data)
  })
  .catch((err)=>{
  return <p>{err}</p>
  });
};
  function createNewArticle(){
   axios
   .post(`http://localhost:5000/articles`,{
    "title":title,
    "description":description,
    "autho":author,
    "is_deleted":1 
   })
   .then((response)=>{

   })
   .catch((err)=>{
     console.log('Error :',err)
   })    
  }
  function changeArticleTitleById(){
    axios
    .put(`http://localhost:5000/articles/${changiByIdTitle}/${newTit}`)
    .then((response)=>{

    })
    .catch((err)=>{
      console.log('Error :',err)
    })
  }
  function changeArticleAuthorById(){
    axios
    .put(`http://localhost:5000/articles/${changiByIdAuthor}`,{
      "newAuthor":newAuthor
    })
    .then((response)=>{

    })
    .catch((err)=>{
      console.log('Error :',err)
    })
  }
  let favVal=0
  function favort(value){
    if(value.favoert!==1){
      favVal=1
    }else favVal=0
    axios
    .put(`http://localhost:5000/favort`,{
      "favoert":favVal,
      "id":value.id
    })
    .then((response)=>{
 
    })
    .catch((err)=>{
      console.log('Error :',err)
    })    
   }
   function Eadit(){
     (eadit)?setEadit(true):setEadit(false)
   } 
   function g(value,e){
    
     setTitle( e.target.value)
   
   }
 function card(value){
   history.push('/card/'+value.id)
 }
   return (
    <div>
    <div className="conteiner">
      <div className="sub-container-1"> 
    <input className="inp"/>
    <button type="button" className="btn btn-light inp">Search</button>
    </div>
    </div>
    <div className="top">
    <input placeholder="title" onChange={(e)=>{
        setTitle(e.target.value)
    }}/>
    <input placeholder="author"onChange={(e)=>{
      setAuthor(e.target.value)
    }}/>
    <input placeholder="descreption"onChange={(e)=>{
      setDescription(e.target.value)
    }}/>
    <button onClick={createNewArticle}>create articles</button>
    </div>
   
<div className="container cont">
  <div className="row">
 
    {articles.map((value,index)=>{
         return(
          <div className="cont">
            <div>
         
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" 
             preserveAspectRatio="xMidYMid slice" focusable="false">
               <title>Placeholder</title>
             <rect width="100%" height="100%" fill="#55595c"/>
             <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
             </svg>
            
            <div className="card-body">
            <p className="card-text">title :{value.title}</p>     
         <p className="card-text">description :{value.description}</p>
         <p className="card-text">author :{value.author}</p>
         <p className="card-text">ID :{value.id}</p>
         <div className="btn-group">
         <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{
                    changeArticleTitleById()

                }}>Edit Title</button>
              
              <input type="text"  className="widthinput" placeholder="new title"  onChange={(e)=>{
                setChangiByIdTitle(value.id)
               setNewTitle(e.target.value)
              }}/>
              </div>
              <div className="btn-group">
         <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{
                    changeArticleAuthorById()

                  }}>Edit Author</button>
                    
              <input type="text"  className="widthinput" placeholder="author name"  onChange={(e)=>{
                setChangiByIdAuthor(value.id)
                setNewAuthor(e.target.value)
              }}/>
              </div>
             
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{
                    card(value)
                  }}>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={(e)=>{
                   
                    setIdArticleToDelete(value.id)
                      deleteById()
                      
                  }}>Delete</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={(e)=>{
                    favort(value)
                  }}>Favorite</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        
        </div>
        </div>
         )})}
    
  </div>
</div>
</div>
 
  )  
   }



/* <div className="container">
      <div className="row row-cols-3">
       
        <div>
      <button onClick={gitAllArticles}>gitAllArticles</button> 
      </div>
      <div className="item">
 <input type="number" onChange={(IdArticleToDeleted)=>{
        setIdArticleToDelete(IdArticleToDeleted.target.value)
      }}/><button onClick={deleteById}>Delete</button>
      </div>
     <div className="item">
      <input placeholder="title" onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      </div>
      <div className="item">
      <input placeholder="description" onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
      </div>
      <div className="item">
      <input placeholder="author" onChange={(e)=>{
        setAuthor(e.target.value)
      }}/>
      </div>
      <button className="item" onClick={createNewArticle}>Add Articales</button>
      <div>
        <input placeholder="Id title" onChange={(e)=>{
          setChangiByIdTitle(e.target.value)
        }}/>
        <input placeholder="changetitle" onChange={(e)=>{
          setNewTitle(e.target.value)
        }}/>
        <button onClick={changeArticleTitleById}>change Title</button>
      </div>
      <div>
        <input placeholder="Id Author name" onChange={(e)=>{
          setChangiByIdAuthor(e.target.value)
        }}/>
        <input placeholder="change Author name" onChange={(e)=>{
          setNewAuthor(e.target.value)
        }}/>
        <button onClick={changeArticleAuthorById}>change Author</button>
      </div>
     
   

          {getWither && <p>{getWither.name+"||"+getWither.main.temp}</p>}
        
 
 
</div>
     

      
       {articles.map((value,index)=>{
         return(
          <div className="container">
            <div class="row">
          <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" 
             preserveAspectRatio="xMidYMid slice" focusable="false">
               <title>Placeholder</title>
             <rect width="100%" height="100%" fill="#55595c"/>
             <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
             </svg>
                    
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h5 className="card-title">title :{value.title}</h5>
         <p className="card-text">description :{value.description}</p>
         <p className="card-text">author :{value.author}</p>
         <p className="card-text">ID :{value.id}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{
                    favort(value.id)
                  }}>Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
         )})}
          </div>  */