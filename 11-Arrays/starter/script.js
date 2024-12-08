'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovement = function (movement) {
  containerMovements.innerHTML = '';

  movement.forEach(function (item, index) {
    const checkType = item >= 0 ? `deposit` : `withdrawal`;
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${checkType}">${
      index + 1
    } ${checkType}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${item}€</div>
        </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovement(account1.movements);

/////////////////////////////////////////////////
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
// LECTURES
/* Slices and splices
/////////////////////////////////////////////////
console.log('Slice: ');
// Slice takes part of the array without mutating the original one
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(0, 3));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Only use when chaining
console.log([...arr]); // Use to spread elements

// splice mutates the original array
console.log('Splice: ');
console.log(arr.splice(-2));
console.log(arr);

// Reverse mutates the original array
console.log('Reverse: ');
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let newArr = ['j', 'i', 'h', 'g'];
console.log(newArr.reverse());

// Concat doesn't mutate the original array
console.log('Concat: ');
const fullArr = arr.concat(newArr);
console.log([...arr, ...newArr]); // Same result
console.log(fullArr);

// Join doesn't mutate the original array
console.log('Join: ');
const joinedArr = fullArr.join(', ');
console.log(joinedArr);

// The new <.at()> method
const arr = [23, 11, 64];
console.log(arr[0]); // Old
console.log(arr.at(1)); // New
console.log(arr[arr.length - 1]); // Old
console.log(arr.at(-1)); // New
*/
/* For each method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Long Way
/* for (let item of movements) {
  console.log(
    item >= 0 ? `Deposit of ${item}` : `Withdrawal of ${Math.abs(item)}`
  );
}
// Short way (Cant break of a loop, not even with break nor continue)
movements.forEach(function (item, index, entireArr) {
  console.log(`${index}: of [${arr}]`);
  console.log(
    item >= 0 ? `Deposit of ${item}` : `Withdrawal of ${Math.abs(item)}`
  );
});
// For each with Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, entireMap) {
  console.log(key, value);
});
// For each with Set
const curr = ['USD', 'ARS', 'MEX', 'EUR', 'MEX', 'USD', 'ARS'];
const uniqueCurr = new Set(curr);
uniqueCurr.forEach(function (value, repeatValue, entireSet) {
  console.log(value, repeatValue);
});
*/
