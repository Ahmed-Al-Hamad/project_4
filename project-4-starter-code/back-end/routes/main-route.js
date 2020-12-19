const express = require('express');
const mainRouter = express.Router();
 const {gitAllArticles,
    createNewArticle,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    register,
    logIN,
    wither,
    favort,
    card
      } =require("../controllers/main-controller")

mainRouter.get('/articles', gitAllArticles);
mainRouter.post('/articles',createNewArticle)
mainRouter.put('/articles/:id/:newTitle',changeArticleTitleById)
mainRouter.put('/articles/:id',changeArticleAuthorById)
mainRouter.delete('/articles/:id',deleteArticleById)
mainRouter.post('/register',register)
mainRouter.post('/logIn/:userName/:password',logIN)
mainRouter.get('/wither',wither)
mainRouter.put('/favort',favort)
mainRouter.get('/card/:id',card)
module.exports = mainRouter;