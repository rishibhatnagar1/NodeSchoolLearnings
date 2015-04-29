var fs = require('fs');
/* This function below has a call back function, this is how js usually works */
// In the line below, we could have converted toString, but utf8 does that



fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
