const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Methods", "GET, PUR, POST, DELETE");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});