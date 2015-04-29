/* Needs fs and path for */
var fs = require('fs');
var path = require('path');
module.exports = function myfunction(dir,ext,callback){
var res = [];
fs.readdir(dir, function (err, list) {
if(err)
{
return callback(err);
}
  list.forEach(function (filename) {
    if (path.extname(filename) != '.' + ext) {
      res.push(filename);
    }
  });
callback(false,res);
});
}
 
