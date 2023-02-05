const http = require('http');
// function rqlistener(req,res){

// }
// http.createServer(function(req,res){

// });
const server = http.createServer((req,res) => {
    console.log('Nitin');
    console.log(req);
    
});
server.listen(4000);