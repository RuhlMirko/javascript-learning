'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  restau_name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
    'No starter',
  ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6
  openingHours,
  // OLD way
  //order: function (starterIndex, mainIndex) {
  //return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //},
  // NEW Way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 4, mainIndex = 0, time = '00:00', address }) {
    let output = `New delivery made at ${time} for ${address} street`;
    console.log(output);
    output = `Starter chosen: ${this.starterMenu[starterIndex]}, Main dish: ${this.mainMenu[mainIndex]}`;
    console.log(output);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Maps iterator
///////////////////////////////////////
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

const airline = 'TAP air Portugal';
const plane = 'A320';

console.log(plane[2]);
console.log(airline.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('air'));
console.log(airline.indexOf('AIR'));

console.log(airline.slice(8));
console.log(airline.slice(4, 8));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // The plus one gets rid of the space character
console.log(airline.slice(-2));
console.log(airline.slice(4, -2));
const checkMiddleSeat = function (seatNumber) {
  const seat = seatNumber.slice(-1);
  console.log(
    seat === 'B' || seat === 'E'
      ? 'You got the middle seat 😥'
      : 'You got lucky 😃'
  );
};
// ABC DEF , B and E are middle seats
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
const badName = 'jOnaS';
const lowerName = badName.toLowerCase();
const goodName = lowerName[0].toUpperCase() + lowerName.slice(1);
console.log(goodName);

const email = 'hello@jonas.io';
const badEmail = '   Hello@jonas.io \n';
const goodEmail = badEmail.toLowerCase().trim();
console.log(email === goodEmail);

const priceARG = '288,97ARS';
const priceUS = priceARG.replace('ARS', 'US').replace(',', '.');
console.log(priceARG, priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate')); // Using regular expressions to replace all strings
console.log(announcement.replaceAll('door', 'gate')); // Using replaceAll() to replace all strings

// Booleans functions
console.log(airline.includes('A320'));
console.log(airline.startsWith('TA'));
console.log(airline.endsWith('Portugal'));
console.log(
  airline.startsWith('TAP') && airline.includes('Port') ? true : false
);

// Practice
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  console.log(
    baggage.includes('gun') || baggage.includes('knife')
      ? `Contains a banned item`
      : 'Legal items'
  );
};
checkBaggage('I have a laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Snacks and a GUN');

