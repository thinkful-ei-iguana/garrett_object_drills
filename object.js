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

// Iterating over an object's properties
const obj = {
  foo: 'Nicole',
  bar: 'Garrett',
  fum: 'Wilma',
  quux: 'Nala',
  spam: 'Vicky',
};

for (let key in obj) {
  console.log(`The key is ${key}: and the value is: ${obj[key]}`);
}

// Arrays in objects
const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(food.meals[3]);

// Arrays of objects
const jobList = [
  {
    name: 'Tyler',
    jobTitle: 'Computer Language Coder',
  },
  {
    name: 'Eden',
    jobTitle: 'Corrugator Machine Operator',
  },
  {
    name: 'Paul',
    jobTitle: 'Lead Abatement Worker',
  },
];

jobList.forEach(job => console.log(`${job.name} has the Job title of: ${job.jobTitle}`));

// Properties that aren't there
const jobList = [
  {
    name: 'Tyler',
    jobTitle: 'Computer Language Coder',
    boss: 'Paul',
  },
  {
    name: 'Eden',
    jobTitle: 'Corrugator Machine Operator',
    boss: 'Paul',
  },
  {
    name: 'Paul',
    jobTitle: 'Lead Abatement Worker',
  },
];

jobList.forEach(job => {
  if (job.boss === undefined) {
  return console.log(`${job.jobTitle} ${job.name} doesn't report to anybody`);
  } else {
  return console.log(`${job.jobTitle} ${job.name} reports to ${job.boss}`);
  }
});

// Cracking the code
const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

(word[0] in cipher) ? word[cipher[word[0]] - 1] : ' ';

function decodeWords(words) {
  return words
    .split(' ')
    .map(word => decode(word))
    .join('');
}

decodeWords('craft block argon meter bells brown croon droop');

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,

    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },

    evaluateFight(character) {
      return `Your opponent takes ${Math.max(0, this.attack - character.defense)} and you receive ${Math.max(0, character.attack - this.defense)} damage`;
    }
  }
}

const characters = [
  createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6 ),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 5, 5));

characters.find(c => c.nickname === 'aragorn').describe();

const Hobbits = characters.filter(c => c.race === 'Hobbit');

const highAttackers = characters.filter(c => c.attack > 5);

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  for(const hero of arr) {
    let match = true;
    for(const key in query) {
      if(query[key] !== hero[key]) {
        match = false;
        break;
      }
    }

    if (!match) {
      continue;
    }

    return hero;
  }
  return null;
}


const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    for(const hero of this.store.heroes) {
      let match = true;
      for(const key in query) {
        if(query[key] !== hero[key]) {
          match = false;
          break;
        }
      }
  
      if (!match) {
        continue;
      }
  
      return hero;
    }
    return null;
  }
};



