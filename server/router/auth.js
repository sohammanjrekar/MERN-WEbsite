const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
require("../database/conn");

const User = require("../models/userschema");
router.get("/", (req, res) => {
    res.send("Welocme! server");
});

router.post("/register", async(req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill" });
    }
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            res.status(201).json({ error: "user alright " });
        } else {


            const user = new User({
                name: name,
                email: email,
                phone: phone,
                password: password,
                cpassword: cpassword,
            });
            console.log(email)
            await user.save()
                .then(() => {
                    res.status(201).json({ error: "user successfully save" })
                })
                .catch((err) => {
                    res.status(500).json({ error: "failled to save" });
                    console.log(err);
                })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "failled" });
    }
});




router.post("/signin", async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill" })
        } else {

            const userLogin = await User.findOne({ email: email });

            if (!userLogin) {
                res.status(400).json({ message: "error" })
            } else {
                const isMatch = await bcrypt.compare(password, userLogin.password)
                if (!isMatch) {
                    res.json({ message: "invalid credinals" })
                } else {
                    res.json({ message: "sccessfull login" })
                }
            }
        }

    } catch (error) {
        console.log(error)
    }

});
module.exports = router;