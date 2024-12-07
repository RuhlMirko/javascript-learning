'use strict';

// Closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();

/* Anonymus functions (Inmediatly Invoked Function Expression) or IIFE
(function () {
  console.log('Run this time');
  const privateNum = 34;
})();
(() => console.log('Never run again'))();
*/
/* Inherit fucntions from objects
const aeroArg = {
  airline: 'AeroArg',
  iataCode: 'BA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} for ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};
aeroArg.book(244442, 'Mirko');
aeroArg.book(642312, 'Jonas');
console.log(aeroArg.bookings);

// call function
const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};
const book = aeroArg.book;
book.call(euroWings, 23, 'Sarah');
book.call(swiss, 583, 'Mary Cooper');
const newFlight = [460, 'Jack Marston'];
book.apply(swiss, newFlight); // Old version
book.call(swiss, ...newFlight); // Newer version

const bookEW = book.bind(euroWings); // bind() returns a function
const bookLX = book.bind(swiss);
const bookAR = book.bind(aeroArg);
bookEW(250, 'Steven');
bookLX(125, 'Steven');
bookAR(160, 'Steven');
const bookEW23 = book.bind(euroWings, 23); // Add default parameters to the bind
bookEW23('John Doe');
bookEW23('Jane Doe');
console.log(aeroArg, euroWings, swiss);
//Functions with event Listeners
aeroArg.planes = 300;
aeroArg.buyPlane = function () {
  this.planes++;
  console.log(this.planes, this);
};
document
  .querySelector('.buy')
  .addEventListener('click', aeroArg.buyPlane.bind(aeroArg));

// Partial aplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Copy the arrow function when you dont have an object for bind() use null
const addIVA = addTax.bind(null, 0.21);
console.log(addIVA(2300));
// Challenge
const addTax1 = rate => value => value + value * rate;
const addIVA1 = addTax1(0.21);
console.log(addIVA1(2600));
*/
/* Returning functions
const greet = function (str) {
  return function (name) {
    console.log(`${str} ${name}`);
  };
};
// Long Way
const greetHello = greet('Hello');
greetHello('Mirko');
// Short way
greet('Hey')('Jonas');

// Challenge
const greet1 = str => name => console.log(`${str} ${name}`);
greet1('Hi')('Ruhl');
*/
/* Higher order functions
const oneWord = function (userInput) {
  return userInput.replaceAll(' ', '').toLowerCase();
};
const upperFirst = function (userInput) {
  let [first, ...rest] = userInput.split(' ');
  //first = first[0].toUpperCase() + first.slice(1).toLowerCase();
  return [first.toUpperCase(), ...rest].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Transformed: ${fn(str)} by <${fn.name}()>`);
};
transformer('JavaScirpt is the best', upperFirst);
transformer('programmed to work', oneWord);
console.log(upperFirst('heLLO World programmed'));
//console.log(oneWord('Hello world, programmed to work and not to feel'));

const greet = function () {
  console.log('👋');
};
document.body.addEventListener('click', greet);
const nameList = ['Jonas', 'Mirko', 'Adam'];
nameList.forEach(greet);
*/
/* Functions referencial and primitives values
const flight = 'LH541';
const jonas = {
  firstName: 'Jonas Schmedtmann',
  passport: 24739479281,
};
const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.firstName = 'Mr. ' + passenger.firstName);

  console.log(
    passenger.passport === 24739479281 ? 'Check in' : 'Invalid Passport'
  );
};
const newPass = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
  person.passport = String(person.passport).padStart(6, '99');
};
checkIn(flight, jonas);
jonas.firstName = 'Mirko Ruhl';
newPass(jonas);
checkIn(flight, jonas);
console.log(flight, jonas);
*/
/* Functions deafult parameters
//////////////////////////////////////
const bookingList = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookingList.push(booking);
};
createBooking('LH20334', 405, 700);
createBooking('WC15631');
createBooking('LH19882', undefined, 105); // Skips value with undefined
console.log(bookingList);
*/
