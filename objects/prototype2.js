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

var objProto = {
  name: 'Person'
}
Person.prototype = objProto;


var obj1 = new Person('Mirek');

console.log(obj1.hasOwnProperty('name'));
console.log(obj1.hasOwnProperty('firstName'));
console.log(obj1.propertyIsEnumerable('name'));
console.log(obj1.propertyIsEnumerable('firstName'));

console.log(objProto.isPrototypeOf(obj1));