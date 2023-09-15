const express = require("express");
const app = express();

//router es una pieza aislada de toda la aplicacion de express


//importamos los routers en constantes
const hellow_Router = require("./routers/hellow");
const bye_Router = require('./routers/goodbye');

//instalando los multiples routers en una sola pieza

//plot twits = EN EXPRESS TODO ES UN MIDDLEWARE

app.use(hellow_Router);
app.use(bye_Router);

app.listen(8080,function(){
    console.log('Escuchando en el puerto 8080');
})