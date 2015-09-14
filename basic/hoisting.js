test();
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();

//The reason is that both variables and functions are hoisted (moved at the top of the function) but variables don’t retain any assigned value.
// So, at the time the variable a is printed, it exists in the function (it’s declared) but it’s still undefined. Stated in other words,
// the code above is equivalent to the following:
/*function test() {
    var a;
    function foo() {
        return 2;
    }

    console.log(a);
    console.log(foo());

    a = 1;
}*/

