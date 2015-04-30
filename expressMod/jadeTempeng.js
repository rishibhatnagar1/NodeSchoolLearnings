/*
Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString
*/
var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.get('/home', function (req, res) {
  res.render('index', { date:new Date().toDateString() });
});

app.listen(Number(process.argv[2]));

/* Correct code

    var express = require('express')
    var app = express()
    app.set('view engine', 'jade')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])

*/
