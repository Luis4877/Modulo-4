const express = require("express");
const Router = express.Router();


Router.get("/hello",function(request,response){

    response.send('Hello Word');

});


module.exports = Router;