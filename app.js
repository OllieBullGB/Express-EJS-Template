/**
 * 
 *  Filename: app.js
 * 
 *  Date: 17th November 2022
 * 
 *  Description: An instance of the RoomFinder application
 * 
 *  Version: v1.0 17/11/22
 * 
 */

const express = require("express");
const app = express();
const helmet = require("helmet");

//ensure that the web server defaults to HTML
app.set("view engine", "ejs");

//enable basic cybersecurity measures
app.use(helmet());
app.disable("x-powered-by");

//parse incoming request bodies as json
app.use(express.json());

//give express static access to the public folder
//requests without extensions will be defaulted to .html
//if they cannot be found in routes
app.use(express.static("public", {extensions:["html"]}));

const routes = require("./routes/index");
app.use('/', routes);

module.exports = app;