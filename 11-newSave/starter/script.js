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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* Array methods
let arr = [11, 23, 24, 37, 44, 58, 97];
console.log(arr.slice(1, 3)); // Range
console.log(arr.slice(-3)); // Last 3 items
// Make copies of arrays without overwriting existing values
const arrCopy = arr.slice(2);
const arrCopy1 = [...arr];
//Concat joins two arrays together, even with duped items
const fullArr = arrCopy.concat(arrCopy1);
console.log(fullArr);
// Splice modifies the og array, Used mostly to remove elements from an array
console.log(arr.splice(-2), arr);
// Joins arrays into a single string
console.log(fullArr.join('-'));
// The method at() can take expressions as a parameter
const arr = [23, 11, 64];
// console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
*/

/* For Each
movements.forEach(function (item) {
  console.log(
    item > 0 ? `You deposited ${item}` : `You withdrew ${Math.abs(item)}`
  );
});
*/

/* For each Maps and Sets
currencies.forEach(function (currVal, key, fullMap) {
  console.log(currVal, key, fullMap);
});
const currenciesUnique = new Set(['USD', 'ARS', 'GBP', 'EUR', 'ARS', 'USD']);
// Sets have two equal values, just ignore but write it anyways
currenciesUnique.forEach(function (currVal, _, fullSet) {
  console.log(currVal, _, fullSet);
});
*/

const displayMov = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (item, i) {
    const type = item > 0 ? 'deposit' : 'withdrawal';

    const html = `  
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">2 deposit</div>
          <div class="movements__date">${i + 1}</div>
          <div class="movements__value">${item}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMov(account2.movements);
