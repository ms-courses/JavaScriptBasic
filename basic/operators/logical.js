//undefined, "", NaN, null, false, 0


var a = "", b = "alaa";   //if (a || b)
var c = a || b;
console.log(Boolean(a || b), typeof c, c);

var a = 0, b = 10;    //if (a || b)
var c = a || b;
console.log(Boolean(a || b), typeof c, c);


var a = 10, b = true;  //if (a || b)
c = a || b;
console.log(Boolean(a || b), typeof c, c);

var a = {}, b = true;  //if (a || b)
c = a || b;
console.log(Boolean(a || b), typeof c, c);
