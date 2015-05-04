/*

Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through2` module.

*/

var through = require('through');

process.stdin.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
}, function () {
  this.queue(null);
})).pipe(process.stdout);

