'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function show_modal() {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  btnCloseModal.addEventListener('click', hide_modal);
  overlay.addEventListener('click', hide_modal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hide_modal();
    }
  });
}

function hide_modal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', show_modal);
}
