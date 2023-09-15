const express = require('express');

const Router = express.Router();

const{createArticle,getArticle} = require('../controllers/article');
Router.get('/createArticle',createArticle); 
Router.get('/getArticle',getArticle);

module.exports = Router;