const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var sql = require('./services/mysqlService');
require('dotenv').config();
const connection = sql.Connect();

//routes
app.get("/", function(req, res){
    res.render("index.html");
})

app.get("/mercury", function(req, res){
    res.render("mercury.html");
})

app.get("/venus", function(req, res){
    res.render("venus.html");
})

app.get("/earth", function(req, res){
    res.render("earth.html");
})

app.get("/mars", function(req, res){
    res.render("mars/mars.html");
})

app.get("/jupiter", function(req, res){
    res.render("jupiter/jupiter.html");
})

app.get("/jupiter_clicker", function(req, res){
    res.render("jupiter/jupiter_clicker.html");
})

app.get("/jupiter_pong", function(req, res){
    res.render("jupiter/jupiter_pong.html");
})
app.get("/jupiter_pongv2", function(req, res){
    res.render("jupiter/jupiter_pongv2.html");
})

//Listener
app.listen(5000, function(){
    console.log("Express server is running...");
});