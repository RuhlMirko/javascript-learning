'use strict';

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
createBooking('LH19882', 105);
console.log(bookingList);
