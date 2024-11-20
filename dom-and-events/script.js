'use strict';

//let class_selection = (document.querySelector('.message').textContent =
// 'Correct number');

//console.log(class_selection);

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 0;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

function check_value() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(secretNumber);
  if (!guess) {
    document.querySelector('.message').textContent = 'Add a valid number!';
  } else if (secretNumber === guess) {
    document.querySelector('h1').textContent = 'You won the game!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > 20 || guess < 0) {
    document.querySelector('h1').textContent =
      'Enter a number between 1 and 20';
  }
  // Only enters this else statement if the guess is a number between 1 and 20 but not the correct number
  else {
    if (score != 1) {
      let diff = Math.abs(secretNumber - guess);
      score = score - 1;
      document.querySelector('.score').textContent = score;
      if (diff <= 5) {
        document.querySelector('.message').textContent = 'Very Warm 🔥';
      } else if (diff <= 10) {
        document.querySelector('.message').textContent = 'Warm ♨';
      } else {
        document.querySelector('.message').textContent = 'Very Cold ❄';
      }
    } else {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('h1').textContent = 'You lost the game!';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
}

document.querySelector('.check').addEventListener('click', check_value);
