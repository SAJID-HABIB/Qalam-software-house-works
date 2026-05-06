let fileSystem = require('fs');


// creat file 
fileSystem.writeFileSync('test.txt','hello i am sajid habib chughtai');

fileSystem.writeFile('test.txt','hello node js',(err) => {
  if (err) {
    throw err;
  }
  console.log("file written");
  
});