const http = require('http');

const hostname ='localhost';
const port = 3000; 

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

const handleRequest = (req, res) => {
    res.send('Hello world');
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});