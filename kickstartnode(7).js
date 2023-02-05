const http = require('http');
const fs = require('fs');
// function rqlistener(req,res){

// }
// http.createServer(function(req,res){

// });
const server = http.createServer((req,res) => {
    //console.log('Nitin');
    //console.log(req);
    const url = req.url;
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>home page</title><head>');
        res.write('<body><h1>welcome home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>about page</title><head>');
        res.write('<body><h1>welcome about us</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>home node</title><head>');
        res.write('<body><h1>welcome node js</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

    
    
});
server.listen(4000);
