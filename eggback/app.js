const express = require('express')
require('./config');
const Price = require('./price')
const app= express();
app.use(express.json())


app.post('/admin_rate',async (req,resp)=>{

    let data = new Price(req.body);
    const result = await data.save();
    resp.send(result)
    console.log(result)
    
})

app.get('', async (req,resp)=>{
    let data = await Price.find();
    resp.send(data)
})

app.listen(5000)