//config.env
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// conection
const mongoose = require("mongoose");
const DB = process.env.DATABASE;

const PORT = process.env.PORT;

mongoose
    .connect(DB)
    .then(() => {
        console.log(`connection successful`, PORT);
    })
    .catch((err) => {
        console.log(`connection fail`, PORT);
    });