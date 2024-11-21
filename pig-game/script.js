'use strict';

// If roll 1 you lose all points of the current round
const rollBtn = document.querySelector('.btn--roll');
let score_p1 = (document.querySelector('#score--0').textContent = 0);
let score_p2 = (document.querySelector('#score--1').textContent = 0);
let p1 = document.querySelector('.player--0');
let p2 = document.querySelector('.player--1');
let diceImg = document.querySelector('img');

function roll_dice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${dice}.png`;
  if (dice === 1) {
    p1.classList.toggle('player--active');
    p2.classList.toggle('player--active');
  }
}

console.log(active_player);
rollBtn.addEventListener('click', roll_dice);
