// Express parameters
const express = require("express"); //import Express
const app = express(); //starting Express on app

// root creation
app.get("/", function(req,res){
    res.send("Welcome to website"); // all roots need an answer!
});
app.get("/blog", function(req,res){
    res.send("Welcome to blog");
});
app.get("/channel", function(req,res){
    res.send("Welcome to channel");
});


// Express server starts
app.listen(4000,function(verror){
    if(verror){
        console.log("Server error when starts!");
    }else{
        console.log("Server running OK!");
    }
})