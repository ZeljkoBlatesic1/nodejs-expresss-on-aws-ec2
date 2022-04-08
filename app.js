const express = require('express');
const app = express();
const port = 3000;

// GET method for root directory
app.get('/',(req, res)=>{
    res.send('<h1>Express Demo App</h1> <h4>Message: Good DUNJA</h4> <p>Version 2.0</p>');
})

app.get('/products',(req,res)=>{
    res.send([
        {
            productId:'101',
            price:100
        },
        {
            productId:'102',
            price:150
        }
    ])
})

app.listen(port,()=>{
    console.log(`Demo app is up and listening to port:${port}`);
})