const express = require("express")
const app = express()
app.get("/home",(reg,res)=>{
    res.send("Hello World")
})
app.get("/whoamI",(reg,res)=>{
    res.send("We are Nancy and Preetha")
})
app.get("/aboutme",(reg,res)=>{
    res.send("We are AI and DS students")
})
app.get("/dreams",(reg,res)=>{
    res.send("Our dream is to do something related to technology")
})

app.listen(4000)