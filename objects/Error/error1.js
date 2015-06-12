//The Error constructor creates an error object.
// Instances of Error objects are thrown when runtime errors occur.
// The Error object can also be used as a base objects for user-defined exceptions.
// JS has standard built-in error types: EvalError, InternalError.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function foo() {
  throw new Error('saddas');
}
try {
  foo();
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

