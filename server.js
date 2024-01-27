"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic server setup
//Import dependencies 'express' and types 'Request' and 'Response' from express
var express = require('express');
//Import .env info
require("dotenv").config();
//Create an application function
var app = express();
//Send message as a get request to '/'
app.get('/', function (req, res) {
    res.send("Hello, World!");
});
//Listen on PORT or port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { console.log("Listening on port ".concat(PORT)); });
//Testing comment for TSC/JS compiler
