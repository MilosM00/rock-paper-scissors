"use strict";


const displayWinner = document.querySelector(`.winner`);
const playerChoose = document.querySelector(`.player`);
const botChoose = document.querySelector(`.bot`);
const scorePlayer = document.querySelector(`.score-player`);
const scoreBot = document.querySelector(`.score-bot`);
const radioRock = document.querySelector(`.radio-rock`);
const radioPaper = document.querySelector(`.radio-paper`);
const radioScissors = document.querySelector(`.radio-scissors`);
const buttonShoot = document.querySelector(`.shoot`);
const buttonPlayAgain = document.querySelector(`.play-again`);
const buttonNewGame = document.querySelector(`.new-game`);


radioRock.addEventListener(`click`, () =>{

    radioRock.checked = true;
    radioPaper.checked = false;
    radioScissors.checked = false;

});

radioPaper.addEventListener(`click`, () =>{

    radioRock.checked = false;
    radioPaper.checked = true;
    radioScissors.checked = false;

});

radioScissors.addEventListener(`click`, () =>{

    radioRock.checked = false;
    radioPaper.checked = false;
    radioScissors.checked = true;

});