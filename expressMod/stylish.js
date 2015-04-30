/*
Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.
*/
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use('/static',express.static(__dirname+ '/fol'));//This will tell the app that /static will have all the components to /fol 
app.use(require('stylus').middleware(process.argv[3]));
app.get('/',function(req,res){
res.sendFile('/Users/z001br3/CodeBase/NodeSchoolLearnings/expressMod/fol/index.html');
});
app.listen(Number(process.argv[2]));

/* Correct code from Nodeschool

    var express = require('express')
    var app = express()

    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));


    app.listen(process.argv[2])

*/
