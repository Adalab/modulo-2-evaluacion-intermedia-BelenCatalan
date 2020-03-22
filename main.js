'use strict';

const btn = document.querySelector('.js-updateNumber');
const getNumberuser = document.querySelector('.js-getNumber');
const giveClueUser = document.querySelector('.js-pistaUser');
const giveCont = document.querySelector('.js-contTimes');

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
const randomNumber = getRandomNumber();

console.log(randomNumber);

let tries = 0;
function numItems(ev) {
  // ev.preventDefault();
  tries = tries + 1;
  giveCont.innerHTML = 'Número de intentos: ' + tries;
}

function checkNumber(ev) {
  let number = getNumberuser.value;
  number = parseInt(number);
  ifStructure(number);
}

function ifStructure(number) {
  if (number < 0 || number > 100) {
    giveClueUser.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (number === randomNumber) {
    giveClueUser.innerHTML = 'Has ganado campeona!!!';
  } else if (number < randomNumber) {
    giveClueUser.innerHTML = 'Demasiado bajo';
  } else {
    giveClueUser.innerHTML = 'Demasiado alto';
  }
}
function showAll(ev) {
  ev.preventDefault();
  checkNumber();
  numItems();
}

btn.addEventListener('click', showAll);
