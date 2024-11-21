'use strict';

// If roll 1 you lose all points of the current round
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
let current_p1 = document.getElementById('current--0').textContent;
let current_p2 = document.getElementById('current--1').textContent;

let score_p1 = (document.getElementById('score--0').textContent = 0);
let score_p2 = (document.getElementById('score--1').textContent = 0);
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
let diceImg = document.querySelector('img');

function roll_dice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${dice}.png`;
  score_p1 += dice;
  if (dice === 1) {
    p1.classList.toggle('player--active');
    p2.classList.toggle('player--active');
  }
}

rollBtn.addEventListener('click', roll_dice);
