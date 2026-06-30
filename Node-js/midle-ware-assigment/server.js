const { log } = require("console");
let express = require("express");
let fs = require("fs");
// const { use } = require("react");

let app = express();

app.use(express.json());

function logger(req,res,next) {
  console.log("Sign up and sign in api");
  next();
}

app.use(logger);


app.post("/signup", (req,res,next ) => {
  let {name,email,password} = req.query;

  if (!name || !email || !password) {
    return res.status(400).send("all filed are required");
  }
  let users =  JSON.parse(fs.readFileSync("data.json","utf8"));

  let userExist = users.find((user => user.email === email ));
  if (userExist) {
    return res.status(400).send("user already exists")
  }

  let newUser = {
    id : users.length + 1,
    name,
    email,
    password
  }

  users.push(newUser);
 fs.writeFileSync(
  "data.json",
  JSON.stringify(users, null, 2)
);

  res.send({
    message : "Signup Successful",
    user : newUser
  })
})

app.post("/signin",(req,res,next) =>{
  let {email, password} = req.query;

  let users = JSON.parse(fs.readFileSync("data.json","utf8"));

  let user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).send("Invalid Email or password ");
  }
  res.send("login Successful")
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});