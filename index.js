const express = require('express')
require('dotenv').config
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
