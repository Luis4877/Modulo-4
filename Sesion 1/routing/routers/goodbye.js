const express = require("express");
const Router = express.Router();


Router.get('/goodbye',function (request,response){
    response.send('Good Bye');
})
module.exports = Router;