const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  calcAge1 = function () {
    console.log(2037 - this.birthYear);
  };

};

/*
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log(jonas.__proto__);
console.log(Person.prototype);

const matilda = new Person('Matilda', 2017);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

*/

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);
console.log(jonas.__proto__);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';

console.log(Person.prototype);
console.log(jonas.__proto__);

console.log(jonas.species, matilda.species);



// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

console.log(Person.prototype.constructor);
jonas.hasOwnProperty('name  ');
