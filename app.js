const express = require("express")
const getdata= require("./server")
const app = express()
const jsonData={name:"abc",age:0}
app.get('/route1',function(req,res){
    res.send("<h1>hello</h1>")
    
})

app.get('/route2',function(req,res){
    res.send(jsonData)
})
app.get("/route3",function(req,res){
    res.send(getdata.data)
})

app.listen(3023)