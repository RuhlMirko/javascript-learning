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

// Adding intials based on full names
const createInitial = function (accObj) {
  accObj.forEach(function (curAcc) {
    curAcc.username = curAcc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createInitial(accounts);
/////////////////////////////////////////////////
// Log in
let currentAccount;
const logInUser = function (event) {
  // Prevents a reload
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.trim(' ').toLowerCase()
  );

  if (inputLoginPin.value == currentAccount.pin) {
    console.log('Right password');
    containerApp.style.opacity = 1;
    calcDisplayBalance(currentAccount.movements);
    displayMovement(currentAccount.movements);
    calcDisplaySummary(currentAccount);
  }
};

btnLogin.addEventListener('click', logInUser);

/////////////////////////////////////////////////
// Already Logged
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
    //containerMovements.insertAdjacentHTML('beforeend', html); // inserts from beginning to end
  });
};

const calcDisplayBalance = function (movObj) {
  const balance = movObj.reduce((acc, item) => acc + item, 0);
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (Obj) {
  const movObj = Obj.movements;

  const incomes = movObj
    .filter(item => item > 0)
    .reduce((accum, item) => accum + item);
  labelSumIn.textContent = incomes + '€';

  const outcomes = Math.abs(
    movObj.filter(item => item < 0).reduce((accum, item) => accum + item)
  );
  labelSumOut.textContent = outcomes + '€';

  const intTotal = movObj
    .filter(item => item > 0)
    .map(deposit => (deposit * Obj.interestRate) / 100)
    .filter(int => int >= 1) // Only adds interest if bigger than 1
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = intTotal + '€';
};

/* Find method
const movements = account1.movements;
const firstWithdrawal = movements.find(item => item < 0);
const findJonas = accounts.find(
  currAcc => currAcc.owner === 'Jonas Schmedtmann'
);

console.log(firstWithdrawal);
console.log(findJonas);
*/
/* Coding Challenge #3
///////////////////////////////////////
Rewrite the 'calcAverageHumanAge' function from the previous challenge,
 but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge = dogAges =>
  'Average age: ' +
  Math.trunc(
    dogAges
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  ) +
  ' years';

const testData1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const testData2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(testData1 + '\n' + testData2);
*/
/* Coding Challenge #2
///////////////////////////////////////

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages
 to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula:
 if the dog is <= 2 years old, humanAge = 2 * dogAge. 
 If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


const calcAverageHumanAge = function (ages) {
  // 1 // 2
  const humanAge = ages
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(item => item > 18);
  // 3
  const avg = Math.trunc(
    humanAge.reduce((acu, cur) => acu + cur, 0) / humanAge.length
  );
  console.log(
    `Human ages: ${humanAge.join(', ')}\nAverage of ages: ${avg} years old`
  );
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/* Reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* Long Way
  function (acu, cur, index, arr) {
  console.log(`Index ${index}: ${acu} `);
  return acu + cur;
}
//
const PnL = movements.reduce((acu, cur) => acu + cur, 0); // Short way
console.log(PnL);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const maxValue = movements.reduce(
  (accu, currt) => (accu > currt ? accu : currt),
  movements[0]
);
console.log(maxValue);
*/
/* Filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(item => item > 0);
const withdrawals = movements.filter(item => item < 0);
console.log(deposits, withdrawals);
*/
/* Map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const converted = movements.map(item => Math.trunc(item * 1.1));
console.log(converted);

const movDescrip = movements.map((item, index, arr) => {
  let result =
    item > 0
      ? `Movement ${index + 1}: You deposited ${item}`
      : `Movement ${index + 1}: You withdrew ${Math.abs(item)}`;
  return result;
});
console.log(movDescrip);
*/
///////////////////////////////////////
// Coding Challenge #1
/* Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* Coding Challenge complete
// 1
const checkDogs = function (dogsJulia, dogsKate) {
  const fixJuliaDogs = dogsJulia.slice(1, -2);
  const allDogs = fixJuliaDogs.concat(dogsKate);
  allDogs.forEach(function (dogAge, index) {
    console.log(
      dogAge > 3
        ? `Dog number ${index + 1} is an adult`
        : `Dog number ${index + 1} is still a puppy`
    );
  });
  /*
  fixJuliaDogs.forEach(function (dogAge, index) {
    console.log(
      dogAge > 3
        ? `Dog number ${index + 1} is an adult`
        : `Dog number ${index + 1} is still a puppy`
    );
  });
  console.log('Kate Dogs: ');

  dogsKate.forEach(function (dogAge, index) {
    console.log(
      dogAge > 3
        ? `Dog number ${index + 1} is an adult`
        : `Dog number ${index + 1} is still a puppy`
    );
  });
  
};

console.log('Test data 1:');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('\nTest data 2:');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
/////////////////////////////////////////////////
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/* Slices and splices
/////////////////////////////////////////////////
// Dont use when chaining other methods
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
