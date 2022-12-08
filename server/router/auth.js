const express=require('express');
const router=express.Router();
require('../database/conn')


const User=require('../models/userschema')
router.get("/", (req, res) => {
    res.send("Welocme! server");
  });

router.post('/register',(req,res)=>{


const {name , email,phone, password ,cpassword}=req.body;
console.log(name)
console.log(email)
console.log(phone)
console.log(password)
console.log(cpassword)
if(!name || !email || !phone || !password || !cpassword){
return res.status(422).json({error:"plz fill"});
}

User.findOne({email:email}).then((userExist)=>{
    if(userExist){
        return res.status(422).json({error:"email already exist"});
    }
    const user = new User({name:name , email:email, phone:phone, password:password, cpassword:cpassword})

    user.save().then(()=>{
        res.status(201).json({error:"user successfully save"});
    }).catch((err)=>{
        res.status(500).json({error:"failled to save"});
    })
}).catch((err)=>{
    console.log(err)
})









    // console.log(name);
    // console.log(email);
    // // res.json({message:req.body})
    // res.send("mera")

})

module.exports=router;