/* Maps Iteration
// Using keys and values in a for loop
console.log(question.get('question'));
for (const [key, value] of question)
  typeof key === 'number' ? console.log(value) : console.log();

//Long Way
console.log('Testing: ');
let answer = Number(prompt('Your answer'));
let result =
  answer === question.get('correct') ? question.get(true) : question.get(false);
console.log(result);
answer = Number(prompt('Your answer'));
result =
  answer === question.get('correct') ? question.get(true) : question.get(false);
console.log(result);
//Short way
let answer = Number(prompt('Your answer:'));
console.log(question.get(answer === question.get('correct')));

// Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Convert Map to array
console.log([...question]);
// Operator of maps
console.log(question.entries()); // Returns entries
console.log([...question.keys()]); // returns keys as array
console.log([...question.values()]); // Returns values as array
*/
/* Maps Fundamentals
///////////////////////////////////////
// Setting map values
const restMap = new Map();
// Long way
restMap.set('name', 'Clasico italiano');
restMap.set(1, 'Firenze, italy');
restMap.set(2, 'Lisbon, portugal');
// Short way
restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'Open for clients')
  .set(false, 'Closed for clients');
console.log(restMap);
// Getting/retrieve map values
console.log(restMap.get(1), restMap.get('open'), restMap.get(true));
// Long way
let time = 8;
let result = restMap.get(
  time > restMap.get('open') && time < restMap.get('close')
);
console.log(result);
time = 21;
result = restMap.get(time > restMap.get('open') && time < restMap.get('close'));
console.log(result);
// Deleting item from map
let res = restMap.has('categories')
  ? restMap.delete(2)
  : console.log('Not available');
console.log(restMap);
restMap.clear();
console.log(restMap);
// Set arrays as keys
const newMap = new Map();
// The get method only receives referencial values, not arrays
// You need to save the array key to reference it later
const mapKeyDirection = [1, 2];
newMap.set(mapKeyDirection, 'Test');
console.log(newMap.get(mapKeyDirection));
// DOM events
newMap.set(document.querySelector('h1'), 'Heading');
console.log(newMap);
*/
/* Sets
///////////////////////////////////////
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic bread');
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffPositions = [...new Set(staff)];
console.log(staffPositions);
*/
/* Looping objects keys and values
///////////////////////////////////////
const openList = Object.keys(openingHours);
let output = `We are open on ${openList.length} days: `;
// Accessing key names of objects
for (const day of Object.keys(openingHours)) {
  output += `${day} `;
}
console.log(output);
//Accesing properties values
output = '';
console.log(Object.values(openingHours));
for (const [day, { open, close }] of Object.entries(openingHours)) {
  output += `On ${day} we open from ${open}hs to ${close}hs - `;
  console.log();
}
console.log(output);
*/
/* Optional chaining
///////////////////////////////////////
// ES2020 optional chaining
console.log(restaurant.openingHours.mon);
console.log(restaurant.openingHours.mon?.open);
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  const close = restaurant.openingHours[day]?.close ?? 'Closed';
  console.log(day, open, close);
}
console.log(restaurant.orderMore?.(0, 1) ?? 'Not Available');
const users = [
  {
    name: 'Jonas',
    email: 'example@jonas',
  },
];
// Long way
//if (users.length > 0) console.log(users[0].name)
//else console.log('User array empty');
// Short way
console.log(users[5]?.name ?? 'User array empty');

/* For of Loop
///////////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Long Way
//for (let i in menu) {
//  console.log(menu[i]);
//}
// Short way
for (let i of menu) console.log(i);
// returns an array for each item containing its index and its value
for (let [i, ent] of menu.entries()) {
  console.log(`${i + 1}: ${ent}`);
}
*/
/* Short Circuiting part 2
///////////////////////////////////////
const rest1 = {
  name: 'Capri',
  numGuest: 0,
};
const rest2 = {
  name: 'La piazza',
  owner: 'Giovanni',
};
// Long Way
//rest1.numGuest = rest1.numGuest ?? 10;
//rest2.numGuest = rest2.numGuest || 10;
// Short way
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
// Long Way
//rest1.owner = rest1.owner && 'ANON';
//rest2.owner = rest2.owner && 'ANON';
// Short Way
rest1.owner &&= 'ANON';
rest2.owner &&= 'ANON';
console.log(rest1);
console.log(rest2);
*/
/* Nullish values
//////////////////////////////////////////////////
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
// Works with null, undefined, 0 and empty strings
const goodGuest = restaurant.numGuest ?? 10;
console.log(guest);
console.log(goodGuest);
*/
/* Short circuiting part 1
//////////////////////////////////////////////////
console.log('---OR---');

console.log(3 || 'Truthy');
console.log(0 || 'Truthy');
console.log('' || 'Truthy');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Truthy'); // Ignores falsy values
// Long way
const num_guests = restaurant.numGuests ? restaurant.numGuests : 0;
console.log(num_guests);
// Short way
const num_guests1 = restaurant.numGuests || 1;
console.log(num_guests1);

console.log('---AND---');

// Oposite of OR
console.log(2 && 'Truthy' && null);
console.log(2 && 'Truthy' && undefined && 0 && ''); // Ignores truthy values
// Long way
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'spinach');
  console.log('Pizza ordered');
}
// Short way
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'Albahaca');
*/
/* Spread operator <...>
const arr = [7, 8, 9];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
const goodArr = [1, 2, 4, ...arr];
console.log(badArr);
console.log(goodArr);
console.log(...goodArr);
const newMenu = [...restaurant.mainMenu, 'Noqui'];
console.log(newMenu);
*/
/* Copy Arrays values into another array
//////////////////////////////////////////////////
const mainMenuCopy = [...restaurant.mainMenu];
const foodMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(foodMenu);
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// Using spread operator as argument
const ingredients = ['Cheese', 'Flour', 'Oregano'];
restaurant.orderPasta(...ingredients);
// Make copies of object without using reference
const newRest = { foundedIn: 1980, ...restaurant, founder: 'Guiseppe' };
const restaurantCopy = { ...restaurant };
restaurantCopy.restau_name = 'Ristorante Roma';
restaurantCopy.location = 'Calzadilla 646, Tigre, Buenos Aires';
console.log(restaurant);
console.log(restaurantCopy);
*/
/* Rest pattern
//////////////////////////////////////////////////
// 
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);
const [pizza, , rissoto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, other);
const { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekdays, weekend);
// Using rest for functions
const add = function (...numbers) {
  let result = 0;
  for (let i in numbers) result += numbers[i];
  console.log(result);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 51, 17];
add(...x); // Spreading array to pass as *args
restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'pepperoni');
const italianIngredients = ['Flour', 'Cheese', 'Oregano', 'Pepperoni'];
restaurant.orderPizza(...italianIngredients); // Spreading array to pass as *args in objects
*/
/* Functions inside objects
//////////////////////////////////////////////////
// Functions inside objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Calzadilla, 636',
  mainIndex: 0,
});
*/
/* Getting variable names of Objects
//////////////////////////////////////////////////
// Getting variable names
const { restau_name: dish_name, openingHours, categories } = restaurant;
console.log(dish_name, openingHours, categories);
// Renaming Objects variable names
const {
  restau_name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Setting default values
const { menu = ['undefined', 'default'], starterMenu: starters = [] } =
  restaurant;
console.log(menu, starters);
// Switching variables values
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Only works if wrapped in parenthesis
console.log(a, b);
// Nested Objects
const {
  fri: { open: open_hour, close },
} = openingHours;
console.log(`Opening: ${open_hour}, Close: ${close}`);
*/
/* Assign array values to variables
//////////////////////////////////////////////////
// Long way
const arr = [2, 3, 4, 5, 6, 7];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Short way
const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);

// Skipping elements
const [first, , second, , , third] = arr;
console.log(first, second, third);

// Switching values
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Long way
/*
const temp = main;
main = secondary;
secondary = temp;
*/
/* Switch values of arrays
//////////////////////////////////////

// Short way
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive two values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Accesing Nested arrays
const nested = [1, 2, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q = 1, r = 'default'] = [8, 9];
console.log(p, q, r);
*/
