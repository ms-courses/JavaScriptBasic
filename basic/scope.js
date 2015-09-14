(function() {
    var a = b = 3;  //b=3;var a = b;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'), b);