//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype 
// (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functions inherit from Function.prototype 
// (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null