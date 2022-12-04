require('./database/conn')
const express = require("express");
const app = express();
//config.env
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'})

// middleware
const  middleware=(req,res,next)=>{
    console.log(`hello middleware`)
    next();
}




app.get("/", (req, res) => {
  res.send("Welocme!");
});

app.get("/about",middleware, (req, res) => {
  res.send("Welocme! about");
});

app.get("/contact", (req, res) => {
  res.send("Welocme! contact");
});

app.get("/login", (req, res) => {
  res.send("Welocme! login");
});

app.listen(5000);
