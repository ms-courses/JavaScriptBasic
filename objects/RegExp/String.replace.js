var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas..

var re = /(\w+)\s(\w+)/;  //\w - any alphanumerical character \s - single white space
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John