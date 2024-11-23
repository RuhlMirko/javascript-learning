'use strict';

// If roll 1 you lose all points of the current round
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

let score_p1 = (document.getElementById('score--0').textContent = 0);
let score_p2 = (document.getElementById('score--1').textContent = 0);
console.log(score_p1, score_p2);

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
    document.getElementById(`score--${active_player}`).textContent = 0;
    currentScore = 0;
    document.getElementById(`current--${active_player}`).textContent =
      currentScore;
    if (active_player == 0) {
      score_p1 = 0;
    } else if (active_player == 1) {
      score_p2 = 0;
    }

    // Toggles to next player
    active_player = active_player == 0 ? 1 : 0;
    p1.classList.toggle('player--active');
    p2.classList.toggle('player--active');
  } else {
    currentScore += dice;
    document.getElementById(`current--${active_player}`).textContent =
      currentScore;
  }
}

function hold_score() {
  if (active_player == 0) {
    score_p1 += currentScore;
    document.getElementById(`score--${active_player}`).textContent = score_p1;
  } else if (active_player == 1) {
    score_p2 += currentScore;
    document.getElementById(`score--${active_player}`).textContent = score_p2;
  }

  currentScore = 0;
  document.getElementById(`current--${active_player}`).textContent =
    currentScore;
  active_player = active_player == 0 ? 1 : 0;
  p1.classList.toggle('player--active');
  p2.classList.toggle('player--active');
}

rollBtn.addEventListener('click', roll_dice);
holdBtn.addEventListener('click', hold_score);
