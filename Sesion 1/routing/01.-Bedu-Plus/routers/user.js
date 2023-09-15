const express = require('express');

const Router = express.Router();

Router.get('/getUser',function(request,response){
    response.send('Hola usuario');
})


module.exports = Router;