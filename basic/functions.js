//console.log(sum1(2,2));

function sum1(a,b) {
  console.log(arguments);
  return a +b;
}
console.log(sum1(2,2), sum1.length);
console.log(sum1(2), sum1.length);
console.log(sum1(2,2,3,3,4,4), sum1.length);

var sum2 = function() {

}

//Callback 1
function run(cb) {
  cb();
}

function callBack() {
  console.log('Callback');
}

run(callBack);

//Callback 2
function run(cb) {
  cb();
}

var setup = function() {
  console.log('init');
  return function() {
    console.log('returned function');
  }
}

setup = setup();
setup();
setup();
(
  function(a) {
    console.log('Self invoking function',a);
  }
)(2);


run(function () {
  console.log('Callback');
});

var setup = function() {
  console.log('init');
  setup = function() {
    console.log('returned function');
  }
}

setup();
setup();
setup();

function f1() {
  function f2() {

  }
  f2();
}

//f2();
