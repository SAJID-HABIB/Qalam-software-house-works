let http = require('http');

let makeServer = http.createServer((req, res) => {
  res.write('hello i am the server of the node js');
  res.end();
});

makeServer.listen(3000,() => {
  console.log('server is running');
})



let server2 = require('http');

let makeServer2 = server2.createServer((req,res) => {
  res.write('hello i am the 2nd server ');
  res.end();
});

makeServer2.listen(3001,() => {
  console.log('2nd server is running');
  
})