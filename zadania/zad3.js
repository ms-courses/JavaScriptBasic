function findMaxAndMin(tab) {
  var max=tab[0], min=tab[0];
  function f() {
    for (i in tab) {
      if (max < tab[i]) {
        max = tab[i];
      }
      if (min > tab[i]) {
        min = tab[i];
      }
    }
  }
  f();
  console.log(min,max);
}

module.exports = findMaxAndMin;