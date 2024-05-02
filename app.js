const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");

const app=express();


app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.render("index");
})

app.post("/",function(req,res){
    res.redirect("/language");
})



app.get("/language",function(req,res){
    res.render("language");
})

app.post("/language",function(req,res){
    console.log(req.body);
    res.redirect("/nativelanguage");
})

app.get("/nativelanguage",function(req,res){
    
    res.render("native-language");
})

app.post("/nativelanguage",function(req,res){
    res.redirect("/level");
})

app.get("/level",function(req,res){
    res.render("level");
})

app.post("/level",function(req,res){
    res.redirect("/hug");
})




app.get("/hug",function(req,res){
    res.render("hug");
})

app.post("/hug",function(req,res){
   
    res.render("hug");
})











app.listen("3000",function(){
    console.log("Server started on port 3000");
})