const mongoose = require("mongoose");
const { error } = require("node:console");

mongoose.connect("mongodb://127.0.0.1:27017/ecommernce")
.then(() => console.log("dataBase connect"))
.catch((error) => console.log(error)
);