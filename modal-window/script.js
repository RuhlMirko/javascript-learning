'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function remove_hidden_class() {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  btnCloseModal.addEventListener('click', add_hidden_class);
  overlay.addEventListener('click', add_hidden_class);
}

function add_hidden_class() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', remove_hidden_class);
}
