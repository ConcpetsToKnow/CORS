const http = require('http');

const hostname ='localhost';
const port = 3000; 

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

const handleRequest = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method == 'GET') {
    res.end('Hello World');
  } else if (req.method == 'OPTIONS') {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.end();
  } else {
    res.end('Hello World from another world');
  }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});