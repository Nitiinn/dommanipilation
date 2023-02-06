const http = require('http');

const routes9 = require('./routes9');

console.log(routes9.someText);

const server = http.createServer(routes9.handler);

server.listen(4000);
