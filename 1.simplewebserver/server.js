const http = require('http');

const hostname = "127.0.0.1";
const port = 1337;

http.createServer((req,res) => {
    res.writeHead('200', {'Content-type':'text-plain'});
    res.end('Hello world');
}).listen(port,hostname,() => {
    console.log('Server run');
});