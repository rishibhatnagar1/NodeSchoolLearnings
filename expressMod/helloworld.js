/*
Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of
the application, ie. process.argv[2].
*/
var exp = require('express');
var app = exp();
app.get('/home',function(req,res){
res.end('Hello World!')
});
app.listen(Number(process.argv[2]));
