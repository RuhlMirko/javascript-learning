'use strict';

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
checkIn(flight, jonas);
jonas.passport = 2323333;
jonas.firstName = 'Mirko Ruhl';
checkIn(flight, jonas);
console.log(flight, jonas);

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
