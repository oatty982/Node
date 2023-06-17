// 
let callbackValue;
function hello4(err, value) {
	callbackValue = value;
}

function tryHello4() {
    let returnValue = 'returnValue';
    return returnValue;
  }
  
  console.log(tryHello4()); // prints 'returnValue'

  console.log(tryHello4(hello4)); // prints 'returnValue'