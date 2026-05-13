let express = require("express");
let fs = require("fs");

let server = express();

server.get("/read", function (req, res) {
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

server.post("/write", function (req, res) {
  fs.writeFile("data.txt", "hello i am add in the text file ", (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("file scussfully written");
    }
  });
});

server.delete("/delete", function (req, res) {
  fs.rm("data.txt", (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("file deleted");
    }
  });
});

server.listen(8500, () => {
  console.log("server is runing on port 8500");
});
