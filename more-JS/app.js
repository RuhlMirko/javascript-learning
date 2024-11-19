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
  age: 2024 - 2001,
  job: "teacher",
  teacher: ["Michael", "Peter", "Steven"],
};
