const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    console.log("mongodb connect successfully ");
    
  } catch (error) {
    console.error("data base connection failed");
    process.exit(1);
  }
}

module.exports = connectDB;