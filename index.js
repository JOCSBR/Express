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
app.get("/hello/:name/:company/:city?/:title?", function(req,res){
    // req = data sent by the user
    // res = response sent to the user
    var name = req.params.name;
    var company = req.params.company;
    var city = req.params.city;
    var title = req.params.title;
    if(title){
        res.send("<h1>Hello " + name + " of " + company + " of " + city + " about " + title + "</h1>");
    }else{
        res.send("<h1>Hello " + name + " of " + company + " of " + city + " No title </h1>");
        }
        // res.send("<h1>Hello " + name + " of " + company + " of " + city + "</h1>");
});


// Express server starts
app.listen(4000,function(verror){
    if(verror){
        console.log("Server error when starts!");
    }else{
        console.log("Server running OK!");
    }
})