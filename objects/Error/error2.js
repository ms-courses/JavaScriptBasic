function err() {
  //throw new EvalError('eval error');
  //throw new RangeError('eval error');
  //throw new ReferenceError();
  throw new TypeError();
}

try {
  err();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ': ' + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ': ' + e.message);
  } else {
    console.log(e.name + ': ' + e.message);
  }
  // ... etc
}