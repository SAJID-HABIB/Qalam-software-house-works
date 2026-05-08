let server = require("express");
let app = server();

app.use(server.json());

let user = [];
app.listen(3000,() => {
  console.log("server is running on port 3000");
  
})

app.post("/user",(req,res) => {
  res.json({
    message : "sajid user is added",
    data : user
  });
});