/*
Server receives only POST
converts incoming POST body character to upper case, returns to client
*/
var http =require('http');

var server = http.createServer(function(req,res){
if (req.method == 'POST'){
var body ='';
req.on('data',function(data){
body += data;
});
req.on('end',function(){
var BODY = body.toUpperCase();
res.write(body.toUpperCase());
res.end()
});

}
});
server.listen(Number(process.argv[2]))

/* Another way(better way)

 var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

*/
