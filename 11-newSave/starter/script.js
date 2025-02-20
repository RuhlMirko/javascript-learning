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

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
 about their dog's age, and stored the data into an array 
 (one array for each). For now, they are just interested in knowing whether
  a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
  and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied 
array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") 
or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (arr1, arr2) {
  const dogsJuliaCopy = arr1.slice(1, -2);
  const allDogs = dogsJuliaCopy.concat(dogsKate);
  allDogs.forEach(function (age, index) {
    const isAdult = age >= 5 ? 'an adult' : 'still a puppy';
    console.log(`Dog number ${index + 1} is ${isAdult}`);
  });
};

console.log('__________TEST 1___________');
let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);
console.log('__________TEST 2___________');
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);
