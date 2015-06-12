//The match() method retrieves the matches when matching a string against a regular expression.
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/i;
console.log(str.match(regexp));

var regexp = /[A-E]/gi;
console.log(str.match(regexp));


var str = 'For more information, see Chapter 3.4.5.1';
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs ['Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1']

// 'Chapter 3.4.5.1' is the first match and the first value
// remembered from `(Chapter \d+(\.\d)*)`.

// '.1' is the last value remembered from `(\.\d)`.