/*
Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
*/

var express = require('express');
var app = express();

app.get('/search',function(req,res){
var fin = {};
var result =Object.keys(req.query); 
result.forEach(function(value){
	fin[value] = req.query[value];
});
res.send(fin);

});
app.listen(process.argv[2])
/* Query is an JSON object, so above process is not really required.
    var express = require('express')
    var app = express()

    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })

    app.listen(process.argv[2])


*/
