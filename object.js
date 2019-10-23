'use strict';

// Object creator
function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    }
  };
}

// Object updater
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';

  return obj;
}

// Self-reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  };
  return person;
}

// Deleting keys
function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;

  return obj;
}

// Make student reports
function makeStudentsReport(data) {
  return data.map(d => `${d.name}: ${d.grade}`);
}

// Enroll in summer school
function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: 'In Summer school',
      course: student.course,
    };
  });
}

// Find by id
function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

// Validate object keys
const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  for (let i = 0; i < expectedKeys.length; i++) {
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
  }
  return true;
}

// Object drills

// Object initializers and methods

const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (loaf.water / loaf.flour) * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());