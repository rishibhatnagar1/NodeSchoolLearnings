var re = require('./readModule.js')

re(process.argv[2],process.argv[3],function(err,data){
if (!err){
for (var i =0 ; i< data.length; i+=1){
console.log(data[i]);
}
}
else{
console.log(err);
}
})
