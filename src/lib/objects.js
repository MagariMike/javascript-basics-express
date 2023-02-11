const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  const ages = people.map((person) => { 
    return person.age;
  });
  return ages;
};

const findByName = (name, people) => {
 return people.find(person => name === person.name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda')
};

const averageAge = people => {
 const allAges = people.reduce((accAge,currentAge)=> {
    return accAge + currentAge.age
  },0)
  return allAges / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`
    }
      
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
