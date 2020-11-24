const express = require('express');
const mainRouter = express.Router();
 artical=require("../controllers/main-controller")
mainRouter.get('/artical', artical);

module.exports = mainRouter;