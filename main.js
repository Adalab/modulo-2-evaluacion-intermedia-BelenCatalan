'use strict';

const btn = document.querySelector('.js-updateNumber');
console.log(btn);
const getNumberuser = document.querySelector('.js-getNumber');
const givePistaUser = document.querySelector('.js-pistaUser');
const giveCont = document.querySelector('.js-contTimes');

//Primero generar un número aleatorio

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
const randomNumber = getRandomNumber();

console.log(randomNumber);

//Usuario introduce un número, comprobamos que esté entre 0 y 100, comprobamos que sea igual o no a nuestro número, y devolvemos dos líneas
function checkNumber() {
  const number = getNumberuser.value;
  // const randomNumber = getRandomNumber();
  console.log(number);
  console.log(randomNumber);

  if (number < 0 || number > 100) {
    givePistaUser.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (number === randomNumber) {
    givePistaUser.innerHTML = 'Has ganado campeona!!!';
  } else if (number < randomNumber) {
    givePistaUser.innerHTML = 'Demasiado bajo';
  } else if (number > randomNumber) {
    givePistaUser.innerHTML = 'Demasiado alto';
  } else {
    //do nothing
  }
}

// devolver el número de pruebas
// function numItems{
// let tries = btn.currentTarget //numero de veces que pinchemos el botton
// tries = tries + 1;
// giveCont.innerHTML= ('Número de intentos: ' tries)

// }

//llamamos a las funciones, porque todas funcionan con el boton
function showall() {
  checkNumber();
  //numItems();
}

btn.addEventListener('click', checkNumber);
