'use strict';

const checkBtn = document.getElementsByClassName('check');

const againBtn = document.getElementsByClassName('again');

const guess = document.getElementsByClassName('guess');

const message = document.getElementsByClassName('message');

const score = document.getElementsByClassName('score');

const highScore = document.getElementsByClassName('highscore');

const number = document.getElementsByClassName('number');
(function () {
  let numberToCheck;

  guess[0].value = 0;

  let scoreCounter = 20;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (numberToCheck = Math.floor(Math.random() * (max - min + 1)) + min);
  }
  getRandomInt(1, 20);

  checkBtn[0].addEventListener('click', () => {
    if (+guess[0].value === numberToCheck) {
      document.body.classList.add('win');

      message[0].innerHTML = 'You win!!!';

      if (scoreCounter > highScore[0].innerHTML) {
        highScore[0].innerHTML = scoreCounter;
      }
      number[0].innerHTML = numberToCheck;
    } else if (+guess[0].value > numberToCheck) {
      message[0].innerHTML = 'Too high...';

      --scoreCounter;

      scoreCounting();
    } else if (+guess[0].value < numberToCheck) {
      message[0].innerHTML = 'Too low...';

      --scoreCounter;

      scoreCounting();
    } else {
      message[0].innerHTML = 'There is no number...';

      --scoreCounter;

      scoreCounting();
    }
  });

  againBtn[0].addEventListener('click', () => {
    getRandomInt(1, 20);
    document.body.classList.remove('win');
    guess[0].value = 0;
    scoreCounter = 20;
    score[0].innerHTML = scoreCounter;
    number[0].innerHTML = '?';
  });

  scoreCounting();

  function scoreCounting() {
    score[0].innerHTML = scoreCounter;
  }
})();
