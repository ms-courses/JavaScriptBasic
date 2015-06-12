function O1 () {
    this.a = 'a';
    this.print = function() {
        console.log(this.a);
    }
}
function O2 () {
    this.b = 'b';
}
O2.prototype = new O1();
//O2.prototype.constructor = O1;
function O3 () {
    this.c = 'c';
}
O3.prototype = new O2();
//O3.prototype.constructor = O2;

function O4 () {
    this.d = 'd';
}
O4.prototype = new O3();
//O4.prototype.constructor = O3;

var o = new O4();
//console.log(o.constructor);
console.log(o.a, o.b, o.c, o.d);
o.a='dasdsda';
o.print();
