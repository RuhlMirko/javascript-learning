'use strict';

//let class_selection = (document.querySelector('.message').textContent =
// 'Correct number');

//console.log(class_selection);

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
console.log(secretNumber);
let highScore = 0;

function check_value() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Add a valid number!';
  } else if (secretNumber === guess) {
    document.querySelector('h1').textContent = 'You won the game! ✨🎉';
    document.querySelector('body').style.backgroundColor = '#6b4';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '8rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
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
    }
    // Only enters this else statement if the score is 0
    else {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('h1').textContent = 'You lost the game! 💥';
      document.querySelector('body').style.backgroundColor = '#b32';
    }
  }
}

function reset_counter() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.highscore').textContent = score;
  score = 20;
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.check').addEventListener('click', check_value);
}

document.querySelector('.check').addEventListener('click', check_value);
document.querySelector('.again').addEventListener('click', reset_counter);
