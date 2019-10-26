// Express parameters
const express = require("express"); //import Express
const app = express(); //starting Express on app

// root creation
app.get("/", function(req,res){
    res.send("<h1>Welcome to website</h1>"); // all roots need an answer!
});
app.get("/blog", function(req,res){
    res.send("<h2>Welcome to blog</h2>");
});
app.get("/channel", function(req,res){
    res.send("<h2>Welcome to channel</h2>");
});


// Express server starts
app.listen(4000,function(verror){
    if(verror){
        console.log("Server error when starts!");
    }else{
        console.log("Server running OK!");
    }
})