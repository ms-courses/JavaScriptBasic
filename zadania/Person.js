function Person(fn, ln) {
  this.firstName = fn || '';
  this.lastName = ln || '';
}

var person1 = new Person();
console.log(person1);
var person2 = new Person('Mirek');
console.log(person2);
