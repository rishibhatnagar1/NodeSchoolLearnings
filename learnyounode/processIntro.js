 /*
When you use .slice for an array, it will remove all the entries before that, used the same thing here

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

*/
var number = process.argv.slice(2)
sum = number.reduce(function(curval,preval){return +curval + +preval;});
/* when you use .readuce for an array, it means, all the values in the array have to reduce to one value ,maybe this is what they call production level code, I would have run a loop for the entire length of the array. Yup, I am stil supid */
console.log(sum);
