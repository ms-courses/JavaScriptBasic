/*It's important to note that the prototype is "live". Objects are passed by reference in
 JavaScript, and therefore the prototype is not copied with every new object instance.
 What does this mean in practice? It means that you can modify the prototype at
 any time and all objects (even those created before the modification) will inherit the
 changes.
 */

function Person(fn, ln) {
  this.firstName = fn || '';
  this.lastName = ln || '';
}

Person.prototype.name = 'Person';
console.log(Person.prototype);

var ob1 = new Person('Mirek');
console.log(ob1, ob1.name);

var ob2 = new Person('Adam');
console.log(ob2, ob2.name);

ob1.name = 'obj1';
console.log(ob1, ob1.name);
delete ob1.name;
console.log(ob1, ob1.name);


Person.prototype.name = 'Person';
Person.prototype.print = function(line) {
  console.log('Print from line', line);
  console.log('Name:', this.name, 'First name:', this.firstName, 'Last name:', this.lastName);
};


var obj1 = new Person('Mirek');
var obj2 = new Person('Adam');

obj1.print(24);
obj2.print(25);
Person.prototype.name = 'Person1';
obj1.print(27);
obj2.print(28);

obj1.name = 'Name of obj1';
obj1.print(31);
obj2.print(32);

delete obj1.name;
obj1.print(35);
obj2.print(36);

