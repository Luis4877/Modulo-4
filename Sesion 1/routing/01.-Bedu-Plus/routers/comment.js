const express = require('express');

const Router = express.Router();

Router.get('/getComment',function(request,response){
    response.send('Hola comentario ');
})


module.exports = Router;