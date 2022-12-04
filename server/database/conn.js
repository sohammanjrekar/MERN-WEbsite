//config.env
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'})
// conection
const mongoose = require ('mongoose');
const DB= process.env.DATABASE;



mongoose.connect(DB,{
// useNewUrlParser:true,
// useCreateIndex:true,
// useUnifiedTopology:true,
// useFindAndModify:false,
}).then(()=>{
    console.log(`connection successful`);

}).catch((err)=>{
    console.log(`connection fail`);
})