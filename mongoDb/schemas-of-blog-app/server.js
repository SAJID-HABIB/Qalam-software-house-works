const mongoose = require ("mongoose");

const User = require ("./User.model");

mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
.then(async () => {
  console.log("Databsae connected ");
})
