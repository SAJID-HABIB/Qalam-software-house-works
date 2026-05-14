let http = require ("http");
// const { json } = require("stream/consumers");
let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

let server = http.createServer((req,res) => {
  if (req.method === "GET" && req.url === "/products") {
    res.writeHead(200, {
      "content-type" : "applicatio/json"
    })
    
  }
  res.end(json.stringify(products));
})

server.listen(3000,() =>{
  console.log("Get api is running");
  
})