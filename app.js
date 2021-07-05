const express = require('express');
const app = express();
let port= 3030;
let path= require('path');

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto ${port}\n http://localhost:${port}`)
})



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/babbege',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/babbege.html'))
})

app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/berners-lee.html'))
})

app.get('/clarke',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/clarke.html'))
})

app.get('/hamilton',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/hamilton.html'))
})
app.get('/hopper',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/hopper.html'))
})
app.get('/lovelace',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/lovelace.html'))
})
app.get('/turing',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/turing.html'))
})

