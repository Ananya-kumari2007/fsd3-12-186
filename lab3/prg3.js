 import http from 'http';

 const server = http.createServer ((req, res )=>{
    res.writeHead (200, { 'content-type':"text/html"});
    res.end("<h2> Hello client </h2>"); 
    console.log("server hit");
 });
 server.listen(4444,() =>console.log("server is running ...."));