// Import the module
var h = require('http')
var concat = require('concat-stream');
h.get(process.argv[2],function(res){
//convert the data into string
	res.setEncoding('utf8'); 
//concatenate data , find out why the last code was not working, can I not save it in an empty string and take it from there.
	res.pipe(concat(function(data){
		console.log(data.length);
		console.log(data);
	}));
});


