const express=require('express');
const app=express();
app.get('/', (req, res) =>{
res.send("Welocme!");
});
app.listen(5000);