function add (a, b) {
return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
 return a / b;
}

function power (a, b) {
  return Math.pow (a,b);
}

function round (a) {
  return Math.round (a);
}

function roundUp (a) {
  return Math.ceil(a);
}

function roundDown (a) {
  return Math.floor(a);
}

function absolute (a) {
  return Math.abs(a);
}

function quotient (a, b) {
  let var1 = a / b;
  if (var1 >= 0){
    return Math.floor(var1);
} else {
  return Math.ceil(var1);
}
  
}

function remainder (a, b) {
return a % b; 
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
