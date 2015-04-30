/*
Create TCP Server
port number: provided by 1st argument
For each connection , write data time etc.
*/
var net = require('net');
var time = new Date();
var server = net.createServer(function(socket){ //connection listner
console.log(time.getFullYear()+'-'+time.getMonth()+'-'+time.getDay()+' '+time.getHours()+':'+time.getMinutes())+"\n";
socket.end(function(){
	return (time.getFullYear()+'-'+time.getMonth()+'-'+time.getDay()+' '+time.getHours()+':'+time.getMinutes())+"\n"
});
});
server.listen(process.argv[2]);
