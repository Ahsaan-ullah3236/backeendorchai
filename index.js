// import express from "express"
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req , res)=>{
  res.send('ahsanullah.com')
})
app.get('/facebook', (req ,res) =>{
  res.send('fjalkfjfldfsdlf')
})
app.get('/youtube', (req,res) =>{
  res.send('<h1>This is the youtube page and this is fjkfls</h1>')
})
 
app.listen(process.env. PORT, () => {
  console.log(`Example app listening on port ${port}`)
})