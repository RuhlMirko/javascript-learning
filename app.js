const company = "ASAP Frontend";
let last_letter = company[company.length - 1];
let new_string_item = "email@mail.com";

let list_test = [company, last_letter, new_string_item];
for (item in list_test) {
  if (list_test[item] == "d") console.log("Found the letter");
  console.log(list_test[item]);
}

let usd = 2300;
let aud = usd * 1.5;
console.log(aud);

let isBot = false;
let age = 19;
result = age >= 18 && isBot ? "Bot detected" : "Not a bot";
console.log(result);

let loggedIn = true;
let hasMembership = true;
check_credentials = loggedIn && hasMembership ? "show video" : "dont show";
console.log(check_credentials);

age = 1;
while (age < 20) {
  age++;
  console.log(age);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (i = 1; i <= 15; i++) {
  if (i % 5 === 0) {
    console.log(`${i} - Asap FrontEnd`);
  } else if (i % 2 !== 0) {
    console.log(`${i} - Asap`);
  } else if (i % 2 === 0) {
    console.log(`${i} - FrontEnd`);
  }
}

let string = "ASAP Frontend";
for (i in string) {
  console.log(string[i]);
}

function greetUser(name, time = "morning") {
  console.log(`Hello ${name}, good ${time}`);
}

greetUser("Mirko");
greetUser("Roger");
greetUser("Joel", "Afternoon");

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
  // Optimal way of doing it, code above is for clarity
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(6));

function convertCurrency(USD) {
  return USD * 1.5;
}

console.log(convertCurrency(1200));
console.log(convertCurrency(500));
console.log(convertCurrency(200));

// Arrow Functions
const convertArrowCurrency = (USD) => {
  return USD * 1.5;
};
console.log(convertArrowCurrency(1200));

let fruits = ["Apple", "Bananas", "Eggs", "Milk"];
console.log(fruits[1]);
fruits.push("Pear");
console.log(fruits);
console.log(fruits[fruits.length - 1]);

// Array filter
fruits = [20, 15, 10, 30];
let filteredArray = fruits.filter((element) => {
  console.log(element);
  if (element <= 15) {
    return true;
  }
});
// One line of the code above
filteredArray = fruits.filter((element) => {
  return element <= 15;
});
filteredArray = fruits.filter((element) => element <= 15);
console.log(filteredArray);

let firstWave = [18, 20, 16, 15, 21];
let secondWave = [16, 17, 14, 15, 19];
let thirdWave = [20, 22, 26, 16, 20];

function checkAge(age_list) {
  let new_Array = age_list.filter((element) => element >= 18);
  console.log(new_Array);
}
console.log("Exercise: ");
checkAge(firstWave);
checkAge(secondWave);
checkAge(thirdWave);
// Looping trought array
console.log(firstWave);
for (i in firstWave) {
  firstWave[i] *= 2;
}
console.log(firstWave);

console.log("Maps");
let array = [1, 2, 3, 4, 5];
new_Array = array.map((element) => element * 4);
console.log(new_Array);

console.log("Exercise");
function convertCurrencyArray(amount_list) {
  new_Array = amount_list.map((element) => element * 1.5);
  console.log(new_Array);
}
firstWave = [10, 20, 30, 40];
secondWave = [100, 150, 35];
convertCurrencyArray(firstWave);
convertCurrencyArray(secondWave);

//Objects
console.log("Objects:");
let user = [
  {
    email: "example@gmail.com",
    password: "test1234",
    name: "Mirko",
    discord: "Examplediscord",
    subscription: "vip",
  },  
  {
    email: "NEW@gmail.com",
    password: "test1234",
    name: "Mirko",
    discord: "Examplediscord",
    subscription: "vip",
  },
];

console.log(user[0].name);
console.log(user[1].email);
