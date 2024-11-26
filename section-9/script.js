'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  dish_name: 'Classico Italiano',
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 4,
    mainIndex = 0,
    time = '00:00',
    address,
  }) {
    let output = `New delivery made at ${time} for ${address} street`;
    console.log(output);
    output = `Starter chosen: ${this.starterMenu[starterIndex]}, Main dish: ${this.mainMenu[mainIndex]}`;
    console.log(output);
  },
  openingHours: {
    thu: {
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
  },
};

// Spread operator <...>
const arr = [7, 8, 9];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
const goodArr = [1, 2, 4, ...arr];
console.log(badArr);
console.log(goodArr);
console.log(...goodArr);
const newMenu = [...restaurant.mainMenu, 'Noqui'];
console.log(newMenu);
//Copy Arrays values into another array
const mainMenuCopy = [...restaurant.mainMenu];
const foodMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(foodMenu);

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

// Getting variable names
const { dish_name, openingHours, categories } = restaurant;
console.log(dish_name, openingHours, categories);
// Renaming Objects variable names
const {
  dish_name: restaurantName,
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

/*
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
/*
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