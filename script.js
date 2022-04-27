'use strict';
// Constants
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const correctNumber = document.querySelector('.number');
const guessNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');

// Class
class Guess {
  constructor(random, correctNumber, guessNumber, score, highScore, message) {
    this.random = random;
    this.correctNumber = correctNumber;
    this.guessNumber = guessNumber;
    this.score = score;
    this.highScore = highScore;
    this.message = message;
    this.highestSoFar;
  }
  again() {
    this.score.textContent = 20;
    this.random = Math.floor(Math.random() * 20 + 1);
    this.correctNumber.textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    this.message.textContent = 'Start guessing...';
    this.guessNumber.value = '';
  }
  updateDisplay() {
    if (Number(this.guessNumber.value) < this.random)
      this.message.textContent = '📉 Too Low!';
    if (Number(this.guessNumber.value) > this.random)
      this.message.textContent = '💹 Too High!';
    score.textContent = Number(score.textContent) - 1;
    if (Number(score.textContent) === 0)
      this.message.textContent = '💥 You lost the game!';
  }
  showSuccess() {
    this.correctNumber.textContent = this.random;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    this.message.textContent = '🎉 Correct Number!';
    this.highestSoFar =
      Number(this.score.textContent) > Number(this.highestSoFar) ||
      this.highestSoFar === undefined
        ? this.score.textContent
        : this.highestSoFar;
    highScore.textContent = this.highestSoFar;
  }
}

// Instant
const newGuess = new Guess(
  Math.floor(Math.random() * 20 + 1),
  correctNumber,
  guessNumber,
  score,
  highScore,
  message
);

// Event Handlers
checkBtn.addEventListener('click', () => {
  if (Number(newGuess.score.textContent) === 0) return;

  if (Number(newGuess.guessNumber.value) === newGuess.random) {
    newGuess.showSuccess();
  }
  if (Number(newGuess.guessNumber.value) !== newGuess.random) {
    newGuess.updateDisplay();
  }
});

againBtn.addEventListener('click', () => {
  newGuess.again();
});
