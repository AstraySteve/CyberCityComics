/*
    Steven Tran
    CyberCityComics, 2020
*/

//Imports
const express = require('express');

//Set PORT
let PORT = process.env.PORT || 3000;

//Init Express
const app = express();

//Start the server
app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}!`);
});