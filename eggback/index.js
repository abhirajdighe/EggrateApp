const express = require('express')
require('./config');
const Price = require('./price')
const Price2 = require('./price2')
const cors = require('cors')
const app= express();
app.use(express.json())
app.use(cors())


app.post('/admin_rate',async (req,resp)=>{

    let data = new Price(req.body);
    const result = await data.save();
    resp.send(result)
    console.log(result)
    
})

app.post('/getdata', async (req,resp)=>{
    let data = await Price.find(); 
    resp.json(data)
})

// hen rate :---------------------------

app.post('/sethendata',async(req,resp)=>{
    let data = new Price2(req.body);
    const result = await data.save();
    resp.send(result)
    console.log(result)
})

app.post('/gethendata',async (req,resp)=>{
    let data = await Price2.find();
    resp.send(data);
})

app.listen(5000)