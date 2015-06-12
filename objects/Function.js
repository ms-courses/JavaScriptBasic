var obj1 ={
  name : 'obj1',
  print : function () {
    console.log(this, this.name);
  }
}
var f = obj1.print.bind(obj1);

f();