var fs = require('fs') //filesystem module
var path = require('path')
var dir = path.join(__dirname,'temp');
var source = __filename;
var target = path.join(dir,'target');

//The following makes a directory
fs.mkdir(dir,function(err){
if (err){
handleError(err);
}
else{
fs.readFile(source,{encoding:'utf8'},function(err,content){
if(err){handleError(err);}
else{

fs.writeFile(target,content,function(err){

if (err){
handleError(err);}
else{
console.log('all done');

}
});

}

});
}

});

function handleError(err){
console.log(err);
}
