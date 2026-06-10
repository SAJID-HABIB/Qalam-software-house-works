require("dotenv").config();
const express = require ("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./Routes/authRoutes");

const app = express();


connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server Running");
});