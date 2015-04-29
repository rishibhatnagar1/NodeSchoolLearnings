var concatStream = require('concat-stream');
var http = require('http');

var url1 = process.argv[2];
var url2 =process.argv[3];
var url3 = process.argv[4];
function getData (url){
http.get(url, function (response) {
  response.setEncoding('utf8');
  response.pipe(concatStream(function (data) {
   // console.log(data.length);
    console.log(data);
  }));
});
}
getData(url1);
getData(url2);
getData(url3);
