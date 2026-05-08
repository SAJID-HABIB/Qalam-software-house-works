const { error } = require("console");
let fileSystem = require("fs");
const { text } = require("stream/consumers");

// creat file
fileSystem.writeFile("test.txt", "hello i am sajid habib ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});

fileSystem.writeFile("index.html", "<h2>hello html file</h2>", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("html file created");
  }
});

fileSystem.writeFileSync("text.html", "<h1>hello i am the text.html</h1>");
console.log("text.html");

fileSystem.readFile("index.html", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

let data = fileSystem.readFileSync("test.txt", "utf8");
console.log("data is", data);

fileSystem.appendFile("test.txt", "\n new line added", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("new data is enterd");
  }
});

fileSystem.appendFileSync("text.html", "\n<p>paragraph is enetred</p>");
console.log("paragraph is enetred");

fileSystem.unlink("text.html", (er) => {
  if (er) {
    console.log(er);
  } else {
    console.log("file deleted");
  }
});

fileSystem.rename("text.html", "rename.html", (err) => {
  if (err) {
    console.log("Something went wrong!");
  } else {
    console.log("nothing the error");
  }
});

fileSystem.renameSync("rename.html", "again.html");

fileSystem.rename("file-system", "fs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder scuccess fully created");
  }
});

fileSystem.renameSync("fs", "file-system");

fileSystem.readdir("file-system", (err) => {});

fileSystem.writeFile(
  "./file-system/main.js",
  "console.log('hello i am hte file in other folder')",
  (err) => {},
);

fileSystem.writeFileSync("./file-system/script.js", "aler('hello')");

let data = fileSystem.readFile("./file-system/main.js", "utf8");
