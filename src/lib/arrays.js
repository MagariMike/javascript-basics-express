const getNthElement = (index, array) => {
  
  if(index > array.length-1) {
    return array[index - array.length];
  }
  return array[index];
};


const arrayToCSVString = array => { 
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const nonono = numbers.map(num => {
    return String(num);
  });
  return nonono;
};

const uppercaseWordsInArray = strings => {
  const upper = strings.map(element => {
    return element.toUpperCase();
  });
  return upper;
};

const reverseWordsInArray = strings => {
  const reverse = strings.map((word) => { 
    let anyvar = word.split('');
    anyvar.reverse();
    return anyvar.join('');
  });
  return reverse;
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0)
};

const removeNthElement2 = (index, array) => {
  
  return array.filter(item => item !== array[index])
  
};

const elementsStartingWithAVowel = strings => {
 const vowelArray = strings.filter((string) => {
  return string.match(/^[aeiou]/gi)
 })
 return vowelArray;
};

const removeSpaces = string => {
  return string.replaceAll(' ','');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, num) => { 
    return acc + num;
  },0)
};

const sortByLastLetter = strings => {
  const reverseString = item => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);
  
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
