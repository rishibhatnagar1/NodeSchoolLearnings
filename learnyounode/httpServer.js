/*
Write a server that serves same text file for each request it receives, return same file .
port to be provided by 1st argument of the program
location on second commandline argument
MUST use fs.createReadStream()

*/
var fs = require('fs'); //To read the file
var http = require('http');
var file = process.argv[3];
var server =http.createServer(function(req,res){

var str = fs.createReadStream(file); //str is a readable stream
str.on('data',function(chunk){ //on data of the readble stream, write chunk by chunk
	res.write(chunk);
});
str.on('end',function(){
res.end(); // end of the chunk, end the stream
});
});
server.listen(Number(process.argv[2]));

