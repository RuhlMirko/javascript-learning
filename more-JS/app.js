"use strict";

// Switch statements

let new_number = 4;

console.log(typeof new_number);

switch (new_number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
}

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log();

// Exercise
function calcTip(value) {
  return value > 50 && value < 300 ? value * 0.15 : value * 0.2;
}
let bills = [122, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Ruhl",
  birthYear: 2001,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};
// Dot notation and Bracket notation
console.log(jonas.age, jonas["job"]);

// Expressions in brackets notations
let valueKey = "first";
console.log(jonas[valueKey + "Name"]);
valueKey = "last";
console.log(jonas[valueKey + "Name"]);

//const interest = prompt("What do you want? ");
//console.log(jonas[interest]);

jonas.location = "Portugal";
jonas["twitter"] = "@jonas";

console.log(
  `${jonas.firstName} is ${jonas.calcAge()} years old, has ${
    jonas.friends.length
  } friends, and his best friend is ${jonas.friends[0]}`
);

function summary() {
  let isDriver = jonas.hasDriverLicense
    ? "he has a driver's license."
    : "he doesn't have a drivers license.";
  return `${jonas.firstName} is a ${jonas.age} years old ${jonas.job}, and ${isDriver}`;
}
console.log(summary());

// Functions
const years = [1991, 2001, 1969, 2012, 1992, 2002, 2004];
const ages = [];
for (let index in years) {
  let age = 2024 - years[index];
  if (age % 2 != 0) continue;
  ages.push(age);
}
console.log(ages);

if (ages.length == 4) {
  let new_let = 2000;
  const new_const = 2000;
  var new_var = 2020;
}

console.log(new_var);
//console.log(new_const);

const a = "Mirko";

function first() {
  const b = "Ruhl";
  second();

  function second() {
    const c = "Programming";
    third();

    function third() {
      const d = 2001;
      console.log(a + b + c + d);
    }
  }
}

first();

// Hoisting
console.log(me);
//console.log(job);
//console.log(year);
var me = "Mirko";
let job = "programmer";
const year = 2001;

// Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Example

//if (!numProduct) deleteShopCart();
let numProduct = 10;
//var numProduct = 10;
function deleteShopCart() {
  console.log("All products deleted");
}
