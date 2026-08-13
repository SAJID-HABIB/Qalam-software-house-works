require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongooDB is connected");
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
  })
  .catch((err) => {
    console.log("MongooDB connection failed",err);
    
  })
})