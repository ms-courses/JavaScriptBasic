var str = 'Hello World';

//RegExp test
var re = /Hello World/;
console.log(re, re.test(str));

var re = /H*d/;
console.log(re, re.test(str));

var re = /^H/;  //String start from H
console.log(re, re.test('Hello World'));

var re = /^elo/;  //String start from L
console.log(re, re.test('Hello World'));

var re = /^Helo/;  //String start from H
console.log(re, re.test('Hello World'));

var re = /ld$/;
console.log(re, re.test(str));

var re = /o+/;  //Any o
console.log(re, re.test(str));

var re = /z+/;  //Any z
console.log(re, re.test(str));

str='hello world';
var re = /[abe]/;  //Any a,b,e
console.log(re, re.test(str));

var re = /[a-z]/;  //Any a..z
console.log(re, re.test(str));

var re = /[A-Z]/;  //Any A..Z
console.log(re, re.test(str));

var re = /(\w+)\s(\w+)/;  //\w - any alphanumerical character \s - single white space
var str = 'John Smith';

console.log(re, re.test(str));
