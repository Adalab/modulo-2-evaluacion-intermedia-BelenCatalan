'use strict';

const btn = document.querySelector('.js-updateNumber');
const getNumberuser = document.querySelector('.js-getNumber');
const givePistaUser = document.querySelector('.js-pistaUser');
const givecont = document.querySelector('.js-contTimes');

//Primero general un número aleatorio

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
  }
console.log('algofunciona');
console.log(getRandomNumber);
debugger;
//Usuario introduce un número, comprobamos que esté entre 0 y 100, comprobamos que sea igual o no a nuestro número, y devolvemos dos líneas
function checkNumber(){
  const number = getNumberuser.value;
  console.log(number);

  if (number < 0 || number > 100){
    givePistaUser.innerHTML = 'El número debe estar entre 1 y 100';
  }
  else if (number === getRandomNumber){
    givePistaUser.innerHTML = 'Has ganado campeona!!!';
  }
  else if (number < getRandomNumber){
    givePistaUser.innerHTML = 'Demasiado bajo';
  }
  else if (number > getRandomNumber){
    givePistaUser.innerHTML = 'Demasiado alto';
  }
}

// devolver el número de pruebas


//llamamos a las funciones, porque todas funcionan con el boton
function showall(){
  getRandomNumber();
  checkNumber();
}



btn.addEventListener('click' showall);
