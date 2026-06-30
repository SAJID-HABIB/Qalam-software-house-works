const { log } = require("console");
let fs =  require("fs");

let http = require("http");


fs.mkdir("new-folder",{ recursive: true },(err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Folder created scussfully");
    
  }
})

let server = http.createServer((req,res) => {
  if (req.url === "/POST") {
    fs.writeFile("new-folder/test.txt","hello i am the node js",(err) => {
      if (err) {
        console.log(err);
      }
      else {
        res.end("File is created");
        
      }
    })
  }
else if (req.url ==="/GET") {
  fs.readFile("new-folder/test.txt","utf8",(err,data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  })
}

else if (req.url === "/DELETE") {
  fs.rm("new-folder/test.txt",(err) => {
    if (err) {
      console.log(err);
    }
    else{
      res.end("file deleted");
    }
  })
}
})


server.listen(3000,() => {
  console.log("server is running...");
  
})