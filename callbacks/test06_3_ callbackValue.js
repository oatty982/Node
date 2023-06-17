let callbackValue;

function hello4(err, value) {
  callbackValue = value;
}

function tryHello4(callbackFunction) {
  let callbackValue = 'callbackValue';
  callbackFunction(null, callbackValue);
}

tryHello4(hello4);
console.log(callbackValue); // prints 'callbackValue'
