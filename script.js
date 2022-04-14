'use strict';

let message = document.querySelector('.message');
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;
const again = document.querySelector('.again');
const bntCheck = document.querySelector('.check');
bntCheck.addEventListener('click', function () {
  const userInput = Number(document.querySelector('.guess').value);
  console.log(userInput, typeof userInput);

  if (score > 0) {
    if (!userInput) {
      message.textContent = 'Please choose number.';
    } else if (userInput === number) {
      message.textContent = 'Correct number 👍';
      document.body.style.backgroundColor = 'green';
      document.querySelector('.number').textContent = number;
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (userInput !== number) {
      userInput > number
        ? (message.textContent = 'Too high!')
        : (message.textContent = 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      if (score === 0) {
        message.textContent = 'You lost the game.😢';
      }
    }
  }
});
again.addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
