var express = require('express');
var postmethd = require('body-parser');
var app = express();
app.use(postmethd.json())
app.use(express.json())
app.use(express.urlencoded())

app.listen(process.env.PORT || 3000 ,()=>console.log("server running....."));
//GET Method
app.get("/",function(req,res,next){
    res.send("Hello this is get method");
})
let users = [
    {id : 1, username : "lyall"},
    {id : 2, username : "swetha"},
    {id : 3, username : "hari"}
]
app.get('/api/users',(req,res)=>res.send(users));

//POST METHOD
app.post('/api/users',(req,res)=>{
    console.log(req.body)
})
// app.post("/",function(req,res,next){
//     console.log(res.body);
//     res.send("This is post method");

// });


