'use strict';

// If roll 1 you lose all points of the current round
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

let score_p1 = document.getElementById('score--0');
let score_p2 = document.getElementById('score--1');
score_p1.textContent = 0;
score_p2.textContent = 0;

const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
let diceImg = document.querySelector('img');

const total_scores = [0, 0];
let currentScore = 0;
let active_player = 0;

function roll_dice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${dice}.png`;

  if (dice === 1) {
    p1.classList.toggle('player--active');
    p2.classList.toggle('player--active');

    document.getElementById(`score--${active_player}`).textContent =
      currentScore;

    currentScore = 0;
    document.getElementById(`current--${active_player}`).textContent =
      currentScore;
    active_player = active_player == 0 ? 1 : 0;
  } else {
    currentScore += dice;
    //active_player = p1.classList.contains('player-active') ? 0 : 1;
    document.getElementById(`current--${active_player}`).textContent =
      currentScore;
  }
}

rollBtn.addEventListener('click', roll_dice);
