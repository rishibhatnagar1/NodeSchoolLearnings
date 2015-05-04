/* Using  call back we can sync IO operations */

var fs = require('fs');
/*The call back function is called when an error occurs, or something else happens, it is like a stack which is called on occourance of some event */
fs.readFile(__filename,{encoding:'utf8'},gotFileContent); //{} contains all the options
/* gotFileContent is a call back function */
function gotFileContent(err,content){
if (err){console.log(err);}
else{
console.log('This file content :\n\n%s ', content);

}
}
