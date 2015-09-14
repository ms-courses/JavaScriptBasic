// Create a new object, that prototypally inherits from the Error constructor.
function MyError(message) {
  this.name = 'MyError';
  this.message = message || 'Default Message';
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  //throw new MyError();
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'Default Message'
} finally {
  console.log('Finally');
}
