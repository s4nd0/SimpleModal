'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const handleClick = id => {
  console.log('Clicked button number ', id);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const handleClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const handleEsc = e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    handleClose();
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);

  btnsOpenModal[i].addEventListener('click', () => handleClick(i));
}

btnCloseModal.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);

document.addEventListener('keydown', e => handleEsc(e));
