const express = require('express');
const mainRouter = express.Router();
 const {artical,createNewArticle,changeArticleTitleById} =require("../controllers/main-controller")

mainRouter.get('/artical', artical);
mainRouter.post('/artical',createNewArticle)
mainRouter.put('/articles/:id/:newTitle',changeArticleTitleById)
module.exports = mainRouter;