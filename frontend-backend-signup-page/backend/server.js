const express = require("express");

const connectDB = require("./config/db");

let app = express();

connectDB();

app.listen(3000, () => {
  console.log("server running on port 3000");
})
