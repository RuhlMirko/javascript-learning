'use strict';

//let class_selection = (document.querySelector('.message').textContent =
// 'Correct number');

//console.log(class_selection);

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 0;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

function check_value() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(secretNumber);
  if (!guess) {
    document.querySelector('.message').textContent = 'Add a valid number!';
  } else if (secretNumber === guess) {
    document.querySelector('h1').textContent = 'You won!';
    document.querySelector('body').style.backgroundColor = 'green';
  } else {
    let diff = Math.abs(secretNumber - guess);
    if (diff <= 5) {
      document.querySelector('.message').textContent = 'Very Warm';
    } else if (diff <= 10) {
      document.querySelector('.message').textContent = 'Warm';
    } else {
      document.querySelector('.message').textContent = 'Very Cold';
    }
  }
}

document.querySelector('.check').addEventListener('click', check_value);
