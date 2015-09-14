//using constructor
function Person(fn, ln) {
  this.firstName = fn || '';
  this.lastName = ln || '';
}

Person.prototype = {
  print: function(v){
    console.log(fn);
  }
};

var g = new Person('Mirek');
// g is an object with own properties 'firstName' and 'lastName'.
// g.[[Prototype]] is the value of Person.prototype when new Person() is executed.