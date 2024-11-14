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

function greetUser(name) {
  console.log(`Hello ${name}`);
}

greetUser("Mirko");
greetUser("Joel");
