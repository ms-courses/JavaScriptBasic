function O1 () {
    this.a = 'a';
}

function O2 () {
    this.b = 'b';
}
O2.prototype = new O1();
function O3 () {
    this.c = 'c';
}
O3.prototype = new O2();

function O4 () {
    this.d = 'd';
}
O4.prototype = new O3();

var o = new O4();
//Prototype chain ES5
var p1=Object.getPrototypeOf(o);
var p2=Object.getPrototypeOf(p1);
var p3=Object.getPrototypeOf(p2);

console.log(p1,p2,p3);
console.log(o.a, o.b, o.c, o.d);
