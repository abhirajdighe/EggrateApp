const express = require('express');
const app = express();
require('./config')
const Product = require('./price')
app.use(express.json())


app.post('/create',async (req,resp)=>{
    resp.send("hi pranay")
});

app.listen(6000)