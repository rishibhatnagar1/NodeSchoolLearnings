/* Perform HTTP get request, first command line argument.
Write string contents of each data event in a new line */
var http = require('http');

http.get(process.argv[2],function(response){
//response is a stream object , it has 3 events, on data, on error and end .
response.setEncoding('utf8');
response.on("data",function(data){

console.log(data);
});
});


