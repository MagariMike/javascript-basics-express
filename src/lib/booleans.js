function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;

};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  if (a === false && b === false) {
    return true;
  }
  else {
    return false;
  }
};

function one(a, b) {
return Boolean(a ^ b);
// NEED TO REVIEW THE ABOVE*//
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  if (a === b){
    return true;
  }
  else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b){
    return true;
  }
  else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b){
    return true;
  }
  else {
    return false;
  }
};

function isOdd(a) {
  if (a % 2 === 1){
    return true;
  }
  else {
    return false;
  }
};

function isEven(a) {
  if (a % 2 === 0){
    return true;
  }
  else {
    return false;
  }
};

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }

};

function startsWith(char, string) {
  if (string.startsWith(char))
  {
    return true;
  }
  else {
    return false;
  }
};

function containsVowels(string) {
  if (string.includes("a")) {
    return true;
  }
 else if (string.includes('O')) {
  return true;
 }
 else {
  return false;
 }
};

function isLowerCase(string) {
 return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
