//'use strict';
var obj = {
  name: 'Mirek'
};
Object.freeze(obj);
delete obj.name;
obj.name = 'xxxx';
obj.x = '';

console.log(obj, Object.isFrozen(obj));
