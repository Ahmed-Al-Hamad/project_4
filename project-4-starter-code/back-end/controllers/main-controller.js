require('dotenv').config()

const connection=require('../db')
const axios=require('axios')
/*const articles = [
    {
    id: 1,
    title: 'eat fried chicken',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    id: 4,
    title: 'how to studey react',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    id: 7,
    title: 'how to vote',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'jouza',
    },
    ];*/

const gitAllArticles=(req,res)=>{
    const query=`SELECT * FROM articles`
     connection.query(query,(err,results)=>{
         if (err) throw err
         res.json(results)
     })
}
/*id,title,description,autho,is_deleted */
/*id
title
description
autho
is_deleted */
const createNewArticle=(req,res)=>{
    const query = `INSERT INTO articles(id,title,description,author,is_deleted) VALUES(?,?,?,?,?)`;
    const data = [req.body.id,req.body.title,req.body.description,req.body.autho,req.body.is_deleted];
    connection.query(query, data, (err, results) => {
      if (err) throw err;
      res.json("true");
    });
}
const changeArticleTitleById=(req,res)=>{
    const query = `UPDATE articles SET title = ? WHERE id = ?`;;
    const data = [req.params.newTitle,req.params.id];  /* id
    newTitle */
    connection.query(query, data, (err, results) => {
      if (err) throw err;
      res.json("succes");
    });
}
const changeArticleAuthorById=(req,res)=>{
    const query = `UPDATE articles SET author = ? WHERE id = ?`;
    const data = [req.body.newAuthor,req.params.id];  /*  */
    connection.query(query, data, (err, results) => {
      if (err) throw err;
      res.json("results");
    });
}
const deleteArticleById=(req,res)=>{
    const query = `DELETE FROM articles WHERE id=? `;
    const data = [req.params.id];
     connection.query(query, data, (err, results) => {
        console.log(results)
      res.json("deleted");
    });
}
const register=(req,res)=>{
  const query = `INSERT INTO users(id,userName,email,password) VALUES(?,?,?,?)`;
  const data=[req.body.id,req.body.userName,req.body.email,req.body.password];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json("true");
  });
}
const logIN=(req,res)=> {
const query='SELECT * FROM users WHERE username = ? AND password = ?';
const data=[req.params.userName,req.params.password];
connection.query(query,data,(err,results)=>{
  if(err) throw err;
  console.log(results)
   if(results.length===0){
     res.json("is not correct password or email")
   }else 
     res.json("logIN Done")
});
}
const wither=(req,res)=>{
axios.get('http://api.openweathermap.org/data/2.5/weather?q=Amman&appid=747aaad75dade5d1f204dad35462f7f1')
.then((response)=>{
res.json(response.data)
})
.catch((err)=>{
  console.log(err)
})
}
/* INSERT INTO Users SET id=1, weight=160, desiredWeight=145 ON DUPLICATE KEY UPDATE weight=160, desiredWeight=145 */
const favort=(req,res)=>{
  const query='UPDATE articles SET favoert = ? WHERE id = ?';
  const data=[req.body.favoert,req.body.id]
  connection.query(query,data,(err,results)=>{
    if (err) throw err;
     res.json(results)
     console.log(err)
  })
}
const card=(req,res)=>{
  
const query='SELECT * FROM articles WHERE id = ? '
const data=[req.params.id];
connection.query(query,data,(err,results)=>{
  if(err) throw err;
  console.log(results)
   
     res.json(results)
});
}
module.exports={
    gitAllArticles,
    createNewArticle,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    register,
    logIN,
    wither,
    favort,
    card
}