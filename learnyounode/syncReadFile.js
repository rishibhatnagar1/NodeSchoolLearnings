var fs =require('fs')
/* Reading the text from the command line, since the first part of process.argv is 'node' and second is '/path/to / whatevet ' hence [2] in the front.
The file we read needs to be converted to String, this is done using toString function. Once that is converted to string,we solit the file at all the new lines, so our total length will be the length of this thing -1 , not sure why -1 though */
var text = fs.readFileSync(process.argv[2]);

console.log(text.toString().split('\n').length-1);
//console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1)
