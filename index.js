function add() {
    // we'll fill this in shortly
  }
  function subtract() {
    // we'll fill this in shortly
  }
  function multiply() {
    // we'll fill this in shortly
  }
  function divide() {
    // we'll fill this in shortly
  }
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  //reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

function increment(n) {
    return (n += 1);
  }
  function decrement(n) {
    return (n -= 1);
  }

  increment(n); 
  decrement(n);

  function makeInt(n){
   return parseInt(n , 10)
    }
    function preserveDecimal(n){
    return parseFloat(n)
    }

  makeInt(n);
  preserveDecimal(n);
