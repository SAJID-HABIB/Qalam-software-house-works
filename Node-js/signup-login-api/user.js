const { json } = require("body-parser");
let express = require("express");
let fs = require("fs");
let app = express(); 

app.use(express.json());

let file = "user.json"

app.post("/signup",(req,res) => {
  let user = [];
  if (fs.existsSync(file)) {
    user = JSON.parse(fs.readFileSync(file,"utf8"));
    let {name,email,password} = req.query;
    let exist = user.find(u => u.email === email);
    if (exist) {
      res.status(404).send("alredy account exist \n please login");
      return;
    }
    user.push({
      id : user.length+1,
      name,
      email,
      password
    })
    fs.writeFileSync(file,JSON.stringify(user,null,2));
    res.status(200).send("Sigup scuccessfully")
  }
})


app.post("/login",(req,res) => {
  let user = [];
  if (fs.existsSync(file)) {
    user = JSON.parse(fs.readFileSync(file,"utf8"));
  }
  let {email,password} = req.query;
  user = user.find(u => u.email === email && u.password === password);
  if (!user) {
    res.status(404).send("invalid password or email");
    return;
  }
  res.send({message : "login successfully",user})
})

app.listen(3000,() => {
  console.log("serbver is running");
  
})