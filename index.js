const express = require('express')
require('dotenv').config
const app = express()
const port = 3000
const data = {user : 'PRK'}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res)=>{
    res.send('Welcome!')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Thank You <h1>')
})

app.get('/future',(req,res)=>{
    res.send('<h1>Hello We will done</h1>')
})

app.get('/user',(req,res) =>{
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
