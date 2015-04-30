/*
Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.
*/
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.post('/form',function(req,res){
var name = req.body.str.split('').reverse().join(''); // reverses the value of input
res.send(name);
res.end();
});
app.listen(Number(process.argv[2]));
