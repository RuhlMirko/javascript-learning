'use strict';

//let class_selection = (document.querySelector('.message').textContent =
// 'Correct number');

//console.log(class_selection);

//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 0;

function check_value() {
  console.log(document.querySelector('.guess').value);
}

document.querySelector('.check').addEventListener('click', check_value);
