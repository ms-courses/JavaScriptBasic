var fmaxmin1=require('./zad1');
var fmaxmin3=require('./zad3');

var array= [2,4,7,33,121,1];

function f(cbMinMax) {
  //deklaracja tablic
  cbMinMax(array);
}

f(fmaxmin1);
fmaxmin3(array);