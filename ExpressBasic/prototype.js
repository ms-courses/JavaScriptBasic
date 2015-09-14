//Array getLength
if (!Array.prototype.getLength) {
  Array.prototype.getLength = function () {
    console.log(this);
    return this.length;
  }
  Array.prototype.each = function (cb) {
    for (var i=0;i<this.length;i++) {
      cb(i,this[i],this);
    }
  }
}

var a = [1,2,3];
function cb(index, element, array) {
  console.log('cb',index, element, array);
}
a.each(cb);