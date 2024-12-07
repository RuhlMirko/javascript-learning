'use strict';

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
console.log(euroWings, swiss);
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
