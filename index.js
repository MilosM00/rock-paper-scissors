"use strict";


const displayWinner = document.querySelector(`.winner`);
const playerChoose = document.querySelector(`.player`);
const botChoose = document.querySelector(`.bot`);
const scorePlayer = document.querySelector(`.score-player`);
const scoreBot = document.querySelector(`.score-bot`);
const radioRock = document.querySelector(`.radio-rock`);
const radioPaper = document.querySelector(`.radio-paper`);
const radioScissors = document.querySelector(`.radio-scissors`);
const buttonShoot = document.querySelector(`.play`);
const buttonPlayAgain = document.querySelector(`.play-again`);
const buttonNewGame = document.querySelector(`.new-game`);


let x;
let y = 0;
let z = 0;
let playing = true;

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

buttonShoot.addEventListener(`click`, () =>{

    if(
        radioRock.checked === false &&
        radioPaper.checked === false &&
        radioScissors.checked === false
    ){
        alert(`Choose rock, paper or scissors!`);
    }

    setTimeout(() => {
        
        game();

    }, 500);

});

buttonPlayAgain.addEventListener(`click`, () =>{

    radioRock.checked = false;
    radioPaper.checked = false;
    radioScissors.checked = false;
    botChoose.textContent = `❔`;
    playerChoose.textContent = `❔`;
    displayWinner.textContent = `Who Will Win?`
    playing = true;
    
});

buttonNewGame.addEventListener(`click`, () =>{
    
    radioRock.checked = false;
    radioPaper.checked = false;
    radioScissors.checked = false;
    botChoose.textContent = `❔`;
    playerChoose.textContent = `❔`;
    displayWinner.textContent = `Who Will Win?`
    y = 0;
    z = 0;
    scorePlayer.textContent = y;
    scoreBot.textContent = z;
    playing = true;

});


const game = () =>{

    if(radioRock.checked === true && playing === true){

        playerChoose.textContent = `✊`;

        x = (Math.trunc(Math.random() * 3) + 1);

        if(x === 1){
            botChoose.textContent = `✊`;
            displayWinner.textContent = `Draw!`;
        }
        
        if(x === 2){
            botChoose.textContent = `✋`;
            displayWinner.textContent = `You Lose!`;
            z++;
            scoreBot.textContent = z;
        }
        
        if(x === 3){
            botChoose.textContent = `✌`;
            displayWinner.textContent = `You Win!`;
            y++;
            scorePlayer.textContent = y;
        }

        playing = !playing;

    }

    if(radioPaper.checked === true && playing === true){

        playerChoose.textContent = `✋`;
        
        x = (Math.trunc(Math.random() * 3) + 1);

        if(x === 1){
            botChoose.textContent = `✊`;
            displayWinner.textContent = `You Win!`;
            y++;
            scorePlayer.textContent = y;
        }

        if(x === 2){
            botChoose.textContent = `✋`;
            displayWinner.textContent = `Draw!`;
        }

        if(x === 3){
            botChoose.textContent = `✌`;
            displayWinner.textContent = `You Lose!`;
            z++;
            scoreBot.textContent = z;
        }

        playing = !playing;

    }

    if(radioScissors.checked === true && playing === true){

        playerChoose.textContent = `✌`;

        x = (Math.trunc(Math.random() * 3) + 1);

        if(x === 1){
            botChoose.textContent = `✊`;
            displayWinner.textContent = `You Lose!`;
            z++;
            scoreBot.textContent = z;
        }

        if(x === 2){
            botChoose.textContent = `✋`;
            displayWinner.textContent = `You Win!`;
            y++;
            scorePlayer.textContent = y;
        }

        if(x === 3){
            botChoose.textContent = `✌`;
            displayWinner.textContent = `Draw!`;
        }

        playing = !playing;

    }

};