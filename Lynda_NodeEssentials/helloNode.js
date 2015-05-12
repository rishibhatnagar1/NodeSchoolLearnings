var http = require('http');
var myserver = http.createServer(function(req,response){
// Headers
response.writeHead(200,{"Content-type":"text/HTML"});
response.write("<b>Hello</b>");
response.end();


});//create server

myserver.listen(3000);
console.log("Go to link localhost:3000");
