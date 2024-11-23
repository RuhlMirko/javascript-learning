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

let currentScore = 0;
let active_player = 0;

let winning_score = 50;
let game_is_on = true;

function roll_dice() {
  if (game_is_on) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`;

    if (dice === 1) {
      // Resets the current and total score
      if (active_player == 0) {
        score_p1 = 0;
      } else if (active_player == 1) {
        score_p2 = 0;
      }
      document.getElementById(`score--${active_player}`).textContent = 0;
      currentScore = 0;
      document.getElementById(`current--${active_player}`).textContent =
        currentScore;

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
}

function hold_score() {
  if (game_is_on) {
    if (active_player == 0) {
      score_p1 += currentScore;
      document.getElementById(`score--${active_player}`).textContent = score_p1;
      // Winning functionality
      if (score_p1 >= winning_score) {
        p1.classList.add('player--winner');
        game_is_on = false;
      } else {
        switch_player();
      }
    } else if (active_player == 1) {
      score_p2 += currentScore;
      document.getElementById(`score--${active_player}`).textContent = score_p2;
      // Winning functionality
      if (score_p2 >= winning_score) {
        p2.classList.add('player--winner');
        game_is_on = false;
      } else {
        switch_player();
      }
    }
  }
}

function switch_player() {
  currentScore = 0;
  document.getElementById(`current--${active_player}`).textContent =
    currentScore;
  active_player = active_player == 0 ? 1 : 0;
  p1.classList.toggle('player--active');
  p2.classList.toggle('player--active');
}

function reset_game() {
  game_is_on = true;
  currentScore = 0;
  active_player = 0;
  score_p1 = 0;
  score_p2 = 0;
  document.getElementById(`current--1`).textContent = currentScore;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`score--0`).textContent = score_p1;
  document.getElementById(`score--1`).textContent = score_p2;
  p1.classList.add('player--active');
  p2.classList.remove('player--active');
  p1.classList.remove('player--winner');
  p2.classList.remove('player--winner');
}

rollBtn.addEventListener('click', roll_dice);
holdBtn.addEventListener('click', hold_score);
newBtn.addEventListener('click', reset_game);

// test
