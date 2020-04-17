/*
    Steven Tran
    CyberCityComics, 2020
*/

//Imports
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

//Set PORT
let PORT = process.env.PORT || 3000;

//Init Express
const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//express.static to serve public folder as static directory
app.use(express.static("public"));

//Handlebars
app.engine("hadlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


//Start the server
app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}!`);
});