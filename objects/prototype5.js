function Person(fn, ln) {
  this.firstName = fn || '';
  this.lastName = ln || '';
}

var objProto = {
  name: 'Person'
}
Person.prototype = objProto;


var obj1 = new Person('Mirek');

//ECEMAScript 6
console.log(Object.getPrototypeOf(obj1), Person.prototype);
