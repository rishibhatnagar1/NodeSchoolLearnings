var express = require('express');
var app = express();
var routes = require('./routes');


app.set('view engine','ejs');// setups up variables for express
/* if I wish to use some other directory instead of view, this is how it is done 
app.set('view',__dirname+ '/');

*/ 
app.locals.pagetitle ="Awesome "; // This is passed to every single page.
app.get('/',routes.index);
app.get('/about',routes.about);
app.get('/me',routes.me);
app.get('*',function(req,res){
res.send(" 404 , NOT FOUND BRO");
})

var server = app.listen(3000,function(){
console.log('listening on port 3000 ');
})
