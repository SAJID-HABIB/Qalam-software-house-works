import express from "express";
// e.g., import cors from "cors";

import fs from "fs";
import cors from "cors";


const app=express();
app.use(cors());
app.use(express.json());
app.get("/users",(req,res)=>{
const data=fs.readFileSync("users.json","utf-8");
res.json(JSON.parse(data));
});
app.post("/users",(req,res)=>{
const newUser=req.body;
const data=fs.readFileSync("users.json","utf-8");
const users=JSON.parse(data);
users.unshift({
    id:Date.now(),
    ...newUser
});
fs.writeFileSync(
    "users.json",
    JSON.stringify(users,null,2)
);
res.json({
    message:"User added Successfully"
});
});
app.listen(5000,()=>{
    console.log("Server running on port 5000");
});