'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const correctNumber = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');

class Guess {
  constructor(random, correctNumber) {
    this.random = random;
    this.correctNumber = correctNumber;
    this.guessNumber = guessNumber;
    console.log(this.random);
  }
  check() {}
  again() {
    score.textContent = 20;
    this.correctNumber.textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    message.textContent = 'Start guessing...';
    this.guessNumber.value = '';
  }
  updateDisplay() {
    if (Number(this.guessNumber.value) < this.random)
      message.textContent = '📉 Too Low!';
    if (Number(this.guessNumber.value) > this.random)
      message.textContent = '💹 Too High!';
    score.textContent = Number(score.textContent) - 1;
  }
  showSuccess() {
    this.correctNumber.textContent = this.random;
    document.querySelector('body').style.backgroundColor = '#60b347';
    message.textContent = '🎉 Correct Number!';
    highScore.textContent = score.textContent;
  }
}

const newGuess = new Guess(
  Math.floor(Math.random() * 20 + 1),
  correctNumber,
  guessNumber
);

checkBtn.addEventListener('click', () => {
  if (Number(guessNumber.value) === newGuess.random) {
    newGuess.showSuccess();
  }
  if (Number(guessNumber.value) !== newGuess.random) {
    newGuess.updateDisplay();
  }
});

againBtn.addEventListener('click', () => {
  newGuess.again();
});
