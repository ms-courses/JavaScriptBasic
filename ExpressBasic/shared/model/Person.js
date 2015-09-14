function Person(fn, ln) {
  this.fn = fn || '';
  this.ln = ln || '';
}

Person.prototype.print = function() {
  console.log(this.fn, this.ln);
}

function Pracownik(fn, ln, salary) {
  Person.call(this, fn, ln);
  this.salary = salary || 0;
}
//Pracownik.prototype = Object.create(Person.prototype);
var obj = new Pracownik();
for (i in obj) {
  console.log(i,obj[i], obj.hasOwnProperty(i));
}