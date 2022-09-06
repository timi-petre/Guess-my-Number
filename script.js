'use strict';
/*
////Whats DOM and DOM Manipulation
console.log(document.querySelector('.message').textContent);

////Selecting and Manipulating Elements
document.querySelector('.message').textContent = '😊Correct Number!';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

////Handling Click events
//1.Define the secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreNumber = 20; //State variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //Compare if there is a number
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? 'Try lower' : 'Try higher');
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
    // }
    // //When guessis too high
    // else if (guess > secretNumber) {
    //   if (scoreNumber > 1) {
    //     document.querySelector('.message').textContent = 'Try lower';
    //     scoreNumber--;
    //     document.querySelector('.score').textContent = scoreNumber;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
    // //When guessis too low
    // else if (guess < secretNumber) {
    //   if (scoreNumber > 1) {
    //     document.querySelector('.message').textContent = 'Try higher';
    //     scoreNumber--;
    //     document.querySelector('.score').textContent = scoreNumber;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //When player wins
  } else {
    if (scoreNumber > highscore) {
      highscore = scoreNumber;
    }
    // document.querySelector('.message').textContent = 'Correct Number! 🥳';
    displayMessage('Correct Number! 🥳');
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = scoreNumber;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
