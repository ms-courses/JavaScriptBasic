//undefined, "", NaN, null, false, 0

var b = false;
console.log(typeof b, b);

console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(0));


//true
console.log(Boolean(Infinity));
console.log(Boolean({}));

