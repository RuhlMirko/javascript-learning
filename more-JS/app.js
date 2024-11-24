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
