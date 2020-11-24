const express = require('express');
const mainRouter = express.Router();
 const {artical,createNewArticle,changeArticleTitleById,changeArticleAuthorById,deleteArticleById} =require("../controllers/main-controller")

mainRouter.get('/artical', artical);
mainRouter.post('/artical',createNewArticle)
mainRouter.put('/articles/:id/:newTitle',changeArticleTitleById)
mainRouter.put('/articles/:id',changeArticleAuthorById)
mainRouter.delete(' /articles/:id',deleteArticleById)
module.exports = mainRouter;