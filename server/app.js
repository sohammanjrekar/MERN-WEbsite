const express=require('express');
const app=express();



app.get('/', (req, res) =>{
res.send("Welocme!");
});
app.get('/about', (req, res) =>{
    res.send("Welocme! about");
    });

app.get('/contact', (req, res) =>{
        res.send("Welocme! contact");
        });

app.get('/login', (req, res) =>{
            res.send("Welocme! login");
            });

app.listen(5000);